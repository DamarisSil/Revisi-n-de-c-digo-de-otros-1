const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Corregí el selector 'name'
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // Agregado async al inicio
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Se agregó para obtener los datos
    console.log(data);
    $n.textContent = data.name || 'Nombre no disponible'; // Mostrar 'Nombre no disponible' si no hay nombre
    $b.textContent = data.blog || 'Blog no disponible'; // Mostrar 'Blog no disponible' si no hay blog
    $l.textContent = data.location || 'Ubicación no disponible'; // Mostrar 'Ubicación no disponible' si no hay ubicación
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Corregido el nombre de la variable n
}

displayUser('stolinski').catch(handleError);
