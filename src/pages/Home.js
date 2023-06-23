import React from 'react';
import { Container, Typography } from '@material-ui/core';

export const Home = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>
      Домашнее задание
    </Typography>
    <Typography variant="body1" gutterBottom>
      1. Создать Header, Footer
    </Typography>
    <Typography variant="body1" gutterBottom>
      2. Между Header и Footer создать Outlet, в котором будут выводиться следующие компоненты:
    </Typography>
    <Typography variant="body1" gutterBottom>
      - Users
    </Typography>
    <Typography variant="body1" gutterBottom>
      - Posts
    </Typography>
    <Typography variant="body1" gutterBottom>
      - Comments
    </Typography>
    <Typography variant="body1" gutterBottom>
      3. Создайте компоненты:
    </Typography>
    <Typography variant="body1" gutterBottom>
      - SingleUser
    </Typography>
    <Typography variant="body1" gutterBottom>
      - SinglePost
    </Typography>
    <Typography variant="body1" gutterBottom>
      - SingleComment
    </Typography>
    <Typography variant="body1" gutterBottom>
      4. При клике на конкретный элемент, должны выводиться детали данного элемента (используем роутинг)
    </Typography>
  </Container>
);