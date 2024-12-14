window.function = async function () {
  const apiKey = 'fbd47ef0a58a4163a68f8f4d95b5f4fd'; // Your FindIP.net API key
  const apiUrl = `https://api.findip.net/?token=${apiKey}`; // Base URL to fetch user IP geolocation data

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Extract and return the geolocation information
    return {
      ip: data.ip,
      country: data.country,
      state: data.region,
      city: data.city,
      zip: data.zip_code,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.time_zone,
      isp: data.isp
    };
  } catch (error) {
    // Handle errors gracefully
    return `Error: ${error.message}`;
  }
};
