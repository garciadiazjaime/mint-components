<script>
  export let src;
  export let alt;
  export let height = '100%';
  export let width = '100%';

  import { onMount } from 'svelte'

  let loaded = false
  let thisImage

  onMount(() => {
    thisImage.style.height = height;
    thisImage.style.width = width;
    thisImage.onload = () => {
      loaded = true
    }
  }) 

</script>

<style>
  img {
    opacity: 0;
    object-fit: cover;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
  .loader  {
    animation: rotate 1s infinite;  
    height: 50px;
    width: 50px;
  }
</style>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />
