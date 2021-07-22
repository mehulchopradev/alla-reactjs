import { useState, useEffect } from "react";
import axios from "axios";

// follows the render props pattern
function UsersDisplay({ render }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return render(users);
}

export default UsersDisplay;