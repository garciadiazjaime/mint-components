<script>
  import { onMount } from "svelte";
  import { styleComponent } from "../utils/themeUtil";
  
  export let theme = {};
  export let href = '';
  let component;

  onMount(async () => {
    if(theme) {
      styleComponent(component, theme);
    }
  });

</script>
<style>
  a {
    background-color: #f69571;
    border: none;
    color: #fff;
    display: block;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    padding: 12px 0;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    width: 100%;
  }
</style>
<a bind:this={component} {href}>
  <slot />
</a>
