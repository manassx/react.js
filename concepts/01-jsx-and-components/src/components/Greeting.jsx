
function Greeting() {
  const firstName = (name) => name.toUpperCase();
  return (
    <>
      <h1>Hello, {firstName("mAnAS")}</h1>
      {/* use curly braces to use js */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        ducimus.
      </p>
    </>
  );
}

export default Greeting;
