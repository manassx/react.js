#Ways to add CSS to a react app

*To create a seperate css file for a component in the component folder (component.css) and importing it to the component file.
For Example,
**in App.jsx:**

```javascript
import Style from "./components/style.jsx";
```

**in style.jsx**

```javascript
import "./style.css";

function Style() {
  return (
    <div className="bg-dark">
      <h2>Hi, Manas</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        earum sint qui, laboriosam consequatur animi libero exercitationem
        similique perspiciatis!
      </p>
    </div>
  );
}

export default Style;
```

note: here style.jsx is a component file and Style is a component

And **style.css** is going to have vanilla style for .about class

*We can add inline css by using style attribute in a jsx tag and passing a javascript object

**Some additional points for inline css**
-We can use conditional operator or ternary operator in jsx to add classes based on certain conditions

```javascript

function Style() {
    const isDarkMode = true;
  return (
    <div className = {isDarkMode? "bg-dark": ""}>
      <h2>Hi, Manas</h2>
    //   and so on
  )
  </div>
}
```

-We need to use {backticks} to give multiple classes to a tag in jsx

Ex: here we want to add two classes, container and bg-dark but the second one should be based on a condtition.

```javascript
<div className = {`container ${isDarkMode? "bg-dark": ""}`}>
```

---

#CSS Modules

Normally, Agar 1 class 2 css file mei designed ho toh joh baad me import hoti hai uske style follow hote hai

```javascript
import "./style.css";
import "./style2.css";
```

note: here the class of style2.css will be applied

Things to remember using CSS Modules -
a. First change the css file name to FileName.module.css
b. Write Command - import variableName from "./FileName.module.css" in the component file name

```javascript
import style1 from "./Greeting1.module.css";
import style2 from "./Greeting2.module.css";
```

**To use:**
Write {variableName.ClassName} as class for the component
Note - we use {} cause module converts the whole css file into a Js object
and js ko jsx mei use karne ke liye {} likhna padhta hai

```javascript
<div className={style2.GreetingClass}>...</div>
```

Note - for classes like bg-dark, instead of {variableName.bg-dark} use {variableName["bg-dark"]}

Note - for adding multiple classes use string literals

```javascript
<div className={`${style.className} ${style["bg-dark"]}`}></div>
```
