const changeColour = colour => {
    return {
      type: "CHANGE_COLOUR",
      colour: colour
    }
};

const changeStrokeWidth = strokeWidth => {
    return {
      type: "CHANGE_STROKE_WIDTH",
      strokeWidth: strokeWidth
    }
};

export { changeColour, changeStrokeWidth };
