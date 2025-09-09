const greetings = ["Hi", "Hello", "Yo", "Good Evening"];

export default function Greeter({
  greeting,
  setGreeting,
  name,
}: {
  greeting: string;
  setGreeting: Function;
  name: string;
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
      <h1>
        {greeting} {name}!
      </h1>
    </>
  );
}
