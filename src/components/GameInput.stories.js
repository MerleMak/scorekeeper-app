import GameInput from "./GameInput";

export default {
  title: "components/GameInput",
  component: GameInput,
  argTypes: {
    id: "gameName",
    value: "gameName",
    placeholder: "placeholder",
    type: "text",
    onChange: "onChange",
    required: "required",
  },
};

const Template = (args) => <GameInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "gameName",
  value: "gameName",
  placeholder: "placeholder",
  type: "text",
  onChange: "onChange",
  required: "required",
};
