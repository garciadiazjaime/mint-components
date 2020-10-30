<script>
  import { slide, fade } from 'svelte/transition';
  export let visible = false;
  export let shaded = false;
</script>
<style>
  .drawer {
    background: white;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    box-shadow: 0 -2px 1px -1px rgba(0,0,0,.2), 0 -1px 1px 0 rgba(0,0,0,.14), 0 -1px 3px 0 rgba(0,0,0,.12);
    overflow-y: scroll;
  }
  @media (min-width: 600px) {
		.drawer {
      height: 50%;
		}
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px;
    opacity: 0.3;
    border-radius: 0;
    background: none;
    border: none;
    z-index: 2;
  }
  .close:hover {
    opacity: 1;
  }
  .close:focus {
    box-shadow: none;
    outline: none;
  }
  .close:before, .close:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
    top: 0;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {  
    transform: rotate(-45deg);
  }
  .shaded {
    z-index: 9;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
{#if visible}
  {#if shaded}
    <div class="shaded" on:click={() => visible = false} transition:fade />
  {/if}
  <div class="drawer" transition:slide="{{ duration: 350 }}">
    <button class="close" on:click={() => visible = false} />
    <slot></slot>
  </div>
{/if}
