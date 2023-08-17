import { useState, useEffect } from "react";

import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MDButton from "components/MDButton";

import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";

const prac = [
  {
    location_name: "Taj Hotel",
    add_line1: "999",
    add_line2: "000",
    state: "Arunchal Pradesh",
    city: "Kanpur",
    pincode: 270611,
  },
  {
    location_name: "PG",
    add_line1: "999",
    add_line2: "000",
    state: "Andra Pradesh",
    city: "rajpur",
    pincode: 270611,
  },
];

const Extrawork = (props: any) => {
  //for dialog box
  const { openUpdate, setOpenupdate } = props;
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  const [places, setPlaces] = useState({
    location_name: "Rock abhi",
    add_line1: "999",
    add_line2: "000",
    state: "Andra Pradesh",
    city: "rajpur",
    pincode: 270611,
  }); // default value for autocomplete

  // const fetchLocations = async () => {
  //   try {
  //     const response = await axios.get("http://10.0.20.131:8000/worklocation");
  //     console.log(response.data);

  //   } catch (error) {
  //     console.error("Error fetching tasks:", error);
  //   }
  // };

  console.log(places, "place");

  // useEffect(() => {
  //   fetchLocations();
  // }, []);
  return (
    <MDBox ml={5} mt={5}>
      <Grid container spacing={2}>
        <Grid sm={12}>
          <Autocomplete
            options={prac}
            getOptionLabel={(place) => place.location_name}
            renderInput={(params) => <TextField {...params} />}
            value={places}
            onChange={(event, newplaces) => {
              setPlaces(newplaces);
              console.log(newplaces);
            }}
          />
        </Grid>

        <Grid sm={12}>
          <MDBox mt={5} mb={2} ml={2}>
            <div style={{ fontSize: "15px" }}>
              <strong>{places?.location_name}</strong>
              <p>{places?.add_line1}</p>
              <p>{places?.add_line2}</p>
              <p>
                <span>{places?.city}</span>
                <span> {places?.state}</span>
                <span> {places?.pincode}</span>
              </p>
            </div>
          </MDBox>
        </Grid>
        <Grid mt={3}>
          <MDButton
            color="info"
            variant="contained"
            type="submit"
            onClick={() => {
              handleCloseupdate();
            }}
          >
            Save
          </MDButton>
        </Grid>
        <Grid ml={2} mt={3}>
          <MDButton
            color="primary"
            variant="contained"
            onClick={() => {
              handleCloseupdate();
            }}
          >
            Cancel
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  );
};
export default Extrawork;
