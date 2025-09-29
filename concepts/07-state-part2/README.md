## Update State in Array

We can't directly mutate state like this:

```javascript
function handleFruits() {
  setFruits(fruits.push("Peach"));
}
```

We do it this way, by making a returning a new array and creating a copy of previous array

```javascript
function handleFruits() {
  setFruits((prevFruits) => [...prevFruits, "Peach"]);
}
```

## Update State in Object

> mistake: again i did the same mistake of mutating the state directly
> ```javascript
> function incAge() {
> setPerson(person.age + 1);
> }
>```

**this is how you actually do it, making the copy of the object and updating**

```javascript
function incAge() {
  setPerson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
}
```
