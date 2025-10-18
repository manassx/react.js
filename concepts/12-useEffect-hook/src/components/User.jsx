const User = ({id, name, username, phone, address}) => {
  return <div style={{padding:"1rem 4rem", margin: "1rem", backgroundColor: "#292929"}}>
    <p>id: {id}</p>
    <p>name: {name}</p>
    <p>username: {username}</p>
    <p>phone: {phone}</p>
    <p>address: {address.street}</p>
  </div>;
};

export default User;
