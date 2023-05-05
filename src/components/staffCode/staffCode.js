import React from 'react'
import { Box, Typography, TextField, FormControl, Stack, Button } from '@mui/material'

function StaffCode() {
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
                     <Button

            variant="contained"
            color="primary"
            sx={{
              width: { xs: "5rem", sm: "6.75rem" },
              my: "6px",
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

export default StaffCode