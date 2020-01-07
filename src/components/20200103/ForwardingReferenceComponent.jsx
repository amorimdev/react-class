import React, { useState } from "react";

const InputTypeText = React.forwardRef((props, ref) => (
  <input
    type="text"
    ref={ref}
    onFocus={() => props.setTextInputFocus(true)}
    onBlur={() => props.setTextInputFocus(false)}
  />
));

const InputTypeButton = props => (
  <input
    type="button"
    value="Focus the text input"
    onClick={() => props.textInput.current.focus()}
  />
);

const InputTypeTextFocused = props => (
  <div>{props.textInputFocus && "Text input is focused."}</div>
);

export default () => {
  const [textInputFocus, setTextInputFocus] = useState(false);
  const textInput = React.createRef();

  return (
    <div>
      <h1>Forwarding Reference Component!</h1>
      <InputTypeText ref={textInput} setTextInputFocus={setTextInputFocus} />
      <InputTypeButton textInput={textInput} />
      <InputTypeTextFocused textInputFocus={textInputFocus} />
    </div>
  );
};
