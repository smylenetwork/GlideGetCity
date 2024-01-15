window.function = async function () {
  // Use fetch API to get IP address
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();

  // Return the IP address
  return data.ip;
}
