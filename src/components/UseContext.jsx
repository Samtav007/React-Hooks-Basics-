import { useEffect, useState, useContext } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const [state, setState] = useState("");
  const [like, setLike] = useState(0);

  const handleState = () => {
    setState((prevState) => (prevState === "" ? "I am Samarth Sehgal" : ""));
  };

  const handleLike = () => {
    setLike((prevLike) => prevLike + 1);
  };

  useEffect(() => {
    if (state !== "")
      alert("Content Button Clicked");
  }, [state]);

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyle}>
      <h3>{state}</h3>
      <button onClick={handleState}>Context</button>
      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UseContext;
