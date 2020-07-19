import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers(props) {

    if (props.def == true) {
        var [day, month, year] = props.data.date.split('/')//var because it needs to be global
        var [hour, minute] = props.data.hour.split(':')
    }
    
    const [selectedDate, setSelectedDate] = React.useState(props.def == true ? new Date(year,month - 1, day, hour, minute) : new Date());
    
    const handleDateChange = date => {
        setSelectedDate(date);
        props.setDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Data Lembrete"
                format="dd/MM/yyyy"
                type='date-time'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
            />
            <KeyboardTimePicker
                ampm={false}
                margin="normal"
                id="time-picker"
                label="Hora Lembrete"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change time"
                }}
            />
        </Grid>
        </MuiPickersUtilsProvider>
    );
}