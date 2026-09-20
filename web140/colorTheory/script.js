/* ========================================
   COLOR THEORY PROJECT
======================================== */

/* ========================================
   COLOR PALETTES

   Students should replace these colors
   with their own colors.
======================================== */

const palettes = {
  palette1: {
    name: "Complementary",

    primary: "#44918F",

    secondary: "#3B5251",

    accent: "#915F44",

    background: "#FFFFFF",

    surface: "#F3F4F6",

    text: "#3C3530",
  },

  palette2: {
    name: "Analogous",

    primary: "#4B61D6",

    secondary: "#4B8DD6",

    accent: "#BD4BD6",

    background: "#FFFFFF",

    surface: "#d1c3ed",

    text: "#634BD7",
  },

  palette3: {
    name: "Triadic",

    primary: "#437A6E",

    secondary: "#7A6D43",

    accent: "#FAEBBB",

    background: "#B7CFCA",

    surface: "#F0FDF4",

    text: "#77437A",
  },
};

/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {
  const root = document.documentElement;

  /* Apply palette colors */

  root.style.setProperty("--primary", palette.primary);

  root.style.setProperty("--secondary", palette.secondary);

  root.style.setProperty("--accent", palette.accent);

  root.style.setProperty("--background", palette.background);

  root.style.setProperty("--surface", palette.surface);

  root.style.setProperty("--text", palette.text);

  /* Update HEX values */

  document.getElementById("primaryHex").textContent = palette.primary;

  document.getElementById("secondaryHex").textContent = palette.secondary;

  document.getElementById("accentHex").textContent = palette.accent;

  document.getElementById("backgroundHex").textContent = palette.background;

  document.getElementById("textHex").textContent = palette.text;
}

/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons = document.querySelectorAll("[data-palette]");

paletteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const paletteName = button.dataset.palette;

    const selectedPalette = palettes[paletteName];

    applyPalette(selectedPalette);
  });
});

/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);
