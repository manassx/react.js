in app file

```javascript
const users = [
  { id: 1, firstName: "Manas", lastName: "Saxena" },
  { id: 2, firstName: "Swati", lastName: "Saxena" },
  { id: 3, firstName: "Sonal", lastName: "Saxena" },
];
function App() {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
        />
      ))}
    </>
  );
}
```

or

```javascript
<>
  {users.map((user) => (
    <User {...users} key={user.id}/>
  ))}
</>
```

in component file

```javascript
function User({ firstName, lastName }) {
  return (
    <h1>
      Hello, {firstName} {lastName}
    </h1>
  );
}
```

> While rendering an array we also send a key with each item to uniquely identify it(Like for deleting an item, etc), We don't use indices for this cause like if we delete index0 then index1 will become index0 and it is gonna be difficult to remember the structure of the array. Although we can use indices if we know for sure that the list is going to be static and not going to change ever.