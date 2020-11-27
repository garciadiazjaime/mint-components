<script>
  import { onMount } from 'svelte';
  import { userLocation } from '../utils/stores.js'
  import { setUserLocation } from '../utils/location'
  import './UpdateLocationCTA.scss';

  onMount(setUserLocation);
</script>
<div class="update-location-cta">
  <div class="grid-container">
    <img src="/icons/location.svg" aria-hidden alt="" />
    <p>
      Cerca de {$userLocation}
    </p>
    <button aria-label="Escoge en que área estás">
      Cambiar
    </button>
  </div>
</div>
