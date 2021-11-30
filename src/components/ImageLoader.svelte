<script>
  export let src;
  export let alt;
  export let height;
  export let width;
  export let refreshDB;
  export let errorImage;

  import IntersectionObserver from './IntersectionObserver.svelte'
  import Image from './Image.svelte'
  import { onMount } from 'svelte'

  let nativeLoading = false
  onMount(() => {
    if ('loading' in HTMLImageElement.prototype) {
      nativeLoading = true
    }
  })
  
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <Image {alt} {src} {height} {width} {refreshDB} {errorImage} />
  {/if}
</IntersectionObserver>
