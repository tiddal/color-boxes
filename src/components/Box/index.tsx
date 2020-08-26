import React, { useState } from 'react';

import Container from './styles';
import CSS_COLORS from '../../services/colorsDB';

const Box: React.FC = () => {
  function randomizeColor(colors: string[]) {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    return colors[randomColorIndex];
  }

  const [boxColor, setBoxColor] = useState(randomizeColor(CSS_COLORS));

  function randomizeDifferentColor() {
    const colorsListWithoutCurrentColor = CSS_COLORS.filter((color) => color !== boxColor);
    return randomizeColor(colorsListWithoutCurrentColor);
  }

  return <Container color={boxColor} onClick={() => setBoxColor(randomizeDifferentColor())} />;
};

export default Box;
