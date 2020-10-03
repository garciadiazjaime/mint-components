<script>
  export let address;
  export let dist;
  export let coords;
  $: location = getLocation(address);
  $: distance = getDist(dist);

  function getLocation(address) {
    return address.length > 45 ? address.substr(0, 45) + '...' : address;
  }
  function getDist(dist) {
    dist = Number(dist)/1000;
    return `${dist.toFixed(1)}km`;
  }
  function getUrl(coords) {
    const destination = `${coords.lat}, ${coords.lng}`;
    return `https://www.google.com/maps/search/?api=1&query=${destination}`;
  }
</script>

<style>
  a {
    display: block;
    min-height: 45px;
    font-size: 16px;
    color: #a2a2a2;
  }
  span {
    color: #727272;
  }
</style>

{#if location || dist && coords}
  <a href={getUrl(coords)} target='_blank'>
    <span>{distance} { distance && location && '|'}</span> {location}
  </a>
{/if}
