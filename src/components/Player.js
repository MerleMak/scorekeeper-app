import styled from "styled-components";
import Button from "./Button";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Container>
      <Name>{name}</Name>
      <PlayerScore>
        <Button aria-label="Decrease Score" onClick={onDecrement}>
          -
        </Button>
        <Score>{score}</Score>
        <Button aria-label="Increase Score" onClick={onIncrement}>
          +
        </Button>
      </PlayerScore>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
`;

const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
