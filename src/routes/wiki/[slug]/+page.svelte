<script lang="ts">
	import MarkdownText from '$lib/components/MarkdownText.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="flex w-full flex-row">
	<div>
		<h1>for later probably</h1>
	</div>
	<div class="w-full">
		<span class=" text-3xl font-bold">{data.title}</span>
		<br />
		<MarkdownText md={data.content}></MarkdownText>
	</div>
	<div>
		<img
			src="https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif"
			alt="cat going crazy"
			class=" h-64 w-64"
		/>
	</div>
</div>
