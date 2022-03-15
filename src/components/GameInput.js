import styled from "styled-components";

export default function GameInput({
  labelText,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <InputStyled
        id={name}
        placeholder={placeholder}
        type="text"
        value={value}
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
