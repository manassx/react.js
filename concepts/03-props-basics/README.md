# Props

Props are like passing arguements while calling or rendering componenets.

In app file

```javascript
<>
  <Props fname="Manas" />
  <Props fname="Sanket" />
  <Props fname="Aastha" />
</>
```

Ex- In component file

```javascript
function Props(props) {
  return <h1>Hello, {props.fname}.</h1>;
}
```

> We can render a component multiple times.

## Props Destructring

Props Destructring is done the same way as JS.

```javascript
// const { fname, lname } = props;

function Props({ fname, lname }) {
  return <h1>Hello, {fname}.</h1>;
}
```

> - number is passed in {} while defining props like age. Ex- age{20}
>
> - Destructing concept is read only, we cannot update data through this

### Default Props

In component file

```javascript
function Props({ fname, lname="Saxena" })
```

### Child Prop

Jitna bhi opening and closing tag ke bich me likhenge, wo children prop me jayega.

in app file

```javascript
<Props fname = "Manas" lname="Saxena">
<h1>This is children prop.</h1>
</Props>
```

> here h1 is the children prop, which can be accessed using children key in props 
