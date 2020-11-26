import { userLocation } from '../utils/stores';
import { getLocationName } from './mapboxAPIUtil';

async function setUserLocation() {
  const coordinates = JSON.parse(window.localStorage.getItem('@location'))

  const location = coordinates ? await getLocationName(coordinates.lng, coordinates.lat) : ''

  userLocation.set(location);
}

export {
  setUserLocation
}
