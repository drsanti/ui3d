<script lang="ts">
	import type { Message } from 'paho-mqtt';
	import { MqttPahoClient } from '../ui3d/NetLink/MqttPahoClient';

	let clientId = '';
	let clientTopic = '';
	let receivedData = '';
	let isConnected = false;

	const client = new MqttPahoClient({
		onConnectionSuccess: (id: string, topic: string) => {
			clientId = id;
			clientTopic = topic;
			isConnected = true;
		},
		onConnectionLost: (id: string, e: Paho.MQTT.MQTTError) => (isConnected = false),
		onMessageArrived: (id: string, message: Message) =>
			(receivedData = message.payloadString)
	}).connect();
</script>

<div class="flex flex-col items-center justify-center h-screen">
	{#if isConnected}
		<p class="text-2xl text-[#5f8]">Connected to services.bits-fusion.com</p>
		<p class="text-neutral-500">{clientId}</p>
		<p class="text-neutral-500">{clientTopic}</p>
		<p class="text-[#8fc] text-xl">{receivedData}</p>
	{:else}
		<p class="text-2xl text-[#fd8]">Connecting to services.bits-fusion.com</p>
	{/if}
</div>
