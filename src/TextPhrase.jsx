import React, { useState } from 'react';
import axios from 'axios';

const TextPhrase = () => {
  const [text, setText] = useState('');
  const [rephrasedText, setRephrasedText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const rephraseText = async () => {
    try {
      const response = await axios.post('http://localhost:8000/rephrase', { text });
      setRephrasedText(response.data.rephrasedText);
    } catch (error) {
      console.error('Error rephrasing text:', error);
    }
  };

  return (
    <div>
      <textarea rows="6" cols="50" value={text} onChange={handleTextChange}></textarea>
      <br />
      <button onClick={rephraseText}>Rephrase</button>
      {rephrasedText && (
        <div>
          <h3>Rephrased Text:</h3>
          <p>{rephrasedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextPhrase;
