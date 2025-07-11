// components/MRNDetails.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const MRNDetails = ({ report }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography><strong>Date:</strong> {report.date}</Typography>
      <Typography><strong>MRN:</strong> {report.mrn}</Typography>
      <Typography><strong>Doctor:</strong> {report.doctor}</Typography>
      <Typography><strong>Medicine Prescription:</strong></Typography>
      <Box
        sx={{
          border: '1px solid #ccc',
          p: 2,
          borderRadius: 1,
          backgroundColor: '#f9f9f9',
        }}
      >
        {report.prescription}
      </Box>
    </Box>
  );
};

export default MRNDetails;
