export default async function ({ params, data }) {
  // The parameter specifies which field to extract (e.g., city or postal)
  const field = params.Field;

  // Call the ipwho.is API
  const response = await fetch('https://ipwho.is/');
  const json = await response.json();

  // Return the requested field if it exists
  if (json[field]) {
    return json[field];
  } else {
    return `Field "${field}" not found`; // Handle invalid fields
  }
}
