import User from "./components/user";
import "./App.css";

const users = [
  { id: 1, firstName: "Manas", lastName: "Saxena" },
  { id: 2, firstName: "Swati", lastName: "Saxena" },
  { id: 3, firstName: "Sonal", lastName: "Saxena" },
];
function App() {
  return (
    <>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </>
  );
}

export default App;
