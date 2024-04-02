const App = () => {
  const name = "John";
  const x = 10;
  const y = 20;
  const names = ["Brad", "Mary", "Joe", "Sara"];
  const loggedIn = false;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Hello {name}</p>

      <p>
        The sum of {x} and {y} is {x + y}
      </p>

      <ul>
        {names.map((name, _index) => (
          <li key={_index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello guest</h1>}
      {loggedIn ? <h1>Hello Member</h1> : ""}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
