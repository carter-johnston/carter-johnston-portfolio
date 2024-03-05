<script lang="ts">
	import { onMount } from "svelte";
	import { frames } from "./frames";

	let keyFrame = 0;

	onMount(() => {
		setInterval(setNextKeyFrame, 200)
	});

	const setNextKeyFrame = async () => {
		keyFrame = (keyFrame + 1) % frames.length;
		await wait(currentFrame.durationMs)
	}

	$: currentFrame = frames[keyFrame];

	const wait = async (seconds: number) => 
		new Promise((resolve) => setTimeout(resolve, seconds * 100))
</script>

<svelte:component this={currentFrame.component} />