import React from "react";
import MyButton from "./component/MyButton";
import User from "./component/User";

const App: React.FC = () => {
  return (
    <>
      <h1>Hello, React</h1>
      <MyButton
        label="My Submit Button"
        onClick={() => console.log("Button is clicked")}
      />
      <User />
    </>
  );
};

export default App;
