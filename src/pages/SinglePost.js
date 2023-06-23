import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, ListItemAvatar, Avatar } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';

import { API_URL } from '../constants/apiUrls';

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <Card className="card">
      <CardContent>
        {post ? (
          <>
            <ListItemAvatar>
              <Avatar
                className='mb-4'
                alt={`Post ${post.id}`}
                src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(post.userId) % 100}.jpg`}
              />
            </ListItemAvatar>
            <Typography variant="h5" component="h2" className="card-title mb-4">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Typography>
            <Typography variant="body2" component="p" className="card-text">
              {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
            </Typography>
          </>
        ) : (
          <>
            <ListItemAvatar>
              <Avatar
                alt="Default Post"
                src="../default/default-img.png"
              />
            </ListItemAvatar>
            <Typography variant="h5" component="h2" className="card-title">
              Post Not Found
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};
