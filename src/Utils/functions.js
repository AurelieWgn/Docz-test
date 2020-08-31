import Color from "color";
export function darken(color, percent = 0) {
  try {
    return Color(color)
      .darken(percent / 100)
      .hex();
  } catch (err) {
    return color;
  }
}
