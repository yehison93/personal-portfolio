import { useState } from "preact/hooks";

const Greeting = ({ greeting }) => {
  const ramdomGreeting = () =>
    greeting[Math.floor(Math.random() * greeting.length)];
  const [greetingIndex, setGreetingIndex] = useState(ramdomGreeting());

  return (
    <div>
      <h3>{greetingIndex} ¡Gracias por tu visita!</h3>
      <button onClick={() => setGreetingIndex(ramdomGreeting())}>
        Nuevo saludo
      </button>
    </div>
  );
};

export default Greeting;
