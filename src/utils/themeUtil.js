export function themeComponent(component, theme) {
  for (let [prop, color] of Object.entries(theme)) {
    let varString = `--${component}-${prop}`;
    document.documentElement.style.setProperty(varString, color);
  }
}
