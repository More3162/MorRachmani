import { Button, TextField, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Todolist() {
  const [myList, setMyList] = useState([]);
  const [addTxt, setAddTxt] = useState("");
  const generateId = () => {
    return (
      new Date().getTime().toString(36) + Math.random().toString(36).substring(2, 9)
    )
  };

  const handelRemove = (id) => {
    setMyList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckChange = (id, checked) => {
    setMyList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: checked } : item
      )
    );
  };

  console.log(myList);

  return (
    <div style={{ margin: "20px" }}>
      <TextField
        sx={{ mt: 5, width: "100%" }}
        label="Add a new task"
        value={addTxt}
        onChange={(e) => setAddTxt(e.target.value)}
        variant="outlined"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setMyList((prev) => [...prev, { text: addTxt, id: generateId() }]);
            setAddTxt("");
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMyList([])}
        >
          Clear
        </Button>
      </div>
      <List sx={{ mt: 3 }}>
        {myList.map((item, index) => (
          <ListItem key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleCheckChange(item.id, e.target.checked)}>
            </input>
            <ListItemText primary={item.text}
              sx={{ textDecoration: item.checked ? 'line-through' : "" }} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handelRemove(item.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}




