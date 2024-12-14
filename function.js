window.function = async function () {
  // Use a CORS proxy to fetch data
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://ipwho.is/');
  const data = await response.json();

  // Return the city
  return data.city; // For ZIP, replace with `data.postal`
};
