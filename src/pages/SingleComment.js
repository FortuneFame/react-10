import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent } from '@material-ui/core';

import { API_URL } from '../constants/apiUrls';

export const SingleComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/comments/${id}`)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <Card>
      <CardContent>
        {comment ? (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className=''
                alt={`Comment ${comment.id}`}
                src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(comment.postId) % 100}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
              secondary={comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
            />
          </ListItem>
        ) : (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Default Comment"
                src="../default/default-img.png"
              />
            </ListItemAvatar>
            <ListItemText primary="Comment Not Found" />
          </ListItem>
        )}
      </CardContent>
    </Card>
  );
};