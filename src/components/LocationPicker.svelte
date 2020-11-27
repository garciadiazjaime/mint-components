<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import Map from './Map.svelte';
  import { setUserLocation } from '../utils/location';
  import './LocationPicker.scss';

  const dispatch = createEventDispatcher();
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

  async function handleClick() {
    await setUserLocation();
    dispatch('coordinatesChange');
  }
</script>
<div class="location-picker">
  <h2><slot></slot></h2>
  {#if centerCoords}
  <div class="map-container">
    <Map coords={centerCoords} zoom={defaultCoords.zoom} enableDragMarker={true}></Map>
  </div>
  {/if}
  <button class="cta" action="accept" on:click={handleClick}>Aceptar</button>
</div>
