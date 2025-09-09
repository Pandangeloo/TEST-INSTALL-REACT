import { useState } from "react";
import Greeter from "./Greeter";

export default function App() {
  const [greeting, setGreeting] = useState("Hi");
  const [names, setName] = useState("Jane Doe");

  return (
    <>
      {/* A state controlled input */}
      <label>
        Comma-seperated list of names:
        <input
          type="text"
          value={names}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      {/* Mounting the Greeter component */}
      <Greeter {...{ greeting, setGreeting, names }} />
    </>
  );
}
