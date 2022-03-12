import styled from "styled-components";

export default function GameInput({
  labelText,
  gameName,
  placeholder,
  onChange,
  required,
}) {
  return (
    <>
      <Label htmlFor={gameName}>{labelText}</Label>
      <InputStyled
        id={gameName}
        value={gameName}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        required={required}
      />
    </>
  );
}

const Label = styled.label`
  font-size: 1rem;
`;

const InputStyled = styled.input`
  padding: 5px 10px;
  border: 2px solid #7d8570;
  border-radius: 20px;

  ::placeholder {
    color: #afbe8f;
  }
`;
