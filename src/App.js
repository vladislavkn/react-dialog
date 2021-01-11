import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

import { AppContext } from "./context.js";
import { getTheme, setTheme } from "./utils/theme";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
