/******************************************************************************
 * Username: dtwin
 * Password: dtwin
 ******************************************************************************
 * 178.128.98.237
 * mosquitto_sub -h localhost -t test -u "dtwin" -P "dtwin"
 * mosquitto_pub -h localhost -t "test" -m "hello world" -u "dtwin" -P "dtwin"
 ******************************************************************************/


import mqtt from 'mqtt';
import { EngineEventBus } from '../Engine/EngineEventBus';


// import { EngineEvent } from "../Engine";


interface MqttServerSettings {
    host: string
    port: string
    username: string
    password: string
}

interface MqttConnectionOptions extends MqttServerSettings {
    clientId: string
    clean: boolean
}

export interface MqttMessage {
    topic: string
    data: string
}

export interface MqttEventMessage extends MqttMessage {
    type: string
}

export type MqttClient = any;

export default class MQTTClient {



    private eventBus = EngineEventBus.getInstance();

    // private Mqtt: any = require('mqtt/dist/mqtt');
    private Mqtt: any = mqtt;


    /*
    static ServerSettings: MqttServerSettings = {
        host: "178.128.215.149",
        port: "8080",
        username: "rtnet3d",
        password: "rtnet3d"
    }
    */
    static ServerSettings: MqttServerSettings = {
        host: "178.128.98.237",
        port: "8083",
        username: "dtwin",
        password: "dtwin"
    }


    private connectionOptions: MqttConnectionOptions = {
        clientId: "dtwin",
        clean: true,
        ...MQTTClient.ServerSettings
    };

    private client!: any;
    private connected = false;

    private ON_MSG_EVT = `mqtt_on_message`;


    constructor(clientId: string) {

        this.connectionOptions.clientId = clientId;
    }

    connect(host: string | MqttServerSettings, port?: string, username?: string, password?: string) {

        if (typeof host === 'string') {

            this.connectionOptions.host = host;
            this.connectionOptions.port = port || MQTTClient.ServerSettings.port;
        }
        else {
            this.connectionOptions.host = host.host;
            this.connectionOptions.port = host.port || MQTTClient.ServerSettings.port;
        }

        this.connectionOptions.username = username || MQTTClient.ServerSettings.username;
        this.connectionOptions.password = password || MQTTClient.ServerSettings.password;

        return this._doConnect();	// Return Promise
    }

    private _doConnect = () => {

        return new Promise((resolve, reject) => {

            const url = `ws://${this.connectionOptions.host}:${this.connectionOptions.port}`;

            console.log(`MqttClient: Connecting to Mqtt Server "${url}"`);
            this.client = this.Mqtt.connect(url, this.connectionOptions);


            let cnt = 0;
            const timer = setInterval(() => {
                console.log(`Reconnecting to Mqtt Server "${url}" [${++cnt}]`);
                this.client = this.Mqtt.connect(url, this.connectionOptions);
            }, 2000);

            /**
             * On Connect
             */
            this.client.on('connect', (res: any) => {
                if (res.cmd === "connack") {	// Connection Acknowledgment
                    this.connected = true;
                    clearInterval(timer);
                    console.log(`MqttClient: Connected to Mqtt Server "${url}"`);
                    resolve(this.client);
                }
                else {
                    console.error(`MqttClient: Connection failed: ${res.cmd}`);
                }
            });

            /**
             * On Error
             */
            this.client.on('error', (error: any) => {
                console.error(`MqttClient: Connection failed: ${error}`);
            });

            /**
             * On Reconnect
             */
            this.client.on('reconnect', (error: any) => {
                console.log(`MqttClient: Reconnecting to Mqtt Server "${url}" ${error}`);
            });


            /**
             * On Message
             */
            this.client.on('message', (topic: any, message: any) => {

                this.eventBus.dispatch(/*this.ON_MSG_EVT*/ "slide-changed", message);
                console.log('MqttClient: Receive message：', topic, message.toString());
            });
        })
    }




    subscribe(topic: string) {
        if (this.connected === false) {
            console.error(`MqttClient: Cannot subscribe (disconnected)`);
        }
        this.client.subscribe(topic);
    }

    publish(topic: string, message: string) {
        if (this.connected === false) {
            console.error(`MqttClient: Cannot publish (disconnected)`);
        }
        this.client.publish(topic, message);
    }


    // onMessage(callback: Function) {
    //     this.addEventListener(this.ON_MSG_EVT, callback);
    //     return this;
    // }

    onSlideChanged(callback: (event: MqttMessage) => void) {
        this.eventBus.register("slide-changed", callback);
        return this;
    }

}