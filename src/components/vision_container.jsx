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
        "At CARA Systems, our vision is to be at the forefront of the 
global health and engineering revolution, recognized as a 
paragon of excellence and innovation. We aim to redefine the 
future of healthcare by consistently developing groundbreaking 
solutions that inspire, empower, and transform lives. Through 
unwavering dedication to research, sustainability, and ethical 
practices, we aspire to create a world where every individual 
has access to cutting-edge technology that enhances their health 
and well-being. We envision a future where the impact of 
CARA Systems resonates across the globe, fostering a culture 
of continuous improvement and pushing the boundaries of 
what's possible in health and engineering."
        </p>
        </div>
      <Box p={8}>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Vcard
              
                note={'Innovation'}
                note_description={'Unlocking the potential of dynamic 3-D reconstructions and simulations, our AI/ML-enhanced algorithms, accessible through a cloud-based software in a desktop setting, redefine efficiency and enhance diagnostic capabilities, epitomizing cutting-edge innovation in healthcare technology.'
                }
                height_custom={'100%'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Vcard
                note={'Impact'}
                note_description={'Empower physicians with data-driven analytics, enhancing their decision-making, saving time and resources, and ultimately elevating patient outcomes while reducing costs.' }
                height_custom={'100%'}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Vcard
              
                note={'Future'}
                note_description={
                  'The future of this technology promises to continue transforming healthcare, with the ultimate goal of revolutionizing pre-surgical planning and post-treatment monitoring. This innovation will not only push the boundaries of efficiency and diagnostic precision but also open new horizons for patient care.'
                  }
                height_custom={'100%'}
              />
            </Grid>
          </Grid>

      </Box>
    </Grid>
  );
};

export default VisionSection;
