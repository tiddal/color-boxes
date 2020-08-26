import React from 'react';

import Container from './styles';
import Box from '../../components/Box';

const ColorBoxes: React.FC = () => (
  <Container>
    <span>
      <h1>Color Boxes!</h1>
      <p>
        Click the boxes to change their color
        {' '}
        <span role="img" aria-label="upside-down-smile">🙃</span>
      </p>
    </span>
    {/* eslint-disable-next-line react/no-array-index-key */}
    {[...Array(20)].map((box, index) => <Box key={index} />)}
  </Container>
);

export default ColorBoxes;
