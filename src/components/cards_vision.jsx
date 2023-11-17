import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import './component_css/vision_container.css'

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 0 10px rgba(199, 199, 204, 0.5)',
  borderRadius: '10px',
  // height: '35vh', // Set height to 100% to adjust for the content
  backgroundColor: 'grey',
  color: 'white',
}));

const VisionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 'bold',
}));

const VisionContent = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
}));

const ContentWrapper = styled(CardContent)({
  // Set the height of the content area
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Adjust the content alignment
});

export default function Vcard({ note, note_description, height_custom }) {
  return (
    <div>
      <StyledCard className='vcard-contianer-styledcard' >
        <ContentWrapper>
          <VisionSubtitle variant="h1" component="div">
            {note}
          </VisionSubtitle>
          <VisionContent variant="body2">
            <br /> {note_description}
          </VisionContent>
        </ContentWrapper>
      </StyledCard>
    </div>
  );
}
