<script>
  import Card from './Card.svelte';
  import Button from './Button.svelte';
  import Keywords from './Keywords.svelte';
  import Location from './Location.svelte';
  import ImageLoader from './ImageLoader.svelte';
  export let content = {
    image: 'https://scontent.cdninstagram.com/v/t51.29350-15/120032472_697626587501345_691584147049091139_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=2NoaBGOn_jAAX9cNI5U&_nc_ht=scontent.cdninstagram.com&oh=e0127fc86c2169b9bab5413b2303892d&oe=5F8FA107',
    title: 'Restaurant Name',
    phone: '6643908224',
    keywords: [
      'tacos',
      'desayuno',
    ],
    location: {
      address: '84 Rainey Street, Arlen, Texas',
      dist: 1500,
      coords: {
        lat: 32.5062778,
        lng: -117.1148935,
      },
    }
  }
</script>
<style>
  .card-content {
		position: relative;
    padding: 8px;
    transition: height .3s;
    height: 100%;
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
    {#if content.image}
      <ImageLoader src={content.image} alt={content.title} height="180px" />
    {/if}
    {#if content.title}
      <div class="title">
        {content.title}
      </div>
    {/if}
    {#if content.keywords}
      <Keywords keywords={content.keywords} />
    {/if}
    {#if content.location}
      <Location address={content.location.address} dist={content.location.dist} coords={content.location.coords} />
    {/if}
    <Button url={content.phone}>
      {content.phone}
    </Button>
  </div>
</Card>
