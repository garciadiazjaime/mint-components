<script>
  import Card from './Card.svelte';
  import LinkButton from './LinkButton.svelte';
  import Keywords from './Keywords.svelte';
  import Location from './Location.svelte';
  import ImageLoader from './ImageLoader.svelte';
  import Whatsapp from './Whatsapp.svelte';
  import { formatPhoneNumber, getWhatsapp } from '../utils/postUtil';
  import { instagramPostImageMutation } from '../utils/mintAPIUtil'
  export let profile = {};
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
<Card data-id={profile.id ? profile.id : ''} >
  <div class="card-content">
    <div class="card-action" on:click={cardAction}>
      {#if profile.mediaUrl}
        <ImageLoader src={profile.mediaUrl} alt={profile.title} height="180px" refreshDB={() => console.log('execute')} />
      {/if}
      {#if getWhatsapp(profile.caption)}
        <Whatsapp whatsapp={getWhatsapp(profile.caption)} />
      {/if}
      {#if profile.title}
        <div class="title">
          {profile.title}
        </div>
      {/if}
    </div>
    {#if profile.keywords}
      <Keywords keywords={profile.keywords} />
    {/if}
    {#if profile.location}
      <Location address={profile.address} dist={profile.dist} coords={profile.gps} />
    {/if}
    {#if profile.phone}
    <LinkButton href={`tel:${profile.phone}`}>
      {formatPhoneNumber(profile.phone)}
    </LinkButton>
    {/if}
  </div>
</Card>
