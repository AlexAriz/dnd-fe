import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Container>
      <Typography variant="h1">Hello world</Typography>

      <Typography>You've clicked the button {count} times</Typography>

      <Button onClick={onClick} variant="contained" color="success">
        Click me
      </Button>
    </Container>
  );
}

export default App;
