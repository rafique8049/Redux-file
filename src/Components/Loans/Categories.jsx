import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Categories = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    setData([...data, cat]);
  };

  const handleSubmit = () => {
    const type = "addcats";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            onChange={(e) => setCat(e.target.value)}
            fullWidth
            label="Add categories"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={3}>
          <Button onClick={handleAdd} fullWidth variant="contained">
            Add
          </Button>
        </Grid>

        {data.map((item) => (
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "pink" }}>
              <CardContent>{item}</CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={3}>
          <Button
            sx={{ height: 55 }}
            onClick={handleSubmit}
            variant="contained"
            color="success"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
