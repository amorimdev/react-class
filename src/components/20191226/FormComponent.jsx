import React, { useState } from "react";

export default () => {
  const [inputText, setInputText] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);
  const [inputRadio, setInputRadio] = useState(null);
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");

  const handleSubmit = event => {
    alert(
      `An Input Text was submitted: ${inputText}\n` +
        `An Input Checkbox was submitted: ${inputCheckbox}\n` +
        `An Input Radio was submitted: ${inputRadio}\n` +
        `A Textarea was submitted: ${textarea}\n` +
        `A Select was submitted: ${select}\n`
    );
    event.preventDefault();
  };

  return (
    <div>
      <h1>Form Component!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Input Text:
            <input
              name="inputText"
              type="text"
              value={inputText}
              onChange={event => setInputText(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Input Checkbox:
            <input
              name="inputCheckbox"
              type="checkbox"
              checked={inputCheckbox}
              onChange={event => setInputCheckbox(event.target.checked)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Input Radio:
            <input
              name="inputRadio"
              type="radio"
              value="option1"
              checked={inputRadio === "option1"}
              onChange={event => setInputRadio(event.target.value)}
              required
            />
            <input
              name="inputRadio"
              type="radio"
              value="option2"
              checked={inputRadio === "option2"}
              onChange={event => setInputRadio(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Textarea:
            <textarea
              name="textarea"
              value={textarea}
              onChange={event => setTextarea(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Select:
            <select
              name="select"
              value={select}
              onChange={event => setSelect(event.target.value)}
              required
            >
              <option value="" />
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
