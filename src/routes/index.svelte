<script>
	import ProfileCard from '../components/ProfileCard.svelte'
	import Loading from '../components/Loading.svelte'
	const profile = {
		id: '123greenStreet',
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
  };
</script>

<ProfileCard cardAction={() => console.log('This card has been clicked')} {profile} />
