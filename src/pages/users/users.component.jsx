import UsersList from "../../components/users-list/users-list.component";
import UsersTable from "../../components/users-table/users-table.component";
// import WithUsersdata from "../../components/hocs/with-usersdata.component";

// const UsersListWithData = WithUsersdata(UsersList);
// const UsersTableWithData = WithUsersdata(UsersTable);

function Users() {
  return (
    <>
      <UsersList/>
      <UsersTable/>
    </>
  )
}

export default Users;