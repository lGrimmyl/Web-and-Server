import React, { useState } from "react";
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import { fontWeight } from '@mui/system';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { useNavigate } from "react-router-dom";



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
  formControl: {
    margin: '8px 0',
    minWidth: 200,
  },
 

  form: {
    position: 'absolute',
    left: 5,
    top: 200,
    width: '80vw'
  },
  select1: {
    position: 'asbsolute',
    left: '10%',
    height: '30%',
    width: '50vw'

  },
  tablecont2: {
    marginTop: 15,
    backgroundColor: '#e6f4f1',
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 20,
    margin: '0 auto',
    width: '100%',
    '& th, & td': {
    border: '1px solid #97c6e3',
    padding: '12px',
    textAlign: 'left',
    verticalAlign: 'middle',
    },
    '& th': {
    backgroundColor: '#75b1d1',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    },
    '& tr:nth-child(even)': {
    backgroundColor: '#f0f8ff',
    },
    '& tr:hover': {
    backgroundColor: '#d5e8f3',
    },
    },
    table1: {
      backgroundColor: '#E6F2FF', // change the background color to light blue
      borderRadius: 10,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: 15,
      margin: '0 auto',
      '& th, & td': {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        verticalAlign: 'middle',
      },
      '& th': {
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#0077B6'
      },
      '& tr:nth-child(even)': {
        backgroundColor: '#f9f9f9',
      },
      '& tr:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
    reset: {
      left: 250,
      
      
    }
});




const dropdownOptions = [
  {
    id: 113,
    subject: "Integrative Programming and Technologies",
    values: [
      { id: 1, sub:  "IPATI", sched: 'Mon 9:00-10:30 PM', stud: 29, inst: "Mr. Antonio Reyes" },
      { id: 2,  sub:  "IPATI", sched: 'Tuesday 9:00-10:30 AM ', stud: 23, inst: "Mr. Dario Minoza" },
      { id: 3,  sub:  "IPATI", sched: 'Wednesday 1:00-3:30AM', stud: 26, inst: "Mr. Fort Reys" }
    ]
  },
  {
    id: 114,
    subject: "Understanding The Self",
    values: [
      { id: 3, sub: "UTS", sched: 'Monday 9:00-10:30 PM',  stud: 29, inst: "Mrs. Barry Else" },
      { id: 4, sub: "UTS", sched: 'Tuesday 4:00-6:30 AM',  stud: 29, inst: "Mr. John Barbo" },
      { id: 4, sub: "UTS", sched: 'Tuesday 4:00-5:30 PM',  stud: 29, inst: "Mrs. Lim Kho" }
    ]
  },
  {
    id: 115,
    subject: "Object-Oriented Programming",
    values: [
      { id: 5, sub: "OOP", sched: 'Tuesday 4:00-6:30 AM',  stud: 22, inst: "Mr. Reyn Booe" },
      { id: 6, sub: "OOP", sched: 'Tuesday 4:00-5:30 PM',  stud: 20, inst: "Mrs. Elvey Sy" }
    ]
  }
];


function SubjectRegistration() {
  const navigate = useNavigate()
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRowCheck = (e) => {
    const checkedId = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedRows((prevSelectedRows) => [
        ...prevSelectedRows,
        dropdownOptions
          .find((option) => option.subject === selectedOption)
          .values.find((value) => value.id === checkedId)
      ]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((row) => row.id !== checkedId)
      );
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
        <button 
        className={classes.buttonlogin}
        onClick={() => {
          navigate("/Confirmation");}}
        type="submit" >
          Enroll
        </button>
       
        <Box className={classes.form}>
       <Box className={classes.paper}>
       <FormControl component="fieldset" className={classes.select1}>
       <Select
            className={classes.select1}
            value={selectedOption}
            onChange={handleOptionChange}
            inputProps={{
              id: 'subject-dropdown',
            }}
          >
            <MenuItem value="">
              Select a subject
            </MenuItem>
            {dropdownOptions.map((option) => (
              <MenuItem key={option.id} value={option.subject} disabled={selectedOption === option.subject}>
                {option.subject}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
          <Button 
          className={classes.reset}
            variant="contained"
            onClick={() => {
              setSelectedOption('');
              setSelectedRows([]);
              
            }}
            
        
          >
           Clear All
          </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          <Typography variant="h6" style={{color: '#0077B6', fontWeight: "bold", 
            textTransform: "uppercase", letterSpacing: 1, marginBottom: 10}}>
            Please select a subject
          </Typography>
       
        </Box>
                
      {selectedOption && (

        <TableContainer className={classes.table1}>
          <Table>
          <TableHead className= {classes.table2}>
            <TableRow>
              <TableCell className={classes.tableHeaderCell2}>Subject</TableCell>
              <TableCell className={classes.tableHeaderCell2}>Schedule</TableCell>
              <TableCell className={classes.tableHeaderCell2}>Students</TableCell>
              <TableCell className={classes.tableHeaderCell2}>Instructor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dropdownOptions
              .find((option) => option.subject === selectedOption)
              .values.map((value) => (
                <TableRow key={value.id}>
                  <TableCell>{value.sub}</TableCell>
                  <TableCell>{value.sched}</TableCell>
                  <TableCell>{value.stud}</TableCell>
                  <TableCell>{value.inst}</TableCell>
                  <TableCell>
                    <input
                      type="checkbox"
                      value={value.id}
                      onChange={handleRowCheck}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
          {selectedRows.length > 0 && (
            <div style={{ height: '30vh', overflow: 'auto' }}>
              <TableContainer className={classes.tablecont2}>
                 <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main', paddingTop: '10px', paddingLeft: '10px' }}>
              Selected Subjects:
              </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell}> Subject</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Schedule</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Students</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Instructor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedRows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.sub}</TableCell>
                        <TableCell>{row.sched}</TableCell>
                        <TableCell>{row.stud}</TableCell>
                        <TableCell>{row.inst}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
         </div>
            )}
            </Box>
      </div>
      </div>

);
}

export default SubjectRegistration;
