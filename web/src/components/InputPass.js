import React from 'react';
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
        borderBottomColor: '#FF776E',
    },
    '& .MuiInput-underline:before': {
      borderColor: '#303030',
    },
    width:'100%',
    borderRadius: 3,
    height: 48,
  },
  input: {
    color: '#6C6C80'
  }
};

function ClassNames(props) {

  const { classes, children, className, ...other } = props;

  return (
    <TextField
      onChange={props.onChange} 
      type='password' 
      color={classes.input} 
      label="Senha" 
      className={clsx(classes.root, className)} 
      InputProps={{ className: classes.input }} 
      {...other} 
    >
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