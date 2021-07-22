import UsersDisplay from "../../components/users-display/users-display.component";

function Users() {
  return (
    <div>
      <h2>Users list</h2>
      <UsersDisplay render={(users) => (
        <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.username}) - {user.email}<br/>
              {user.address.street},{user.address.city}
            </li>
          ))
        }
        </ul>
      )}/>

      <UsersDisplay render={(users) => (
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}/>
    </div>
  )
}

export default Users;