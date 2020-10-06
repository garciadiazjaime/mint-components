<script>
  import Loading from '../components/Loading.svelte'
  export let src;
  export let alt;
  export let height = '100%';
  export let width = '100%';
  export let errorImage = 'http://www.feedmetj.com/error_img.svg';

  import { onMount } from 'svelte';

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.style.height = height;
    thisImage.style.width = width;
    thisImage.onload = () => {
      loaded = true
    }
    thisImage.onerror = () => {
      src = errorImage;
    }
  });

</script>

<style>
  .image-container {
    position: relative;
  }
  img {
    opacity: 0;
    object-fit: cover;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
  .loading-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<div class="image-container">
  {#if !loaded}
    <div class="loading-container">
      <Loading />
    </div>
  {/if}
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />
</div>
