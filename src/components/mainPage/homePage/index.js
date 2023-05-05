import { Button, Box, Stack } from "@mui/material";
import Navbar from "./homePage";
import { Link } from "react-router-dom";

const Index = ()=>{
return(
    <>
        <Navbar />
        <Box mt="5rem" display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Stack
        width="20rem"
        boxShadow="3"
        backgroundColor="#F7F7F7"
        borderRadius="10px"
        padding={{ xs: "1rem", md: "2.688rem" }}
        // margin={{ xs: "0px 1rem", md: "0px 3.75rem" }}
        // height="24.375rem"
        justifyContent="space-around"
        id="modal-modal-description"
        component="form"
      >
        
        <Link to="/home/code" style={{textDecoration: "none", color: "white"}}><Button sx={{margin: "10px", width: "94%"}} variant="contained" color="primary">  Store </Button></Link>
        <Button sx={{margin: "10px"}} variant="contained" color="primary">Material</Button>
        <Button sx={{margin: "10px"}} variant="contained" color="primary">Office</Button>
        <Button sx={{margin: "10px"}} variant="contained" color="primary">Sanitary</Button>

</Stack>

                     </Box>
    </>
)
}
export default Index;