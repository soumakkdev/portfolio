<script>
	let emailId = 'soumakkdutta@gmail.com';
	let year = new Date().getFullYear();
	let social = {
		twitter: 'https://twitter.com/soumakkdev',
		github: 'https://github.com/soumakkdev'
	};
</script>

<footer>
	<div class="flex items-center justify-between p-4">
		<a href="mailto:{emailId}">{emailId}</a>

		<nav class="space-x-4">
			<a href={social.twitter} target="_blank" rel="noreferrer">Twitter</a>
			<a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
		</nav>

		<p>&copy; soumak {year}</p>
	</div>
</footer>
