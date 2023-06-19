<script lang="ts">
	// import { onDestroy, onMount } from 'svelte';
	// import { revealStore } from '../revealStore';

	// let fragCount = 0;
	// const moveToNextFragment = () => {
	// 	if ($revealStore) {
	// 		$revealStore.nextFragment();
	// 		fragCount++;
	// 	}
	// };

	// const autoPlay = () => {
	// 	const interval = setInterval(() => {
	// 		moveToNextFragment();
	// 		if (fragCount >= 4) {
	// 			clearInterval(interval);
	// 		}
	// 	}, 500);
	// };

	// revealStore.subscribe((reveal) => {
	// 	reveal?.addEventListener('slidechanged', (e: any) => {
	// 		console.log(e);
	// 		if (e.indexh == 1 && e.indexv == 0) {
	// 			//
	// 		}
	// 		console.log(`current location: ${window.location.hash}`);
	// 	});
	// });

	//--------------------

	// onMount(() => {
	// 	// Usage
	// 	console.log('onMount');

	// 	revealStore.subscribe((reveal) => {
	// 		reveal?.addEventListener('slidechanged', (event: any) => {
	// 			console.log(event);
	// 			if (event.indexh == 1 && event.indexv == 0) {
	// 				autoPlay();
	// 			}
	// 		});
	// 	});
	// });

	/// host: '178.128.98.237',
	/// port: '8083',
	/// username: 'dtwin',
	/// password: 'dtwin'

	let pid = 0;
	let prvLocation = '';
	let newLocation = '';
	// setInterval(() => {
	// 	newLocation = window.location.hash;
	// 	if (newLocation !== prvLocation) {
	// 		prvLocation = newLocation;
	// 		console.log(`current location: ${window.location.hash}`);
	// 		// window.location.assign(`/#/0/0/${pid++}`);
	// 		if (client.isConnected()) {
	// 			const message = new Message(`/#/0/0/${pid++}`);
	// 			pid %= 10;
	// 			message.destinationName = 'slide-changed';
	// 			client.send(message);
	// 		}
	// 	}
	// }, 2000);

	//--------------------------

	// import { Client, Message } from 'paho-mqtt';

	// let client: Client;

	// onMount(() => {
	// 	initMqtt();
	// });

	// onDestroy(() => {
	// 	client?.disconnect();
	// });

	// const initMqtt = () => {
	// 	const brokerUrl = 'ws://178.128.98.237:8083/mqtt';
	// 	const clientId = 'user-1';
	// 	const username = 'dtwin';
	// 	const password = 'dtwin';

	// 	client = new Client(brokerUrl, clientId);

	// 	client.onConnectionLost = (responseObject: any) => {
	// 		console.log(`Connection lost: ${responseObject.errorMessage}`);
	// 	};

	// 	client.onMessageArrived = (message: Message) => {
	// 		console.log(
	// 			`Received message on topic "${message.destinationName}": ${message.payloadString}`
	// 		);
	// 		window.location.assign(message.payloadString);
	// 	};

	// 	client.connect({
	// 		onSuccess: () => {
	// 			console.log('Connected to MQTT broker');
	// 			client.subscribe('slide-changed');
	// 		},
	// 		onFailure: (responseObject: any) => {
	// 			console.log(`Failed to connect: ${responseObject.errorMessage}`);
	// 		},
	// 		userName: username,
	// 		password: password
	// 		// useSSL: true // Enable SSL/TLS for secure communication
	// 	});
	// };
</script>
