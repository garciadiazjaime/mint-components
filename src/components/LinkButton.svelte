<script>
  export let href = '';
  export let background;
  export let blank = false;
  let component;

</script>
<style>
  a {
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
<a bind:this={component} {href} style={`background: ${background ? background : '#f69571'}`} target={blank ? '_blank' : '_self'}>
  <slot />
</a>
