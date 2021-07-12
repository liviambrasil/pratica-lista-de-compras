import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InsertForm from "./InsertForm";

export default function ShoppingList() {
  // Fake data
  const [items, setItems] = useState([]);

  useEffect(loadItems, [items]);

  function loadItems() {
    // Get items from back-end and update state
    const promise = axios.get('http://localhost:4000/items')
    promise.then(response => setItems(response.data))
    promise.catch(error => console.log(error.response.status))
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
