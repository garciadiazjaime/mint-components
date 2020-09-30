<script>
  import { onMount } from "svelte";
  import { themeComponent } from "../utils/themeUtil";
  export let theme = {
    background: '#fff',
  }

  onMount(async () => {
    themeComponent('card', theme);
  });

</script>
<style>
  div {
    background-color: var( --card-background);
    border-radius: 4px;
    position: relative;
    padding: 8px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
  }
</style>
<div>
  <slot />
</div>
