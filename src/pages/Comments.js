import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent } from '@material-ui/core';

import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants/apiUrls';

export const Comments = () => {
  const comments = useFetch(`${API_URL}/comments`);

  return (
    <List>
      {comments.map(comment => (
        <Card key={comment.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <ListItem button component={Link} to={`/comments/${comment.id}`} className="list-group-item">
              <ListItemAvatar>
                <Avatar
                  alt={`Comment ${comment.id}`}
                  src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(comment.postId) % 100}.jpg`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "../default/default-img.png";
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                secondary={comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
              />
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};
