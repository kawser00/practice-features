import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const EmojiMart = () => {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const addEmoji = e => {
    let emoji = e.native;
    setText(text + emoji)
  };

  const handleSubmit = e => {
    e.preventDefault()
    // postMessage(this.state)   //send to backend
    setText('')  //reset input field to empty
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type a message here then hit ENTER"
        />
      </form>
      <Picker
        onSelect={addEmoji}
        emojiTooltip={true}
        title="weChat"
      />
    </div>
  );
};

export default EmojiMart;