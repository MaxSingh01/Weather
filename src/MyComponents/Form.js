import {
    Box,
    TextField,
    Button,
    makeStyles
} from '@material-ui/core'
import React from 'react'
import {
    useEffect,
    useState
} from 'react'
import { getData } from './Api'
import { Information } from './Information'
const useStyles = makeStyles({

    component: {
        borderRadius: "0px 20px 0px 0px",
        background: "#505488",
        padding: "16px"

    },
    input: {
        color: "#fff",
    },
    TextField: {
        marginRight: "50px"
    },

    Button: {
        background: "orange",
        marginLeft: "90px",
        borderRadius: "20px"
    }
})

const Form = () => {

    const classes = useStyles();

    const [content, setcontent] = useState()
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [click, handleClick] = useState("false")

    const Getweather = async () => {
       const {data} =  city && await getData(city, country);
       setcontent(data);
    }
    useEffect(() => {
        Getweather();
        handleClick("false")
        // eslint-disable-next-line
    }, [click])
    const handleCityChange = (value) => {
        setCity(value);
    }
    const handleCountryChange = (value) => {
        setCountry(value);
    }
    return (
        <>
        
        <Box className={classes.component}>
            <TextField 
             inputProps={{className:classes.input}}
            className={classes.TextField}            
            label  ="City "
            onChange={(e)=>handleCityChange(e.target.value)}
         />

            <TextField 
             inputProps={{className:classes.input}}
             className={classes.TextField}
             id="standard-basic" 
             onChange={(e)=>handleCountryChange(e.target.value)}
             label="Country" 
            />
            <Button className={classes.Button}
            variant="contained" onClick={()=>handleClick(true)} >Get Weather</Button>
        </Box>
        <Information data={content}/>
        </>
    )
}
export default Form;