window.function = async function () {
  const findIpApiKey = 'fbd47ef0a58a4163a68f8f4d95b5f4fd'; // FindIP.net API key

  try {
    // Step 1: Fetch the user's IP address
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    if (!ipResponse.ok) {
      throw new Error(`Failed to fetch IP address: ${ipResponse.status}`);
    }
    const { ip } = await ipResponse.json(); // Extract user's IP

    // Step 2: Use the fetched IP to query FindIP.net
    const geoResponse = await fetch(`https://api.findip.net/${ip}/?token=${findIpApiKey}`);
    if (!geoResponse.ok) {
      throw new Error(`Failed to fetch geolocation data: ${geoResponse.status}`);
    }
    const geoData = await geoResponse.json();

    // Return geolocation data
    return {
      ip: geoData.ip,
      country: geoData.country,
      state: geoData.region,
      city: geoData.city,
      zip: geoData.zip_code,
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      timezone: geoData.time_zone,
      isp: geoData.isp
    };
  } catch (error) {
    // Handle errors gracefully
    return `Error: ${error.message}`;
  }
};
