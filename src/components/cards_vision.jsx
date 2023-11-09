import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import "./component_css/vision_container.css"; 
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Customize the shadow effect
    borderRadius: '10px', // Apply border-radius for a softer look
    height: (props) => props.height_custom,
  }));
  
  const VisionSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
  }));
  
  const VisionContent = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
  }));
  export default function Vcard({ note, note_description, height_custom }) {
    return (
      <div>
        <StyledCard height_custom={height_custom}>
          <CardContent>
            <VisionSubtitle variant="h5" component="div">
              {note}
            </VisionSubtitle>
            <VisionContent variant="body2">
              <br/> {note_description}
            </VisionContent>
          </CardContent>
        </StyledCard>
      </div>
    );
  }