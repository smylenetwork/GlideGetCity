window.function = async function () {
  const apiKey = '7C791B275B4F7E3D9AFF52B751413F59'; // Your API key
  const endpoint = `https://api.ip2location.io/?key=${apiKey}&format=json`; // API endpoint

  try {
    // Fetch the geolocation data
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Extract and return city and ZIP code
    return { city: data.city_name, zip: data.zip_code };
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
