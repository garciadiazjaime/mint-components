<script>
  import Card from './Card.svelte';
  import Title from './Title.svelte';
  export let content = {
    title: 'Title',
  }
</script>
<style>
  .card-content {
		position: relative;
    padding: 8px;
    transition: height .3s;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-content: space-between;
  }
  .last-item {
    margin-top: auto;
  }
</style>
<Card>
  <div class="card-content">
    <Title>
      {content.title}
    </Title>
    <p>
      whatever
    </p>
  </div>
</Card>
