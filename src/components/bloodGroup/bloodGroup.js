import React from 'react'
import { Box, Typography, TextField, Select, MenuItem, FormControl, Stack, Button, InputLabel } from '@mui/material'

function BloodGroup() {
    const [bloodGroup, setBloodGroup] = React.useState("A")
  return (
    <div>
        <Box mt="5rem" display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Stack
        width="20rem"
        boxShadow="3"
        backgroundColor="#F7F7F7"
        borderRadius="10px"
        padding={{ xs: "1rem", md: "2.688rem" }}
        margin={{ xs: "0px 1rem", md: "0px 3.75rem" }}
        // height="24.375rem"
        justifyContent="space-around"
        id="modal-modal-description"
        component="form"
      >
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
            display: "flex",
          }}
        >
            <Box>
            <Typography variant="subtitle1" my="8px">
              Code
            </Typography>
            <TextField
              placeholder="Enter Code"
              fullWidth
              id="code"
              variant="outlined"
              size="small"
              color="secondary"
            />
          </Box>
                     <Typography variant="subtitle1" my="8px">
                       Description:
                     </Typography>
                     <TextField
                       required
                       fullWidth
                       placeholder="Describe your project..."
                       id="description"
                       variant="outlined"
                       size="small"
                       color="secondary"
                       multiline
                       rows={4}
                     />








<Box sx={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "2rem", justifyContent: "space-between"}}>  
                      
                      <Typography variant="subtitle1" my= "6px">
                      Blood:
                      </Typography>
                      <FormControl fullWidth sx={{display: "flex", alignItems: "center", marginLeft: {xs: "10px", sm:"7.1875rem"}}}>
      {/* <InputLabel id="options" fontSize="11px">Select One..</InputLabel> */}
      <Select
        id="budget"
        style={{height: "50px", width: "107px"}}
        //  onChange={()=>}
         value={bloodGroup}
         onChange={(e)=>setBloodGroup(e.target.value)}
      >
       {
         ["A", "A+", "B", "B+", "O", "O+"].map((option, index)=>{
           return(
             <MenuItem onChange={()=>console.log("dddddddddddddddddd")} sx={{fontSize: "11px", lineHeight: "13px"}} name="budget" key={index} value={option}>{option}</MenuItem>
           )
         })
       }
      </Select>
      </FormControl>
    </Box>





                     <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "5rem", sm: "6.75rem" },
              marginTop: "0px",
              height: "2.188rem",
            }}
          >
            Submit
          </Button>
</FormControl>
</Stack>

                     </Box>
    </div>
  )
}

export default BloodGroup