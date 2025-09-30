import User from "./User";

function Users({ users, increaseAge, deleteUser }) {
  return (
    <>
      {users.map((user) => (
        <User
          {...user}
          key={user.id}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      ))}
    </>
  );
}

export default Users;
