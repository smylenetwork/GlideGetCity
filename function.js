window.function = async function () {
  const apiKey = 'fbd47ef0a58a4163a68f8f4d95b5f4fd'; // Your API key
  const apiUrl = `https://api.findip.net/?token=${apiKey}`; // Use the endpoint for the current user's IP

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return geolocation data
    return {
      ip: data.ip,
      country: data.country,
      state: data.region,
      city: data.city,
      zip: data.zip_code,
      latitude: data.latitude,
      longitude: data.longitude
    };
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
