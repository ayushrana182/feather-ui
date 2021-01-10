import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Divider from '@material-ui/core/Divider';
import Title from './Title';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <>
    <Title>Recent Notes  <AddCircleOutlineIcon style={{marginLeft: 100, }}/></Title>

    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fragrances can often reflect our mood and personality…." secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fragrances can often reflect our mood and personality…." secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fragrances can often reflect our mood and personality…." secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fragrances can often reflect our mood and personality…." secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fragrances can often reflect our mood and personality…." secondary="Jan 9, 2014" />
      </ListItem>
    </List>
    </>
  );
}
