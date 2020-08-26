import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto repeat(4, 1fr);
  align-content: center;
  height: 100vh;

  span {
    grid-column: -1 / 1;
    justify-self: center;
    align-self: start;
    text-align: center;
    padding-bottom: 2rem;
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
