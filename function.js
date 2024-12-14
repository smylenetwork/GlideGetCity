window.function = async function () {
  const response = await fetch('https://ipwho.is/', {
    headers: {
      'Origin': 'https://your-app-url.com' // Replace this with your actual app URL if required
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  // Return the city
  return data.city || "City not found";
};
