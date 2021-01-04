<script>
	import { onMount } from 'svelte';
	import Map from '../components/map.svelte';
	export let defaultCoords;
  let centerCoords;

	onMount(() => {
    const userCoordinates = JSON.parse(window.localStorage.getItem('@location'));
    if (userCoordinates) {
      centerCoords = [userCoordinates.lng, userCoordinates.lat];
    } else {
      centerCoords = [defaultCoords.lng, defaultCoords.lat];
    };
  });
</script>
asdfadsf
<Map coords={centerCoords} zoom={defaultCoords.zoom} enableDragMarker={true}></Map>
