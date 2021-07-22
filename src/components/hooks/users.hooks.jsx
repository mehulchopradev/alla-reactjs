import { useState, useEffect } from "react";
import axios from "axios";

export function useUsers() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return users;
}