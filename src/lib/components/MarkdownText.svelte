<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	export let md: string;
	const plugins = [gfmPlugin()];
</script>

<Markdown {md} {plugins} />
