import React from "react";
import { Box } from "@material-ui/core";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <HomePage />
      </Box>
    </>
  );
};

export default App;
