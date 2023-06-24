<script lang="ts">
	// const socket: WebSocket = new WebSocket('ws://services.bits-fusion.com:3000');
	const socket: WebSocket = new WebSocket('wss://services.bits-fusion.com:8080');

	console.clear();

	// Connection opened
	socket.addEventListener('open', (event: Event) => {
		console.log('Connected to WebSocket server');
		// Send data to the server
		socket.send('Hello Server!');
	});

	// Listen for messages from the server
	socket.addEventListener('message', (event: MessageEvent) => {
		const message: string = event.data;
		console.log('Received message from server:', message);
	});

	// Handle errors
	socket.addEventListener('error', (error: Event) => {
		console.error('WebSocket error:', error);
	});

	// Connection closed
	socket.addEventListener('close', (event: CloseEvent) => {
		console.log('Disconnected from WebSocket server');
	});
</script>

<div class="flex flex-col items-center justify-center h-screen">ws</div>
