## Basics of useEffect

useEffect is used to do Side Effects. SideEffects are the actions unrelated to react for example fetching data, adding eventListener to document.

**Everytime component gets rendered, useEffect will be called.**

Args of useEffects:

1. callback function
2. dependency array

Three Cases of dependency array:

1. No dependency array----> Everytime component gets rendered, useEffect will be called.
2. [] ----> useEffect will be called only once on the initial render.
3. [counter] ----> useEffect will only be called only when this state(counter) gets changed

## Fetching data after the component is rendered

**data is fetched after the component is rendered**

method 1: using promises and fetch()

```jsx
const url = "https://jsonplaceholder.typicode.com/users";
function FetchData() {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Fetch Data</div>;
}
```

method 2: async and await

```jsx
const url = "https://jsonplaceholder.typicode.com/users";

function ExampleFetchData() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return users.map((user) => <div>{user.email}</div>);
}
```

# Added loading and error state to the same code

```jsx
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

```
**What we did here:**
Basically if the loading is true, the component returns loading... and the function stops there but when setUsers(data) is completed then only loading is set to false which rerenders the page and this time the component is going to ignore loading... conditional statement and returns each User.

Also, if an error occurs, the isError is set to true and loading is set to false so that an error message is rendered when the isError is true.


