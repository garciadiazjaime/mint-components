<script>
  import Card from './Card.svelte';
  import LinkButton from './LinkButton.svelte';
  import Keywords from './Keywords.svelte';
  import Location from './Location.svelte';
  import ImageLoader from './ImageLoader.svelte';
    import { formatPhoneNumber } from '../utils/postUtil';
  export let data = {};
  export let cardAction = {};
</script>
<style>
  .card-content {
		position: relative;
    padding: 8px;
    transition: height .3s;
    height: 100%;
  }
  .card-action {
    cursor: pointer;
  }
  .title {
    line-height: 1;
    color: #313d69;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (min-width: 450px) {
		.title {
			font-size: 20px;
		}
	}
</style>
<Card>
  <div class="card-content">
    <div class="card-action" on:click={cardAction}>
      {#if data.image}
        <ImageLoader src={data.image} alt={data.title} height="180px" />
      {/if}
      {#if data.title}
        <div class="title">
          {data.title}
        </div>
      {/if}
    </div>
    {#if data.keywords}
      <Keywords keywords={data.keywords} />
    {/if}
    {#if data.location}
      <Location address={data.location.address} dist={data.location.dist} coords={data.location.coords} />
    {/if}
    <LinkButton href={`tel:${data.phone}`}>
      {formatPhoneNumber(data.phone)}
    </LinkButton>
  </div>
</Card>
