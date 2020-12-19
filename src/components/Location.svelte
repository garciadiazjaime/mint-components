<script>
  export let address;
  export let dist;
  export let coords;
  export let showDistance = true

  $: location = getLocation(address);
  $: distance = getDist(dist);

  function getLocation(address) {
    return address.length > 45 ? address.substr(0, 45) + '...' : address;
  }
  function getDist(dist) {
    dist = Number(dist)/1000;
    return `${dist.toFixed(1)}km`;
  }
  function getUrl([lng, lat]) {
    const destination = `${lat}, ${lng}`;
    return `https://www.google.com/maps/search/?api=1&query=${destination}`;
  }
</script>

<style>
  a {
    display: block;
    font-size: 16px;
    color: #a2a2a2;
  }
  span {
    color: #727272;
  }
</style>

{#if location || dist && coords}
  <a href={getUrl(coords)} target='_blank' rel="nofollow noreferrer">
    <span>{showDistance ? distance : ''} { showDistance && distance && location ? '|' : ''}</span> {location}
  </a>
{/if}
