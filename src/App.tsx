import React from "react";
import EditorComponent from "./components/editor.js";
import { Box, Typography, Button, Divider, Grid} from "@mui/material";

function App() {

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} marginX={"5%"} marginY={"2%"}>
        <Typography variant="h5">Report ABC</Typography>
        <Box display={"flex"}>
          <Button>Export</Button>
          <Button>Share</Button>
        </Box>
      </Box>
      <Box  marginX={"5%"}>
        <Divider/>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box padding={"0 10%"} margin={"5%"} border={"1px solid green"}>
              <EditorComponent/>
            </Box>
          </Grid>
          <Grid item xs={4}>
            xs=4
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
