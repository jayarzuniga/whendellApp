// pages/Dashboard.jsx
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import ErrorIcon from '@mui/icons-material/Error';

const mockDoctorData = [
  { licenseNumber: 'PHL-12345', firstName: 'Jane', lastName: 'Smith', expiration: '2026-04-30' },
  { licenseNumber: 'PHL-67890', firstName: 'Mark', lastName: 'Lee', expiration: '2023-11-15' },
  { licenseNumber: 'PHL-11122', firstName: 'Clara', lastName: 'Jones', expiration: '2025-12-20' },
];

const mockPatientData = {
  MRN001: [],
  MRN002: [],
  MRN003: [],
  MRN004: [],
};

const getLicenseStatusCounts = () => {
  const today = new Date();
  let active = 0;
  let expired = 0;
  mockDoctorData.forEach((doc) => {
    const exp = new Date(doc.expiration);
    if (exp > today) active++;
    else expired++;
  });
  return { active, expired };
};

const Dashboard = () => {
  const totalDoctors = mockDoctorData.length;
  const totalPatients = Object.keys(mockPatientData).length;
  const { active, expired } = getLicenseStatusCounts();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Total Doctors */}
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
              <LocalHospitalIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Total Doctors</Typography>
              <Typography variant="h5">{totalDoctors}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Active Licenses */}
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
              <VerifiedIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Active Licenses</Typography>
              <Typography variant="h5">{active}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Expired Licenses */}
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'error.main', mr: 2 }}>
              <ErrorIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Expired Licenses</Typography>
              <Typography variant="h5">{expired}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Patients */}
        <Grid item xs={12} md={3}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
              <PeopleIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Total Patients</Typography>
              <Typography variant="h5">{totalPatients}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Optional: Add chart here */}
      {/* You can integrate recharts or chart.js later */}
    </Box>
  );
};

export default Dashboard;
