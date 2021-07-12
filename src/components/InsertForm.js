import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };

    // Save item to server
    const promise = axios.post('http://localhost:4000/items', newItem)
    promise.then(() => alert('item adicionado à lista de compras'))
    promise.catch(error => console.log(error.response.status))

    setText("");
    onAddItem();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
