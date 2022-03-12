import styled from "styled-components";

import Player from "../components/Player";
import Button from "../components/Button";
import GameInput from "../components/GameInput";

import { useState } from "react";

export default function GamePage({
  nameOfGame,
  players,
  onEndGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  const [display, setDisplay] = useState(true);
  const [nameOfGame, setNameOfGame] = useState("");
  return (
    <Main>
      {display && (
        <GameInput
          labelText="Which game do you want to play?"
          placeholder="e.g. Uno.."
          onChange={(event) => setNameOfGame(event.target.value)}
          gameName={nameOfGame}
          required
        />
      )}
      {display && (
        <GameInput
          labelText="Who wants to play?"
          placeholder="type in the names of all players.. "
          onChange={(event) => setNameOfGame(event.target.value)}
          gameName={nameOfGame}
          required
        />
      )}
      <div>
        {GameName}
        <Player />
        <Button />
      </div>
    </Main>
  );
}

const Main = styled.section`
  background: white;
  color: black;
  padding: 20px;
`;
