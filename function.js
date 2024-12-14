window.function = async function () {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    return data.city || "City not found";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
