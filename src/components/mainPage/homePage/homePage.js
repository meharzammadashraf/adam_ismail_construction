import React from "react";
import "./homePage.css";
import Button from "@mui/material/Button";
import {FormControl, Select} from "@mui/material";
import { AppBar, Toolbar, Typography, MenuItem, ThemeProvider, createTheme, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Mobilemenu from "../../mobileMenu/mobilemenu";
function Navbar() {
  const [bloodGroup, setBloodGroup] = React.useState("All")
  return (
    <div>
      <AppBar sx={{backgroundColor:"white"}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          {/* <Button color="primary">
            <Link to="/home" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </Button> */}
          {/* <Button color="secondary">
            <Link to="/home/code" style={{ textDecoration: "none" }}>
              All
            </Link>
          </Button>
          <Button color="secondary">
            <Link to="/home/staffcode" style={{ textDecoration: "none" }}>
              Rasheed
            </Link>
          </Button>
          <Button color="secondary">
            <Link to="/home/bloodgroup" style={{ textDecoration: "none" }}>
              B
            </Link>
          </Button> */}
          <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>  
                      
                      <Typography variant="subtitle1">
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
         ["All", "Rasheed", "SRG", "ZTML", "XY"].map((option, index)=>{
           return(
             <MenuItem onChange={()=>console.log("dddddddddddddddddd")} sx={{fontSize: "11px", lineHeight: "13px"}} name="budget" key={index} value={option}>{option}</MenuItem>
           )
         })
       }
      </Select>
      </FormControl>
    </Box>
    <Button variant="contained" color="primary">Add New Site</Button>
        </Toolbar>
      </AppBar>
          {/* <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Mobilemenu />
        </Box> */}
      <Outlet />
        {/* <Button variant="contained" color= "primary">vvvvvvv</Button> */}
    </div>
  );
}

export default Navbar;
