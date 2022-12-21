import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const CatList = () => {
  const [data, setData] = useState([]);
  const selectData = useSelector((state) => state.loanReducer.cats);
  useEffect(() => {
    setData(selectData);
  }, [selectData]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={12}>
              <Button variant="contained">{item}</Button>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
