import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';

import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants/apiUrls';

export const Users = () => {
  const users = useFetch(`${API_URL}/users`);
  
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {users.map(user => (
        <Card key={user.id} className="card m-3 p-3" style={{ width: '25%' }}>
          <ListItem button component={Link} to={`/users/${user.id}`} className="list-group-item">
            <ListItemAvatar>
              <Avatar alt={`User ${user.id}`} className="mr-3">
                <img
                  alt='avatar-user'
                  src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "../default/default-img.png";
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        </Card>
      ))}
    </div>
  );
};
