import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ color }) => color};
  height: 10rem;
  cursor: pointer;
`;

export default Container;
