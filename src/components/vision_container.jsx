import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./component_css/vision_container.css";
import Box from "@mui/material/Box";
import Vcard from "./cards_vision";

const VisionSection = () => {
  return (
    <Grid container className="vision-section">
      <div classname= "vision-head-block">
        <h1 className="vision-title">
          Vision
        </h1>

        <p className="vision-subhead">
          We provide efficient solutions for diagnostic procedures through Non-Invasive methods.
        </p>
        </div>
      <Box p={8}>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Vcard
              
                note={'Innovative'}
                note_description={
                  'At CARA, we envision a world where innovation knows no bounds. We are dedicated to empowering individuals and businesses to create, explore, and turn their ideas into reality.'
                }
                height_custom={'40vh'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Vcard
                note={'Impact'}
                note_description={
                  "Our vision extends beyond technology. We are committed to making a sustainable impact on society and the environment. We strive to improve lives and protect our planet for future generations."
                }
                height_custom={'40vh'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Vcard
              
                note={'Future'}
                note_description={
                  'At CARA, we envision a world where innovation knows no bounds. We are dedicated to empowering individuals and businesses to create, explore, and turn their ideas into reality.'
                }
                height_custom={'40vh'}
              />
            </Grid>
          </Grid>

      </Box>
    </Grid>
  );
};

export default VisionSection;
