import Grid from "@mui/material/Grid";
import Vcard from "./cards_vision";
import './component_css/partners.css';

const Partners = () => {
  return (
    <Grid container spacing={6} className="partners-block">
      <Grid item xs={6}>
        <Vcard
          height_custom={'60vh'}
          note={'Our Partners'}
          note_description={'At CARA Systems Inc., we are proud to collaborate with a diverse group of partners who share our vision and values. Together, we strive to deliver excellence and innovation in everything we do. Our partners contribute to our success, and we are honored to work alongside them.'}
        />
      </Grid>
      <Grid container spacing={8} sm={6} className="partner-logos">
        <Grid item xs={6} sm={3}>
          logo1
        </Grid>
        <Grid item xs={6} sm={3}>
          logo2
        </Grid>
        <Grid item xs={6} sm={3}>
          logo3
        </Grid>
        <Grid item xs={6} sm={3}>
          logo4
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Partners;
