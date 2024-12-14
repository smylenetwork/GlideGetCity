window.function = async function () {
  const response = await fetch('https://ipwho.is/', {
  });

  const data = await response.json();

  // Return the city
  return data.city; // Or `data.postal` for ZIP
};
