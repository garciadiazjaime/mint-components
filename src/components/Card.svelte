<script>
  import { onMount } from "svelte";
  import { styleComponent } from "../utils/themeUtil";
  export let theme = {};
  let component;

  onMount(async () => {
    if(theme) {
      styleComponent(component, theme);
    }
  });

</script>
<style>
  div {
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    padding: 8px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
  }
</style>
<div bind:this={component}>
  <slot />
</div>
