import React, { useContext, useState } from "react";
import ChatContext from "../../context/ChatContext";
import "./Input.scss";

const Input = () => {
  const { sendMessage } = useContext(ChatContext);

  const [text, setText] = useState("");

  const submitMsg = (e) => {
    e.preventDefault();
    if (text) {
      sendMessage(text);
    }
    setText("");
  };

  return (
    <section className="input_container">
      <form onSubmit={(e) => submitMsg(e)}>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Message"
          type="text"
          autoFocus={true}
          value={text}
        />
        <button>Send</button>
      </form>
    </section>
  );
};

export default Input;
