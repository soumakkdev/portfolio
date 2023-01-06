<script>
	import Header from '../layout/Header.svelte';
	import Footer from '../layout/Footer.svelte';
	import '../app.css';
</script>

<main class="max-w-7xl mx-auto h-full">
	<div class="flex flex-col h-full">
		<Header />
		<div class="flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</main>
