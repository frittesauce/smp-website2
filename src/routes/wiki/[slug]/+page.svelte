<script lang="ts">
	import MarkdownText from '$lib/components/MarkdownText.svelte';

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{data.pages.title}</title>
</svelte:head>

<div class="flex w-full flex-row">
	<div>
		<h1>for later probably</h1>
	</div>
	<div class="prose w-full">
		<span class=" text-3xl font-bold">{data.pages.title}</span>
		<br />
		<MarkdownText extra_class="markdown-content" md={data.pages.content}></MarkdownText>
	</div>
	<div>
		<p>{data.infoboxes.title}</p>
		<img src={data.infoboxes.image_url} />
	</div>
</div>
