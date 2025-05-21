/*
Built by Daniel Perry-Reed @ Data to Value
https://datatovalue.com/
*/

// === IMPORTS ===
const getCookieValues = require('getCookieValues');
const decodeUriComponent = require('decodeUriComponent');
const JSON = require('JSON');

// === Settings from template fields ===
const cookieName = data.cookieName || 'gtm_attr';
const jsonPath = data.jsonKey || '';

// === Read and decode the cookie ===
const raw = getCookieValues(cookieName)[0];
if (!raw) return '';

const decoded = decodeUriComponent(raw);
if (!decoded) return '';

const obj = JSON.parse(decoded);
if (!obj) return '';

// === Path-based retrieval (e.g. click_id.type) ===
const path = jsonPath.split('.');
let current = obj;

for (let i = 0; i < path.length; i++) {
  if (typeof current !== 'object' || current === null) {
    return '';
  }
  current = current[path[i]];
}

return (typeof current === 'undefined' || current === null) ? '' : current;
