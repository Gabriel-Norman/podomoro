export const remValue = (px = 1) => {
  const fontSize = window
    .getComputedStyle(document.documentElement, null)
    .getPropertyValue("font-size")
    .replace("px", "");

  return px * ((fontSize * 1) / 16);
};
