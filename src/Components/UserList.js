import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('	https://api.adviceslip.com/advice/{slip_id}');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default UserList;
