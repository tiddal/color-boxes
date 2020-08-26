import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  span {
    grid-column: -1 / 1;
    justify-self: center;
    align-self: center;
    text-align: center;
    h1 {
      text-transform: uppercase;
      color: #333;
      font-weight: 900;
    }

    p {
      margin-top: 0.75rem;
      font-size: 14px;
      color: #aaa;
    }
  }
`;

export default Container;
