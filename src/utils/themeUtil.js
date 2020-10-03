export function styleComponent(component, theme) {
  for (let [prop, def] of Object.entries(theme)) {
    component.style[prop] = def;
  }
}
