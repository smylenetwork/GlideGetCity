window.function = async function () {
  const apiKey = '7C791B275B4F7E3D9AFF52B751413F59'; // Your API key
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Public CORS proxy
  const endpoint = `${proxyUrl}https://api.ip2location.io/?key=${apiKey}&format=json`;

  try {
    // Fetch the geolocation data
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return only the city
    return data.city_name || "City not found";
  } catch (error) {
    // Handle errors gracefully
    return `Error: ${error.message}`;
  }
};
