import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '65%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    margin:'auto'
    
  },
}));

const AlertTop = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="warning" >Your Card has been expired. Please view the application section for details. <Button color="primary" size="small" style={{marginLeft: 400}} >View Now</Button></Alert>
    </div>
  );
};

export default AlertTop;
