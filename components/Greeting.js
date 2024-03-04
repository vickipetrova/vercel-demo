export default function Greeting({ name }) {
    if (!name) return <p>Please enter your name.</p>;
  
    return <p>Hello, {name}!</p>;
  }
  