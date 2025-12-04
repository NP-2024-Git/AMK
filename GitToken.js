
function base64EncodeUtf8(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function base64DecodeUtf8(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function doubleEncode(str) {
  return base64EncodeUtf8(base64EncodeUtf8(str).trim()).trim();
}

function doubleDecode(str) {
  return base64DecodeUtf8(base64DecodeUtf8(str.trim()).trim());
}

const token = doubleDecode("WjJsMGFIVmlYM0JoZEY4eE1VSlFUbGhOVkZrd1ZsbGpVV0Z0VW1kRWNIZDBYMHRJWTNOUFVIWkpNa1JPVlZnd1ExbzJlVnBpTjJSSmRFdE1hRWhsTUVSTlJrVlZlbkpMWkdZM01ucFpWMGxRTTBzelRYUkVSbXBaZEVGdQ==");

const username = "NP-2024-Git";
const repo = "AMK";
const branch = "V6.4";
