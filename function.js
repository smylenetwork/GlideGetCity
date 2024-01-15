window.function = async function () {
  // Use fetch API to get IP address
  const response = await fetch('http://ip-api.com/json/');
  const data = await response.json();

  // Return the IP address
  return data.city;
}
