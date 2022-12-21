import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { CatList } from "./Home/CatList";
import { HomeContent } from "./Home/HomeContent";

export const Home = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <CatList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
          <Card>
            <CardContent>
              <HomeContent />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
