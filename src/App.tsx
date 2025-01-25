import React from "react";
import MyButton from "./component/MyButton";

const App: React.FC = () => {
  return (
    <>
      <h1>Hello, React</h1>
      <MyButton
        label="My Submit Button"
        onClick={() => console.log("Button is clicked")}
      />
    </>
  );
};

export default App;
