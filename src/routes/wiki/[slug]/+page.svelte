<script lang="ts">
	import MarkdownText from '$lib/components/MarkdownText.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<span class=" text-3xl font-bold">{data.title}</span>
<br />
<div>
	<MarkdownText md={data.content}></MarkdownText>
</div>
