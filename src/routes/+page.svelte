<script>
	let title = 'Soumak Dutta';
	let description = 'Frontend developer based in India, making web applications for enterprise';
	let keywords = [
		'soumak',
		'soumak dutta',
		'soumakkdev',
		'frontend developer',
		'portfolio website'
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords?.join(',')} />
	<meta name="author" content="@soumakkdev" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="uppercase font-display h-full">
	<div class="grid place-content-center h-full">
		<h3 class="text-2xl">Hi, my name is</h3>
		<h1 class="text-8xl justify-self-center">Soumak Dutta</h1>
		<h2 class="text-5xl justify-self-end">A Frontend Developer</h2>
		<h3 class="text-2xl justify-self-end">based in India</h3>
	</div>
</section>
