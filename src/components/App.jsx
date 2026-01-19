import React, { useState } from "react";
import itemData from "../data/items";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => setIsDarkMode((prev) => !prev);

  const handleAddItem = (newItem) => setItems([...items, newItem]);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;
