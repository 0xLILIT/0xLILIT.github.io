export function renderUI() {
    const settingsCtr = document.createElement("div");
    settingsCtr.id = "settings-container";
    settingsCtr.innerHTML = `
    <label id="mass-slider-label" for="mass-slider">Mass of bodies</label>
    <!-- <input -->
    <!--   id="mass-slider" -->
    <!--   name="mass-slider" -->
    <!--   type="range" -->
    <!--   value="100" -->
    <!--   min="0" -->
    <!--   max="1000" -->
    <!--   step="0.5" -->
    <!-- /> -->
    <input
      id="mass-input"
      name="mass-input"
      type="number"
      value="100"
      min="0"
      max="1000"
      step="0.5"
    />

    <label id="grav-slider-label" for="grav-slider">Gravitational Constant</label>
    <!-- <input -->
    <!--   id="grav-slider" -->
    <!--   name="grav-slider" -->
    <!--   type="range" -->
    <!--   value="1" -->
    <!--   min="-1000" -->
    <!--   max="1000" -->
    <!--   step="0.5" -->
    <!-- /> -->
    <input
      id="grav-input"
      name="grav-input"
      type="number"
      value="1"
      min="-1000"
      max="1000"
      step="0.5"
    />


    <label id="elasticity-slider-label" for="elasticity-slider">Elasticity of bodies</label>
    <!-- <input -->
    <!--   id="elasticity-slider" -->
    <!--   name="elasticity-slider" -->
    <!--   type="range" -->
    <!--   value="0.5" -->
    <!--   min="0" -->
    <!--   max="1000" -->
    <!--   step="0.5" -->
    <!-- /> -->
    <input
      id="elasticity-input"
      name="elasticity-input"
      type="number"
      value="0.5"
      min="0"
      max="1000"
      step="0.5"
    />
    <label id="debug-input-label" for "debug-input">Show debugging info</label>
    <input type="checkbox" name="debug-input" id="debug-input">
`;
    document.body.appendChild(settingsCtr);
}
