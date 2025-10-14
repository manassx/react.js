
```javascript
<form>
    <div className="formGroup">
        <label htmlFor="firstName">First Name</label> <br />
        <input type="text" name="firstName" id="firstName" />
    </div>
    <div className="formGroup">
        <label htmlFor="lastName">Last Name</label> <br />
        <input type="text" name="lastName" id="lastName" />
    </div>
    <div className="formGroup">
        <label htmlFor="username">Username</label> <br />
        <input type="text" name="username" id="username" />
    </div>
    <div className="formGroup">
        <label htmlFor="email">Email</label> <br />
        <input type="email" name="email" id="email" />
    </div>
    <div className="formGroup">
        <label htmlFor="passwrod">Password</label> <br />
        <input type="password" name="passwrod" id="passwrod" />
    </div>
    <div className="formGroup">
        <label htmlFor="confirmPassword">Confirm Password</label> <br />
        <input type="password" name="confirmPassword" id="confirmPassword" />
    </div>
    <input type="submit" style={{marginTop:"1rem"}}/>
  </form>;
```

> Previously we had to make multiple useStates, and setup value, onChange function for each input, making things repetitive and monotonous.


**We can instead create just one useState called formData and pass an object into it of the form data**

```jsx 
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
```
**and instead of creating multiple onChange functions for each input, we can just create one**

```jsx
const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
```
> The [e.target.name] syntax is a modern JavaScript feature that uses the name attribute of the input field (e.g., "firstName") as the key to update in the new state object.

## Full Code to handle multiple inputs is in HandleMultipleInputs.jsx component.