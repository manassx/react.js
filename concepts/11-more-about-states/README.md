> When the value of state changes, the component rerenders

#### Remove Redundant State

**We can make a thrid variable using two state variable, and its value is always going to be up to date. We don't need to create third state for the third variable like fullName here.**

Ex:
```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const fullName = firstName + " " + lastName;
```

**When state changes in any component, the component rerenders and the child componenet rerenders as well with the new props but the grandparent component will not rerender, just the component and the child component.**


# some important things to remember

- setState is async
- prop object is immutable that means once props are passed from a parent component to a child component, their values should not be changed by the child component. but prop variable(once prop is destructred) is mutable 
- never create keys on the fly(while rendering the component) because react percieves each list item as a new element on every re-render.
- lifting the state up means keeping the state in the parent component so that all the child componenet can use it and easily work with it.


## How React works?

**Purpose of reconciliation algorithm(fiber reconciler):**

- **Diffing Algorithm:** It is a method used to identify the differences between two versions of a data structure, such as text files, object trees (like the DOM or Virtual DOM), or code. Its primary goal is to determine the minimal set of changes required to transform one version into another.
- Creates an effect list and give it to renderers(ReactDOM).

> React performance was significantly improved after React 16, as the reconciliation algorithm upgraded from Stack reconciler to Fiber reconciler



