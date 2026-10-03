export const baseTokens = { surface: '#faf8ef', text: '#21372f', accent: '#245e45', 'on-accent': '#ffffff', space: '16px' };
export const themes = {
  paper: {},
  night: { surface: '#17251f', text: '#f4f5ef', accent: '#b7e1c5', 'on-accent': '#17251f', space: '20px' },
  partial: { surface: '#ffffff', text: '#21372f' },
};
export function resolveTheme(name) {
  if (!Object.hasOwn(themes, name)) throw new TypeError('Unknown theme.');
  return { ...baseTokens, ...themes[name] };
}
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
export function contrast(a, b) {
  if (![a, b].every(x => typeof x === 'string' && /^#[0-9a-f]{6}$/i.test(x))) throw new TypeError('Use six-digit hex colors.');
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
