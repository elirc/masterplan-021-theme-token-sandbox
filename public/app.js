import { resolveTheme, contrast } from './core.js';
function render() {
  const tokens = resolveTheme(document.querySelector('#theme').value);
  const preview = document.querySelector('#preview');
  for (const [key, value] of Object.entries(tokens)) preview.style.setProperty('--' + key, value);
  document.querySelector('#result').textContent = JSON.stringify(tokens, null, 2) + `\nText / surface: ${contrast(tokens.text, tokens.surface).toFixed(2)}:1\nButton text / accent: ${contrast(tokens['on-accent'], tokens.accent).toFixed(2)}:1\nThese two color pairs do not certify the whole interface's accessibility.`;
}
document.querySelector('#theme').onchange = render;
render();
