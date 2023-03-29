import React, { useState } from 'react';
import{ makeStyles } from '@material-ui/core/styles';
import { fontWeight } from '@mui/system';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Checkbox } from '@mui/material';


const subjectCategories = [
  {
    label: '(Sample) Capstone And Research Project',
    values: ['Subject: 112  Sched: M-TH  instructor: Mr. Abamonga, Students: 20'],
  },
  {
    label: '(Sample) Integrative Programming and Technologies',
    values: ['Subject: 113  Sched: M-TH  instructor: Mr. Abamonga, Students: 30', 'Subject: 113 Sched: M-TH  instructor: Mr. Minoza, Students: 19'],
   
  },
];

const useStyles = makeStyles({
    
        container: {
        height: '100vh',
        width: '100%',
        backgroundColor: 'white'
    },
    headercontainer: {
        height: '14%',
        width: '100%',
        backgroundColor: '#D9E8FF',
        position: 'relative'
    },
    headertxt1: {
        fontSize: 50,
        position: 'absolute', // add position property
        top: 14,            // move label to top
        left: 20,           // move label to left
        fontWeight: 500,
        color: '#0077B6'
            
    },
    headertxt2: {
        fontSize: 18,
        position: 'absolute', // add position property
        top: 85,
        left: 55,           // move label to left
        fontWeight: 400,
        color: '#0077B6'

    },
    noteicon: {
        position: 'relative',
        top: 85,
        left: 25,
        color: '#0077B6'

    },
    minicontainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        right:60,
        width: '30%',
        height: '40%',
        top: 50,
     


    },
    headertxt3: {
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        left: 10,
        top: 10,
        flexDirection: 'row'
        
            
       

    },
    contlabel1: {
        fontSize: 25,
        fontWeight: 700,
        color: '#0077B6',
        position: 'absolute',
        left: 25,
        top: 150,

    },
    buttonlogin: {
        bottom: 80,
        position: 'absolute',
        right: 60,
        color: '#fff',
        backgroundColor: '#0077B6',
        border: 'none',
        width: '20%',
        padding: 6,
        fontSize: 25,
        letterSpacing: 1,
        fontWeight: 500,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
          
        }

    },
    
    form: {
      position: 'absolute',
      left: 5,
      top: 200
    },
    resetButton: {
      left: 150,
    },
    select1: {
      position: 'asbsolute',
      left: '10%',
      height: '30%',
      width: '50vw'
    }
   
  
});
 

function SubjectRegistration() {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    const selectedSubject = event.target.value;
    const isChecked = event.target.checked;
  
    setSelectedCategories((prevSelectedCategories) => {
      if (isChecked) {
        return [...prevSelectedCategories, selectedSubject];
      } else {
        return prevSelectedCategories.filter((category) => category !== selectedSubject);
      }
    });
  };
  
  const getValuesForSubject = (subject) => {
    const category = subjectCategories.find((category) => category.label === subject);
    if (category) {
      return category.values;
    } else {
      return [];
    }
  };
  

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.headercontainer}>
          <label className={classes.headertxt1}>Subject Selection</label>
          <label className={classes.headertxt2}>Select your subjects to proceed</label>
          <LocalLibraryIcon className={classes.noteicon} />
          <div className={classes.minicontainer}>
            <label className={classes.headertxt3}>BS in Information Technology</label>
          </div>
        </div>
        <label className={classes.contlabel1}>Subjects</label>
        <button className={classes.buttonlogin} type="submit">
          Enroll
        </button>
        <Box className={classes.form}>
          <Box className={classes.paper}>
            <Typography variant="h6" gutterBottom></Typography>
            <FormControl component="fieldset" className={classes.select1}>
              <FormGroup>
                <FormControl fullWidth className={classes.select}>
                  <Select value={selectedOption} onChange={handleOptionChange}>
                    {subjectCategories.map((category) => (
                      <MenuItem key={category.label} value={category.label}>
                        {category.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
            
                {selectedOption && (
                  <FormGroup>
                    {getValuesForSubject(selectedOption).map((value) => (
                      <FormControlLabel
                        key={value}
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(value)}
                            onChange={handleCheckboxChange}
                            value={value}
                          />
                        }
                        label={value}
                      />
                    ))}
                  </FormGroup>
                )}
              </FormGroup>
            </FormControl>
            <Button
               variant="contained"
              onClick={() => {
                setSelectedOption('');
                setSelectedCategories([]);
              }}
              className={classes.resetButton}
            >
          Reset
        </Button>
        


        <Box mt={3} sx={{
              backgroundColor: '#E6F3FF',
              width: '90vw',
              height: '30vh',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              marginTop: 20,
              borderRadius: '10px',
              marginLeft: 5,
              position: 'absolute'
              }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main', paddingTop: '10px', paddingLeft: '10px' }}>
              Selected Subjects:
              </Typography>

                <ul style={{listStyleType: 'circle', paddingLeft: '25px'}}>
                  {selectedCategories.map((category) => (
                    <li key={category} style={{marginTop: '5px'}}>{category}</li>
                  ))}
                </ul>
              </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default SubjectRegistration;