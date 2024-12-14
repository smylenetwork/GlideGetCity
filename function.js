window.function = async function () {
  try {
    // Fetch data from the API
    const response = await fetch('https://ipwho.is/');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if the response indicates success
    if (data.success) {
      // Return the city from the response
      return data.city;
    } else {
      throw new Error(`API returned an error: ${data.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or an error message if something goes wrong
  }
};
