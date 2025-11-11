<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	export let md: string;
	export let extra_class: string;
	const plugins = [gfmPlugin()];
</script>

<div class={extra_class}>
	<Markdown {md} {plugins} />
</div>
