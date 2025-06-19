const fs = require('fs');
const path = require('path');

// Read the tokens file
const tokensPath = path.join(__dirname, '../tokens/tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// Function to flatten tokens
function flattenTokens(obj, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (value.$value !== undefined) {
      result[newKey] = value.$value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenTokens(value, newKey));
    }
  }
  
  return result;
}

// Generate CSS variables
function generateCSS(tokens) {
  let css = ':root {\n';
  
  // Light theme tokens
  const lightTokens = flattenTokens(tokens.light);
  for (const [key, value] of Object.entries(lightTokens)) {
    css += `  --${key}: ${value};\n`;
  }
  
  css += '}\n\n';
  
  // Dark theme overrides
  if (tokens.dark) {
    css += '.dark {\n';
    const darkTokens = flattenTokens(tokens.dark);
    for (const [key, value] of Object.entries(darkTokens)) {
      css += `  --${key}: ${value};\n`;
    }
    css += '}\n';
  }
  
  return css;
}

// Generate the CSS
const css = generateCSS(tokens);

// Write to the theme file
const themePath = path.join(__dirname, '../src/styles/theme.css');
fs.writeFileSync(themePath, css);

console.log('Theme CSS generated successfully!');
console.log(`Output: ${themePath}`); 