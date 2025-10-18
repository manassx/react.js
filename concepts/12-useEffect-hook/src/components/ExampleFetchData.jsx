import { useEffect, useState } from "react";
import User from "./User";
const url = "https://jsonplaceholder.typicode.com/users";

function ExampleFetchData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fetchData = async () => {
    const response = await fetch(url);
    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);
      setLoading(false);
      setErrorMsg(`Error ${response.status}`);
    }
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>{errorMsg}</h1>;
  }
  return users.map((user) => <User key={user.id} {...user} />);
}

export default ExampleFetchData;
