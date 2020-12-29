<script>
	import ProfileCard from '../components/ProfileCard.svelte';
	import Drawer from '../components/Drawer.svelte';
  import Modal from '../components/Modal.svelte';
  import LocationPicker from '../components/LocationPicker.svelte';
  import UpdateLocationCTA from '../components/UpdateLocationCTA.svelte';
  import Accordion from '../components/Accordion.svelte';
import LinkButton from '../components/LinkButton.svelte';

  let DrawerIsVisible = false;
  let modalIsVisible = false;

  const defaultCoords = {
    lat: 32.5286807,
    lng: -117.0477024,
    zoom: 11,
    title: 'Zona Centro'
  }

	const profile = {
    id: '123greenStreet',
    caption: 'whatsapp 6643332222',
    mediaUrl: 'https://scontent.cdninstagram.com/v/t51.29350-15/120032472_697626587501345_691584147049091139_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=2NoaBGOn_jAAX9cNI5U&_nc_ht=scontent.cdninstagram.com&oh=e0127fc86c2169b9bab5413b2303892d&oe=5F8FA107',
    title: 'Restaurant Name',
    phone: '6643908224',
    keywords: [
      'tacos',
      'desayuno',
    ],
    address: '84 Rainey Street, Arlen, Texas',
    dist: 1500,
    gps: [-117.1148935, 32.5062778],
  };

  const accordionData = [
    {
      title: 'Title 1',
      content: 'Content 1',
      component: LinkButton,
    },
    {
      title: 'Title 2',
      content: 'Content 2',
      component: LinkButton,
    },
    {
      title: 'Title 3',
      content: 'Content 3',
      component: LinkButton,
    },
  ]
</script>

<div on:click={() => modalIsVisible = true}>
  <UpdateLocationCTA />
</div>
<ProfileCard cardAction={() => DrawerIsVisible = true} {profile} refreshDB={() => console.log('DB refresh request simulation')} />
<Drawer bind:isVisible={DrawerIsVisible}>
  Drawer content
</Drawer>
<Modal bind:isVisible={modalIsVisible}>
  <LocationPicker {defaultCoords}>
    ¿En qué área te encuentras?
  </LocationPicker>
</Modal>
<Accordion items={accordionData} />
