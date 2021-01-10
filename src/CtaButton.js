import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const CtaButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant='contained' color='default'>
        Call To Action
      </Button>
      <Button variant='outlined' color='default'>
        Support
      </Button>
    </div>
  );
};

export default CtaButton;
