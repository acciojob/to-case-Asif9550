function toCase(text) {
  // Check if the string is empty and return '-' in that case
  if (text === '') {
    return '-';
  }
  
  // Convert the string to lowercase and uppercase
  const lower = text.toLowerCase();
  const upper = text.toUpperCase();
  
  // Return the concatenated result with '-' as the delimiter
  return `${lower}-${upper}`;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
