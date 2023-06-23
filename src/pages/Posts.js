import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';

import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../constants/apiUrls';

export const Posts = () => {
  const posts = useFetch(`${API_URL}/posts`);

  return (
    <div className="row mt-4">
      {posts.map(post => (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={post.id}>
          <Card className='d-flex align-items-center' style={{ height: "100%" }}>
            <CardContent>
              <ListItem button component={Link} to={`/posts/${post.id}`} className="list-group-item">
                <ListItemAvatar>
                  <Avatar
                    alt={`Post ${post.id}`}
                    src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(post.userId) % 100}.jpg`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "../default/default-img.png";
                    }}
                  />
                </ListItemAvatar>
                <ListItemText primary={post.title.charAt(0).toUpperCase() + post.title.slice(1)} /> 
              </ListItem>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
