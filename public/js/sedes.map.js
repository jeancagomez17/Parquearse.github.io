
const inputElement = document.getElementById('inputElement');
// Accede al valor del atributo data-message
const ciudades = JSON.parse(inputElement.dataset.ciudades);

function filtrarCiudad(idCiudad){
  return ciudades.find((ciudad)=> ciudad.id == idCiudad)
}
let map; // Variable global para el mapa

// Función para inicializar el mapa en una ubicación específica
function initializeMap(longitude, latitude, zoomLevel = 14) {
map = new maplibregl.Map({
  container: "map", // ID del contenedor donde aparecerá el mapa
  style: "https://api.maptiler.com/maps/streets/style.json?key=TSVoPO9pm3o99xIpo4eP", // URL del estilo del mapa
  center: [longitude, latitude], // Coordenadas iniciales [longitud, latitud]
  zoom: zoomLevel, // Nivel de zoom inicial
});
}

// Declara una variable global para el marcador
let marker = null;
// Función para actualizar la ubicación del marcador
function setMarkerLocation(longitude, latitude) {
// Si ya hay un marcador existente, elimínalo
if (marker) {
  marker.remove(); // Elimina el marcador anterior del mapa
}

// Crea un nuevo marcador y guárdalo en la variable
marker = new maplibregl.Marker({ color: "green" }) // Cambia el color si deseas otro
  .setLngLat([longitude, latitude])
  .addTo(map);
}

  const documentoId = (documento) => document.getElementById(documento);
  const sedeDiv = documentoId("sedeDiv");
  const selects = {
    ciudad: documentoId("selectCiudad"),
    sede: documentoId("selectSede"),
  };


  async function getSedes(idCiudad){
      try {
          const data = await fetch(`https://cloudserver.parquearse.com:4000/sedes/ciudad?id=${idCiudad}`, {
              redirect:'follow',
              method:'get'
          })
          const response = await data.json()
         
          return response
      } catch (error) {
          console.log(error.message)
      }
  }


  async function getSede(idSede){
      try {
          const data = await fetch(`https://cloudserver.parquearse.com:4000/sedes?id=${idSede}`, {
              redirect:'follow',
              method:'get'
          })
          const response = await data.json()
          return response
      } catch (error) {
          console.log(error.message)
      }
  }


  selects.ciudad.addEventListener("change", async (e) => {
    let ciudad = filtrarCiudad(e.target.value)
    const sedes = await getSedes(e.target.value)
    initializeMap(ciudad.longitud, ciudad.laptitud, 13.5)
    crearSelect(sedes);
  });


  function crearSelect(sedes) {
    if (sedes.data.length <= 0) {
      selects.sede.disabled = true;
      selects.sede.innerHTML = "";
      return;
    }
    let data = sedes.data
    selects.sede.disabled = false;
    selects.sede.innerHTML = "";
    const option = document.createElement("option");
    option.value = 0;
    option.innerText = "Seleccionar";
    selects.sede.appendChild(option);
    data.map((sede) => {
      const option = document.createElement("option");
      option.value = sede.id;
      option.innerText = sede.name;
      selects.sede.appendChild(option);
    });
    return;
  }

 async function crearInfo(idsede) {
    sedeDiv.innerHTML == "";
    const response = await getSede(idsede)
      let sede = response.data
   
    sedeDiv.innerHTML = `
    <div>
          <h1 class="text-3xl font-semibold text-center mb-3">${sede.name}</h1>
          <div>
              <p class="text-xl text-center mb-4"> ${sede.direccion}</p>  
              <h2 class="text-2xl font-semibold mb-4">Tarifas</h2>
              <ul class=" mb-4">
                  <li><strong>Carro:</strong> Hora: $${sede.carro}, <strong>Minutos 0 - 15:</strong> ${sede.min15Carro} </li>
                  <li><strong>Moto:</strong> Hora: $${sede.moto}, <strong>Minutos 0 - 15 :</strong> ${sede.min15Moto}</li>
              </ul>  

              <h2 class="text-2xl font-semibold mb-2">Horario</h2>
              <ul class="mb-3">
                  <li><strong>Lunes a Viernes:</strong> ${sede.lunesAviernes}</li>
                  <li><strong>Sabado:</strong> ${sede.sabado}</li>
                  <li><strong>Domingo:</strong> ${sede.domingo}</li>
              </ul>
                <div class="flex justify-center items-center mt-6">
                <button type="click" class="px-5 py-2 bg-gradient-to-r lg:text-xl text-sm  from-green-500 to-green-700 text-white font-medium rounded-lg" onclick="openGoogleMaps(${sede.longitud}, ${sede.latitud})">Como llegar</button>
                </div>
              
          </div>
    </div>
      `;
      setMarkerLocation(sede.longitud, sede.latitud);
  }

  selects.sede.addEventListener("change", async (e) => {
    await crearInfo(e.target.value);

  });


  function openGoogleMaps(longitude, latitude, ) {
    const currentLocation = "My Location"; // Esto permitirá a Google usar la ubicación actual del usuario
    const url = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=${latitude},${longitude}&travelmode=driving`;
    window.open(url, "_blank");
  }

  