import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';

const ItemOne = () => {
  return (
    <div>
      <TextField
        id='outlined-multiline-static'
        label='Documents'
        multiline
        rows={3}
        defaultValue='Please upload your document '
        variant='outlined'
        fullWidth
      >
        <IconButton color='primary' aria-label='directions' size='medium'>
          <BackupIcon />
        </IconButton>
      </TextField>
    </div>
  );
};

export default ItemOne;
