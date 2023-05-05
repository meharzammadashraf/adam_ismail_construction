import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TextField,
  FormControl,
  Stack,
  Button,
  Autocomplete,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
];
const filterName = []
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {id: 1, name: "Pencil", rasheed: 50, srg: 32, ztml: 13, xy: 6},
  {id: 2, name: "Ball Point", rasheed: 30, srg: 12, ztml: 23, xy: 76},
  {id: 3, name: "Stapllers", rasheed: 90, srg: 2, ztml: 3, xy: 7},
  {id: 4, name: "Tape", rasheed: 3, srg: 1, ztml: 23, xy: 54},


  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Code() {
  const [searchQuery, setSearchQuery] = useState("");
rows.map((item)=>{
  filterName.push(item.name)
})
console.log("aaaaaaaaaaaaaaaaaaaaaaaaa",filterName);
  const handleSearchChange = (event, value) => {
    console.log("aaaaaaaaaaaaaaaaa", value);
    setSearchQuery(value);
  };

  const filteredCities = rows.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Stack
        display="flex"
        alignItems="end"
        marginTop="5rem"
        marginRight="40px"
      >
        <Autocomplete
          options={filterName}
          disableClearable
          renderInput={(params) => (
            
            <TextField
              sx={{ width: "200px" }}
              {...params}
              label="Search items"
              variant="outlined"
            />
          )}
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </Stack>

      <Stack
        width="100wh"
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
        {/* <ul>
          {filteredCities.map((city) => (
            <li key={city.name}>{city.Quantity}</li>
          ))}
        </ul> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell align="right">Rasheed</TableCell>
                <TableCell align="right">SRG</TableCell>
                <TableCell align="right">ZTML</TableCell>
                <TableCell align="right">XY</TableCell>
                <TableCell align="right">Total Items</TableCell>
                {/* <TableCell align="right"></TableCell> */}


              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCities.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.rasheed}</TableCell>
                  <TableCell align="right">{row.srg}</TableCell>
                  <TableCell align="right">{row.ztml}</TableCell>
                  <TableCell align="right">{row.xy}</TableCell>
                  <TableCell align="right">{row.rasheed + row.srg + row.ztml + row.xy}</TableCell>
              
                  <TableCell align="right">
                    <NavLink to={"/user/" + user.id}>View Detail</NavLink>
                  </TableCell>
                
                
                  {/* <h1>Dynamic Routing</h1>
			{users.map((user) => {
				return (
					<div key={user.id}>
						Click on the id to see the details :
						<NavLink to={"/user/" + user.id}> {user.id}</NavLink>
					</div>
				);
			})} */}
                
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
}

export default Code;
