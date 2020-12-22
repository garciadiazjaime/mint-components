<script>
  import { onMount } from "svelte";
  export let data = [];
  let component;

  onMount(async () => {
    if(theme) {
    }
  });

</script>
<style>

</style>
<ul>
  {#each data as { title, content}, i}
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  {/each}
</ul>
