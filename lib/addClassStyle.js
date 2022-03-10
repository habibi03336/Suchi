function addClassStyle(component, className) {
  Object.entries(className).forEach(([key, value]) => {
    component.style[key] = value;
  });
}

export default addClassStyle;
