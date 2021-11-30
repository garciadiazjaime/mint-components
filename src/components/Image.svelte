<script>
  import { onMount } from 'svelte';
  import Loading from '../components/Loading.svelte';

  export let src = [];
  export let refreshDB;
  export let alt;
  export let height = '100%';
  export let width = '100%';
  export let errorImage = 'http://www.feedmetj.com/error_img.svg';
  let imageIndex = 1;

  function getSrc(src) {
    if (src) {
      if(Array.isArray(src)) {
        return src[0];
      }
      return src;
    }
  }

  function getValidImage(index) {
    let newSrc;
    if (index < src.length) {
      newSrc = src[index];
    }
    imageIndex += 1;
    return newSrc;
  }

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.style.height = height;
    thisImage.style.width = width;
    thisImage.onload = () => {
      loaded = true
    }
    thisImage.onerror = () => {
      src = getValidImage(imageIndex) || errorImage;
      console.log(refreshDB)
      if(typeof refreshDB === 'function') {
        refreshDB(src);
      }
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
  <img src={getSrc(src)} {alt} class:loaded bind:this={thisImage} loading="lazy" />
</div>
