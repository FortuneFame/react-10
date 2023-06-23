import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';

import { API_URL } from '../constants/apiUrls';

export const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <Card>
      <CardContent>
        {user ? (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={`User ${user.id}`}
                src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id) % 100}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ) : (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Default User"
                src="../default/default-img.png"
              />
            </ListItemAvatar>
            <ListItemText primary="User Not Found" />
          </ListItem>
        )}
      </CardContent>
    </Card>
  );
};