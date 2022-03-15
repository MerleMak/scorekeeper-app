import styled from "styled-components";

import Player from "../components/Player";
import Button from "../components/Button";
import GameInput from "../components/GameInput";

import { useState } from "react";

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onCreateGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  const [display, setDisplay] = useState(true);
  const [gameName, setGameName] = useState("");
  const [playerNames, setPlayerNames] = useState("");

  const disabled = gameName === "" || playerNames === "";

  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
      playerNames: playerNames.split(",").map((name) => name.trim()),
    });
    setGameName("");
    setPlayerNames("");
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      {display && (
        <>
          <GameInput
            name="gameName"
            labelText="Which game do you want to play?"
            placeholder="e.g. Uno.."
            onChange={(event) => setGameName(event.target.value)}
            value={gameName}
            required
          />
          <Button disabled={disabled}>Submit</Button>
        </>
      )}
      {display && (
        <>
          <GameInput
            name={"playerNames"}
            labelText="Who wants to play?"
            placeholder="type in the names of all players.. "
            onChange={(event) => setPlayerNames(event.target.value)}
            value={playerNames}
            required
          />
          <Button disabled={disabled}>Submit</Button>
        </>
      )}
      <div>
        {gameName}
        {players.map(({ name, score, id }, index) => (
          <Player
            key={id}
            name={name}
            score={score}
            onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
            onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
          />
        ))}
        <Button onClick={onResetScores}>Reset scores</Button>
        <Button onClick={onEndGame}>End game</Button>
      </div>
    </Form>
  );
}

const Form = styled.form`
  background: #afbe8f;
  color: #504b3a;
  padding: 20px;
`;
