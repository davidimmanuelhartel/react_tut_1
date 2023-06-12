import { MouseEvent, useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button";

// event handler

const handleClick = (item: string) => console.log(item);

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div className="container">
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleClick}
        ></ListGroup>
        <br />
        <div className="container">
          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
              This is an alert
            </Alert>
          )}
          <Button color="warning" onClick={() => setAlertVisibility(true)}>
            Click
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
