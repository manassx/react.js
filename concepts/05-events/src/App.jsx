import "./App.css";
const handleClick = (fname, lname) => {
  console.log(fname, lname);
};
function App() {
  return (
    <>
      <button
        onClick={(e) => {
          handleClick("Manas", "Saxena");
        }}
      >
        Touch me
      </button>
    </>
  );
}

export default App;
