import { Client, Message } from 'paho-mqtt';
import { revealStore } from '../revealStore';


let oldLoc = '';
let newLoc = window.location.hash;;


const doSyncPage = () => {
    newLoc = window.location.hash;
    if (newLoc !== oldLoc) {
        oldLoc = newLoc;
        if (client.isConnected()) {
            const message = new Message(window.location.hash);
            message.destinationName = 'slide-changed';
            client.send(message);
        }
    }
}

revealStore.subscribe((reveal) => {
    reveal?.addEventListener('slidechanged', (e: any) => {
        doSyncPage();
    });
    reveal?.addEventListener('fragmentshown', (e: any) => {
        doSyncPage();
    });
    reveal?.addEventListener('fragmenthidden', (e: any) => {
        doSyncPage();
    });
});

let interval;
if (!interval) {
    setInterval(() => {
        doSyncPage();
    }, 1000);

}

export const userId = `id-${Math.round(Math.random() * 100000)}`

let client: Client;
let _callback: (message: Message) => void;
export const onMessage = (callback: (message: Message) => void) => {
    _callback = callback;
}

export const connect = () => {
    const brokerUrl = 'ws://178.128.98.237:8083/mqtt';
    const clientId = userId;//'user-1-' + Math.random().toFixed(5);
    const username = 'dtwin';
    const password = 'dtwin';

    client = new Client(brokerUrl, clientId);

    client.onConnectionLost = (responseObject: any) => {
        console.log(`Connection lost: ${responseObject.errorMessage}`);
        setTimeout(() => client.connect(), 3000)
    };

    client.onMessageArrived = (message: Message) => {
        // console.log(
        //     `Received message on topic "${message.destinationName}": ${message.payloadString}`
        // );
        // window.location.assign(message.payloadString);
        _callback?.(message);
    };

    client.connect({
        onSuccess: () => {
            console.log('Connected to MQTT broker');
            client.subscribe('slide-changed');
        },
        onFailure: (responseObject: any) => {
            console.log(`Failed to connect: ${responseObject.errorMessage}`);
            setTimeout(() => client.connect(), 3000)
        },
        userName: username,
        password: password
        // useSSL: true // Enable SSL/TLS for secure communication
    });
}

export const disconnect = () => {
    if (client?.isConnected()) {
        client.disconnect();
    }
}