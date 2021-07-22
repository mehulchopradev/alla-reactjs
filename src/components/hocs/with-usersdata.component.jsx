import axios from "axios";
import { useState, useEffect } from "react";

// Higher order components pattern (HOC)
// A HOC is a component that takes a component x as input and returns a new component y
// that will have component x along with extra common functionalities added to it
function WithUsersdata(WrappedComponent) {
  return function WithUsersdataWrapped() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(users);
      };

      fetchUsers();
    }, []);

    return <WrappedComponent users={users}/>
  }
}

export default WithUsersdata;