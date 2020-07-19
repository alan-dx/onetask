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

import DateHour_Picker from '../components/DateHour_Picker';
import { FaRegEdit } from 'react-icons/fa';

import InputEdit from '../components/InputEdit';
import { useEffect } from 'react';

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
  const [selectedTitleTask, setSelectedTitleTask] = React.useState(props.data.title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.editTask({
      title: selectedTitleTask,
      hour: `${selectedDate.getHours()}:${selectedDate.getMinutes()}`,
      date: `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`,
      id: props.data._id
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
        <button onClick={handleClickOpen} style={{border: 0, outline: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
            <FaRegEdit style={{width:20, height: 20}} />
        </button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Editando Tarefa
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Salvar
                    </Button>
                </Toolbar>
            </AppBar>
            <List className={classes.body} >
                <InputEdit data={props.data} onChange={handleTitleTaskChange} />
                <DateHour_Picker def={true} data={props.data} setDate={handleDateChange} />
            </List>
        </Dialog>
    </div>
  );
}