const changeColour = colour => {
    return {
      type: "CHANGE_COLOUR",
      colour: colour
    }
};

const changeStrokeWidth = strokeWidth => {
    return {
      type: "CHANGE_STROKE_WIDTH",
      lineSize: strokeWidth
    }
};

export { changeColour, changeStrokeWidth };
