import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import CloudIcon from '@material-ui/icons/Cloud';
import DehazeIcon from '@material-ui/icons/Dehaze';

import {Box,makeStyles,Typography} from '@material-ui/core';

const useStyles=makeStyles({
    component:{
        margin:"50px"
    },
    icon:{
        marginRight:"29px",
        color:"darkred"
    },
    row:{
        padding:"20px",
        fontSize:"20px",
        letterSpacing:"2px"
    },
    value:{
        color:"white"
    }
})
export const Information = ({data}) => {
    const classes= useStyles();
    return (
        data?
        <Box className={classes.component}>
            <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location <Box className={classes.value} component="span">{data.name},{data.sys.country}</Box></Typography>
            <Typography className={classes.row}> <SettingsBrightnessIcon className={classes.icon}/>Temprature<Box className={classes.value} component="span"> {data.main.temp}</Box></Typography>
            <Typography className={classes.row}><OpacityIcon className={classes.icon}/>Humidity<Box className={classes.value} component="span"> {data.main.humidity}</Box></Typography>
            <Typography className={classes.row}><Brightness5Icon className={classes.icon}/>Sun Rise<Box className={classes.value} component="span"> {new Date(data.sys.sunrise*1000).toLocaleTimeString()} AM</Box></Typography>

            <Typography className={classes.row}><DehazeIcon className={classes.icon}/>Condition<Box className={classes.value} component="span"> {data.weather[0].main}</Box></Typography>
            <Typography className={classes.row}><CloudIcon className={classes.icon}/> Clouds<Box className={classes.value} component="span"> {data.clouds.all}%</Box></Typography>
        </Box>:''
    )
}
