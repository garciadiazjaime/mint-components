<script>
  import { slide } from 'svelte/transition';
  export let items = [];
  let openedItem = null;

  const setOpenedItem = index => openedItem !== index ? openedItem = index : openedItem = null;

</script>
<style>
  ul {
    list-style: none;
    padding-left: 0;
  }
  button {
    background: transparent;
    position: relative;
    border: none;
    border-radius: 0;
    cursor: pointer;
    width: 100%;
    padding: 10px 30px 10px 10px;
    margin: 0;
    text-align: left;
    border-bottom: solid 1px #aaa;
    font-size: 16px;
  }
  button:after {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    right: 20px;
    top: calc(50% - 10px);
    border-right: solid 2px black;
    border-bottom: solid 2px black;
    transform: rotate(45deg);
  }
  button:hover, button:active, button:focus {
    background-color: #efefef;
    outline: none;
  }
  p {
    margin: 20px 0 0;
    padding: 0 20px 20px;
    border-bottom: solid 1px #aaa;
  }
</style>
<ul>
  {#each items as { title, content }, index}
    <li>
      <button on:click={() => setOpenedItem(index)}>{title}</button>
      {#if openedItem ===index}
        <p transition:slide="{{ duration: 150 }}">
            {content}
        </p>
      {/if}
    </li>
  {/each}
</ul>
