import { Client, Message } from 'paho-mqtt';


export interface MqttCallbackOptions {
    onConnectionSuccess?: (clientId: string, topic: string) => void;
    onConnectionFailure?: (clientId: string, event: Paho.MQTT.ErrorWithInvocationContext) => void;
    onConnectionLost?: (clientId: string, event: Paho.MQTT.MQTTError) => void;
    onMessageArrived?: (clientId: string, message: Message) => void;
}

export class MqttPahoClient {

    // private brokerUrl = 'ws://178.128.98.237:8083/mqtt';
    private brokerUrl = 'ws://services.bits-fusion.com:8083/mqtt';
    private username = 'dtwin';
    private password = 'dtwin';
    private clientId = 'mqtt-client-id-' + (Math.random() * 10000).toFixed(0);

    private RECONNECT_TIMEOUT = 5000;

    private SELF_CHECK_TOPIC = `self-check`;

    private client: Client;

    callbacks?: MqttCallbackOptions;

    private selfTopic = this.clientId.replace(`mqtt-client-id-`, `self-topic/`);

    constructor(callbacks?: MqttCallbackOptions) {
        this.client = new Client(this.brokerUrl, this.clientId);
        this.callbacks = callbacks;
    }


    public connect = () => {
        this.logI(`Connecting to MQTT Broker...`);
        //
        this.client.onConnectionLost = (e: Paho.MQTT.MQTTError) => {
            this.logE(`Connection lost!`);
            this.logE(e.errorMessage);
            //
            this.callbacks?.onConnectionLost?.(this.clientId, e);
            setTimeout(() => this.client.connect(), this.RECONNECT_TIMEOUT);
        };

        this.client.onMessageArrived = (message: Message) => {
            this.logI(message.payloadString);
            //
            this.callbacks?.onMessageArrived?.(this.clientId, message);
        };

        this.client.connect({
            userName: this.username,
            password: this.password,
            //
            onSuccess: () => {
                this.logS('Connected to MQTT broker');
                this.client.subscribe(this.SELF_CHECK_TOPIC);
                //
                const message = new Message(this.clientId);
                message.destinationName = this.SELF_CHECK_TOPIC;
                this.client.send(message);
                //
                this.callbacks?.onConnectionSuccess?.(this.clientId, this.selfTopic);

            },
            onFailure: (e: Paho.MQTT.ErrorWithInvocationContext) => {
                this.logE(`Connection failure!`);
                this.logE(e.errorMessage);
                //
                this.callbacks?.onConnectionFailure?.(this.clientId, e);
                //
                setTimeout(() => this.client.connect(), this.RECONNECT_TIMEOUT);
            },
        });

        return this;
    }

    public subscribe = (topic: string) => {
        this.client?.subscribe(topic);
        return this;
    }

    public publish = (topic: string, message: string) => {
        const mqttMessage = new Message(message);
        mqttMessage.destinationName = topic;
        this.client?.send(mqttMessage);
        return this;
    }

    public disconnect = () => {
        this.client?.disconnect();
    }

    private logE = (str: string) => {
        console.log(`%c${this.clientId}: %c${str}`, `color:#855`, `color:#f84`);
    }
    private logI = (str: string) => {
        console.log(`%c${this.clientId}: %c${str}`, `color:#855`, `color:#48f`);
    }
    private logS = (str: string) => {
        console.log(`%c${this.clientId}: %c${str}`, `color:#855`, `color:#4f8`);
    }

}



