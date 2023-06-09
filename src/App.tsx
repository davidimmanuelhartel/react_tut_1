import { MouseEvent } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

// event handler
const handleClick = (event: MouseEvent) => console.log(event);

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
