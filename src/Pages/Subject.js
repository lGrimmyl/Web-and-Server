import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    FormControl,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    Paper,

    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import { Theme } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({



    container: {
        height: '100vh',
        width: '100vw',

    },

    containerngablue: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '20%',
        top: 0,
        backgroundColor: '#D9E8FF',
    },
    container2: {

        height: '30vhw',
        width: '40vh',
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    label1: {
        position: 'absolute',
        fontSize: 50,
        color: '#0077B6',
        fontWeight: 500,
        left: 15,

    },
    label2: {
        position: 'absolute',
        fontSize: 15,
        color: '#0077B6',
        paddingTop: 78,
        left: 15,

    },
    minicon: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 15,
        width: '90%',
        height: '30%',
        top: 110,
    },
    label3: {
        fontSize: 28,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        left: 40,
        top: 10,
        flexDirection: 'row'
    },
    bookicon: {
        position: 'relative',
        top: 11,
        left: 25,


    }, schedulebutton: {
        position: 'absolute',
        left: 100,
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
        }
    },
    sectionbutton: {
        position: 'absolute',
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        left: '50%',
        transform: 'translateX(-50%)',
        '&:hover': {
            backgroundColor: '#034162',
        },



    },
    backbutton: {
        position: 'absolute',
        right: 100,
        backgroundColor: '#0077B6',
        width: '25%',
        height: '5%',
        top: 650,
        color: 'white',
        fontSize: 30,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0 3px 5px 2px rgba(0, 119, 182, 1.0)',
        '&:hover': {
            backgroundColor: '#034162',
        }
    },
    imgsaubos: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: '30%',
        width: '80%'

    },
    tableRow: {
        marginTop: 5,
        marginBottom: 3,
        },
        form: {
            position: 'absolute',
            left: 30,
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
          },
          table: {
            minWidth: 650,
       
          },
          tableContainer: {
            borderRadius: 15,
            margin: 3,
            maxWidth: 950,
            marginLeft: 60,
         
          },
          tableHeaderCell: {
            fontWeight: 'bold',
            backgroundColor: '#ADD8E6',
            color: theme.palette.getContrastText(theme.palette.primary.dark),
          },
          name: {
            fontWeight: 'bold',
            color: theme.palette.secondary.dark,
          },
          tableCell: {
            fontWeight: 'bold',
            backgroundColor: '#f4f4f4',
          },
          options: {
            width: '10%',
            fontWeight: 'bold',
            color: theme.palette.secondary.dark,
        },





}));



const Subject = () => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState("");
    const [tableData, setTableData] = useState([]);
    const navigate = useNavigate();
    const handleDropdownChange = (event) => {
      const option = dropdownOptions.find((o) => o.subject === event.target.value);
      if (selectedOption === event.target.value) {
        setSelectedOption("");
        setTableData([]);
      } else {
        setSelectedOption(event.target.value);
        if (option?.values) {
          setTableData(option.values);
        } else {
          setTableData([]);
        }
      }
    };
    
  
    const dropdownOptions = [
      {
        id: 113,
        subject: "IPATI",
        values: [
          { id: 113, sub: "IPATI", sched: "TUEZ",  stud: 30, inst: "PTA-EYNA", },
          { id: 113, sub: "IPATI", sched: "LUNEZ",  stud: 30, inst: "PTA-GE", },
        ],
      },
      {
          id: 114,
          subject: "UTS",
          values: [
            { id: 114, sub: "UTS", sched: "WEXDZ",  stud: 12, inst: "SDA-MAAN", },
            { id: 114, sub: "UTS", sched: "FRIZ",  stud: 51, inst: "YOA-SER", },
          ],
        },
    ];

   
      
    return (
        <div>
            <div className={classes.container}>


                <img src="https://i.ibb.co/pJzvNpj/imgbr2.png" className={classes.imgsaubos} />
               
              

                <div className={classes.containerngablue}>
                    <label className={classes.label1}>Subject</label>
                    <label className={classes.label2}>School Year 2022-2023</label>


                    <div className={classes.minicon}>
                        <MenuBookIcon className={classes.bookicon} />
                        <label className={classes.label3}>BS Information Technology</label>

                    </div>

                </div>
           

        <Box className={classes.form}>
          <Box className={classes.paper}>
            <Typography variant="h6" gutterBottom></Typography>
            <FormControl component="fieldset" className={classes.select1}>

          <Select value={selectedOption} onChange={handleDropdownChange}>
            <MenuItem value="">Select a subject</MenuItem>
            {dropdownOptions.map((option) => (
              <MenuItem key={option.subject} value={option.subject}>
                {option.subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
               variant="contained"
              onClick={() => {
                setSelectedOption('');
                setTableData([]);
              }}
              className={classes.resetButton}
            >
          CLEAR ALL
        </Button>
      </Box>
      {tableData.length > 0 && (
        <Box p={2}>
         <Typography variant="h6" style={{color: "#6EB5FF", fontWeight: "bold", 
         textTransform: "uppercase", 
         letterSpacing: 1, marginBottom: 10}}>
            Selected Subject: {selectedOption}</Typography>
            <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Subject</TableCell>
            <TableCell className={classes.tableHeaderCell}>Schedule</TableCell>
            <TableCell className={classes.tableHeaderCell}>Students</TableCell>
            <TableCell className={classes.tableHeaderCell}>Instructor</TableCell>
            <TableCell className={classes.tableHeaderCell}>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row,index) => (
           <TableRow key={index} className={classes.tableRow} >
              <TableCell className={classes.name} component="th" scope="row">
                {row.sub}
              </TableCell>
              <TableCell className={classes.tableCell}>{row.sched}</TableCell>
              <TableCell className={classes.tableCell}>{row.stud}</TableCell>
              <TableCell className={classes.tableCell}>{row.inst}</TableCell>
              <TableCell className={classes.options}>
                <Select>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Box>
      )}
      {tableData.length === 0 && (
        <Box p={2}>
          <Typography variant="h6" style={{color: "#6EB5FF", fontWeight: "bold", 
         textTransform: "uppercase", 
         letterSpacing: 1, marginBottom: 10}}>
            Please select a subject to display data {selectedOption}</Typography>
        </Box>
      )}
    </Box>


    <Button  onClick={()=> navigate("/Schedule")} className={classes.schedulebutton}>Check Schedule</Button>
    <Button onClick={()=> navigate("/Section")}className={classes.sectionbutton}>Check Section</Button>
    <Button onClick={()=> navigate("/Menu")} className={classes.backbutton}>Back to Menu</Button>

            </div>
        </div>
    );
}
    


export default Subject;
