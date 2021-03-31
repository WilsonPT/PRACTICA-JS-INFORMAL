const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $div = d.getElementById(id);
  const success = (position) => {
    let crd = position.coords;
    $div.innerHTML = `
      <p>Tu posición actual: </p>
      <ul>
        <li>Latitud: ${crd.latitude}</li>
        <li>Longitud: ${crd.longitude}</li>
        <li>Precisión: ${crd.accuracy} metros</li>        
      </ul>
      <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},20z" target="_blank" rel="noopener">Ver en Google maps</a>
    `;
  };
  const error = (err) => {
    $div.innerHTML = `
    <p>Error: <mark>${err.message}</mark></p>
  `;
  };
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
