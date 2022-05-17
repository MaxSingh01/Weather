
import {Box,makeStyles} from '@material-ui/core';
import Form from './Form'
import logo from '../img/bg.jpg'

const useStyles= makeStyles({

    component:{
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        width: "65%"
    },
    leftcontainer:{
        backgroundImage: `url(${logo})`,
        backgroundSize:"cover",
        height:"80%",
        width:"34%",
        borderRadius:"20px 0 0 20px"
    
    },
    rightcontainer:{
        background:"linear-gradient(to right,#d4c0a3,#ce9957)",
        height:"80%",
        width:"65%",
        borderRadius:"0px 20px 20px 0px"
    }
    
    
    

})
export default function Weather  () {
 const classes= useStyles();
    
    return (
        <Box className={classes.component}>
            <Box className={classes.leftcontainer}></Box>
            <Box className={classes.rightcontainer}>
                <Form/> 
            </Box>
        </Box>
    )
}
 