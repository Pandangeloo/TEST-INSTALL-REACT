const greetings = ["Hi", "Hello", "Yo", "Good Evening"];

export default function Greeter({
  greeting,
  setGreeting,
  names,
}: {
  greeting: string;
  setGreeting: Function;
  names: string;
}) {
  return (
    <>
      <p>Choose a greeting:</p>
      <p>
        {greetings.map((greeting) => (
          <button key={greeting} onClick={() => setGreeting(greeting)}>
            {greeting}
          </button>
        ))}
      </p>
      {names.split(",").map((name) => (
        <h1 key={name}>
          {greeting} {name}!
        </h1>
      ))}
    </>
  );
}
