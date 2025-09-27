import ShowFullName from "./ShowFullName";

function Props(props) {
  return (
    <>
      <h1>
        <ShowFullName {...props} />
      </h1>
    </>
  );
}



export default Props;
