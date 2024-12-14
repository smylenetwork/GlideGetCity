window.function = async function () {
  const apiKey = '7C791B275B4F7E3D9AFF52B751413F59';
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = encodeURIComponent(`https://api.ip2location.io/?key=${apiKey}&format=json`);

  try {
    const response = await fetch(`${proxyUrl}${targetUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { contents } = await response.json();
    const data = JSON.parse(contents);

    return data.city_name || "City not found";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
