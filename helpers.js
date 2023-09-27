/* 
    Small helper functions
*/

// function getActionInfo(actionId) {
//     return ACTIONS.find((action) => actionId === parseInt(action.id));
//   }

// Normalize The Property Name to adhere to JSON
function normalizePropertyName(propertyName) {
  // Remove spaces and replace special characters with underscores,
  // and convert to lowercase
  return propertyName
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_]/g, "")
    .toLowerCase();
}

// "syntax sugar" function, aka code abbreviations
function getElById(htmlId) {
  return document.getElementById(htmlId);
}
