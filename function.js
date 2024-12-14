window.function = async function () {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://ipwho.is/', {
    headers: {
      'Origin': 'https://example.com', // Replace with your app's origin or leave it as a placeholder
    }
  });

  const data = await response.json();

  // Return the city
  return data.city; // Or `data.postal` for ZIP
};
