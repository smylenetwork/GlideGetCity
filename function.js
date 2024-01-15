window.function = async function () {
  // Use fetch API to get IP address
  const response = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_lFb5Bim8HbHHiqgGgug1yse75orRv?format=json');
  const data = await response.json();

  // Return the IP address
  return data.region;
}
