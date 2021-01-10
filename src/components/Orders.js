import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Title from './Title';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin-left: 20px;
`;

const Orders = () => {
  return (
    <div>
      <Wrapper>
        <Avatar alt='Remy Sharp' />

        <Title gutterBottom>FeatherWebs Inc</Title>

        <Typography variant='body2' color='textSecondary'>
          256 Priscilla Dale Suite 602
        </Typography>

        <Typography variant='body2' color='textSecondary'>
          christy_cartwright@yahoo.com
        </Typography>

        <Typography variant='body2' color='textSecondary'>
          140-085-4934
        </Typography>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          Main Button
        </Button>
        <Typography variant='body2' color='textSecondary'>
          Date of Registration
        </Typography>
        <Typography gutterBottom variant='h7' color='default'>
          18/09/2018
        </Typography>
      </Wrapper>
      <Divider variant='middle' style={{ marginTop: 5, marginBottom: 5 }} />
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary='John Doe'
          secondary='ziftufig@ipohimuh.nz'
          third='15085399330'
          style={{ marginTop: -15 }}
        />
      </ListItem>

      <Typography
        variant='body2'
        color='textSecondary'
        style={{ marginTop: -15, marginBottom: -10, marginLeft: 70 }}
      >
        15085399330
      </Typography>
    </div>
  );
};

export default Orders;
