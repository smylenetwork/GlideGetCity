const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Endpoint to fetch geolocation data for the current user's IP
app.get('/geolocation', async (req, res) => {
  try {
    // Step 1: Fetch the user's public IP
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    if (!ipResponse.ok) {
      throw new Error(`Failed to fetch IP: ${ipResponse.status}`);
    }
    const { ip } = await ipResponse.json();

    // Step 2: Fetch geolocation data for the IP
    const apiKey = 'fbd47ef0a58a4163a68f8f4d95b5f4fd';
    const geoResponse = await fetch(`https://api.findip.net/${ip}/?token=${apiKey}`);
    if (!geoResponse.ok) {
      throw new Error(`Failed to fetch geolocation data: ${geoResponse.status}`);
    }
    const geoData = await geoResponse.json();

    // Send the geolocation data back to the frontend
    res.json(geoData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Run the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
