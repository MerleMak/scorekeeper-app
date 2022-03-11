import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Container>
      <Name>{name}</Name>
      <button onClick={onDecrement}>-</button>
      <Score>{score}</Score>
      <button onClick={onIncrement}>+</button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: right;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
`;
