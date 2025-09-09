import { useState } from "react";
import Greeter from "./Greeter";

export default function App() {
  const [greeting, setGreeting] = useState("Hi");
  const name = "Angelica";

  const allProps = { greeting, name };

  return <Greeter {...{ greeting, setGreeting, name }} />;
}
