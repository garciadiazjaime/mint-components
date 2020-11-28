<script>
  import Card from './Card.svelte';
  import LinkButton from './LinkButton.svelte';
  import Keywords from './Keywords.svelte';
  import Location from './Location.svelte';
  import ImageLoader from './ImageLoader.svelte';
  import Whatsapp from './Whatsapp.svelte';
  import { formatPhoneNumber, getWhatsapp } from '../utils/postUtil';
  export let profile = {};
  export let cardAction = {};
  export let refreshDB;
  export let buttonColor;
</script>
<style>
  .card-content {
		position: relative;
    transition: height .3s;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .card-action {
    cursor: pointer;
  }

  .last-item {
    margin-top: auto;
    padding-top: 10px;
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
<Card dataId={profile.id ? profile.id : ''} >
  <div class="card-content">
    {#if profile.mediaUrl}
      <div class="card-action" on:click={cardAction}>
        <ImageLoader src={profile.mediaUrl} alt={profile.title} height="180px" {refreshDB} />
        {#if getWhatsapp(profile.caption)}
          <Whatsapp whatsapp={getWhatsapp(profile.caption)} />
        {/if}
      </div>
    {/if}
    {#if profile.title}
      <div class="card-action" on:click={cardAction}>
        <div class="title">
          {profile.title}
        </div>
      </div>
    {/if}
    {#if profile.keywords}
      <Keywords keywords={profile.keywords} />
    {/if}
    {#if profile.address}
      <Location address={profile.address} dist={profile.dist} coords={profile.gps} />
    {/if}
    {#if profile.phone}
      <div class="last-item">
        <LinkButton href={`tel:${profile.phone}`} background={buttonColor}>
          {formatPhoneNumber(profile.phone)}
        </LinkButton>
      </div>
    {/if}
  </div>
</Card>
