<script>
  import { slide, fade } from 'svelte/transition';
  export let isVisible = false;
</script>
<style>
  .modal {
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px;
    background: white;
    width: 90vw;
    position: relative;
    max-width: 700px;
    height: 90vh;
    margin: 0 auto;
    z-index: 10;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    overflow-y: scroll;
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
  .container {
    box-sizing: border-box;
    z-index: 9;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    padding: 5vh 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
{#if isVisible}
  <div class="container" on:click={() => isVisible = false} transition:fade>
    <div class="modal" transition:fade="{{ duration: 250 }}">
      <button class="close" on:click={() => isVisible = false} />
      <slot></slot>
    </div>
  </div>
{/if}
