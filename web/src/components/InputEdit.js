import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    '& label.Mui-focused': {
        color: '#FF776E',
    },
    '& .MuiInput-underline:after': {
        borderColor: '#FF726E',
    },
    '& .MuiInput-underline:before': {
      borderColor: '#303030',
    },
    width:'100%',
    height: 40,
  },
  input: {
    color: '#6C6C80'
  }
};

function ClassNames(props) {

  const { classes, children, className, ...other } = props;

  // useEffect(() => {
  //   props.onChange(props.data.title)
  // }, []);

  return (

    <TextField
      onChange={props.onChange}
      type='text'
      color={classes.input}
      label="Tarefa"
      defaultValue={props.data.title}
      className={clsx(classes.root, className)} 
      InputProps={{className: classes.input}}
      {...other} >
      {children || 'class names'}
    </TextField>

  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);