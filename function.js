window.function = async function () {
  // Use fetch API to get location details
  const response = await fetch('https://ipwho.is/');
  const data = await response.json();

  // Return only the city
  return data.city;
};
