<script>
	import { onMount, setContext } from 'svelte';

	if (process.browser) {
		setContext(window.key, {
			getMap: () => map
		});
	}

	export let coords;
	export let zoom;
	export let enablePinMarker = false;
	export let enableDragMarker = false

	let container;
	let map;
	let marker;

	onMount(() => {
		map = new mapboxgl.Map({
			container,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: coords,
			zoom
		});

		if (enablePinMarker) {
			map.on('click', setMarker);

			const userCoordinates = JSON.parse(window.localStorage.getItem('@location'));
			if (userCoordinates) {
				setMarker({
					lngLat: userCoordinates
				})
			}
		}

		if (enableDragMarker) {
			map.on('dragend', () => {
				window.localStorage.setItem('@location', JSON.stringify(map.getCenter()));
			});
		}

		return () => {
			map.remove();
		};
	});

	function setMarker(event) {
		const { lngLat } = event
		window.localStorage.setItem('@location', JSON.stringify(lngLat));

    if (!marker) {
      marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .addTo(map);
    } else {
			marker.setLngLat(lngLat);
		}
  }
</script>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>

<div bind:this={container}>
	{#if map}
		<slot></slot>
	{/if}
</div>
