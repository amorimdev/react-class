import React, { useState } from "react";

export default () => {
  const [textInputFocus, setTextInputFocus] = useState(false);
  const textInput = React.createRef();

  return (
    <div>
      <h1>Reference Component!</h1>

      <input
        type="text"
        ref={textInput}
        onFocus={() => setTextInputFocus(true)}
        onBlur={() => setTextInputFocus(false)}
      />

      <input
        type="button"
        value="Focus the text input"
        onClick={() => textInput.current.focus()}
      />

      {textInputFocus && <div>Text input is focused.</div>}
    </div>
  );
};
