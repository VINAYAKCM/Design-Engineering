export default function Joke(props) {
  return (
    <div>
      <ul className="jokes">
        <li className="setup">{props.setup}</li>
        <p className="punch">{props.punchline}</p>
      </ul>
    </div>
  );
}