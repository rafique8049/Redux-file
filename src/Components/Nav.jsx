import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/home")}
              >
                Home
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/accountSummery")}
              >
                AccountSummery
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/Cards")}
              >
                Cards
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/loans")}
              >
                Loans
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
