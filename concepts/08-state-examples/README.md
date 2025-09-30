## Component Composition and Top-Down Data Flow.

This example shows a fundamental React pattern. The main App component holds the users data in its state and passes it down as a prop to the <Users /> component.

The Users component then maps over this array to render an individual <User /> component for each person, using the spread syntax ({...user}) to conveniently forward all the user details as props.

<!-- prop drilling -->

> app renders Users --> Users renders User

**Check out the code to understand the data flow and revise the concept**