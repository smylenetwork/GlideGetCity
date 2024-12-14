window.function = async function () {
  try {
    // Fetch geolocation data from ipwho.is
    const response = await fetch('https://ipwho.is/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return all geolocation data
    return {
      ip: data.ip,
      country: data.country,
      state: data.region,
      city: data.city,
      zip: data.postal,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone.id,
      isp: data.connection.isp
    };
  } catch (error) {
    // Handle errors gracefully
    return `Error: ${error.message}`;
  }
};
