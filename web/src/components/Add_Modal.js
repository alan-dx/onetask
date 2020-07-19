import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DateHour_Picker from '../components/DateHour_Picker';

import InputTask from '../components/InputTask';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#FF776E'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  body: {
        marginLeft: '5%',
        width: '90%',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTitleTask, setSelectedTitleTask] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    props.addTask({
      title: selectedTitleTask,
      hour: `${selectedDate.getHours()}:${selectedDate.getMinutes()}`,
      date: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTitleTaskChange = (event) => {
    setSelectedTitleTask(event.target.value);
  };

  return (
    <div>
        <Fab color='default' onClick={handleClickOpen} >
            <AddIcon />
        </Fab>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Adicionar Tarefa
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Salvar
                    </Button>
                </Toolbar>
            </AppBar>
            <List className={classes.body} >
                <InputTask onChange={handleTitleTaskChange} />
                <DateHour_Picker def={false} setDate={handleDateChange} />
            </List>
        </Dialog>
    </div>
  );
}