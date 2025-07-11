// pages/Doctors.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Doctors = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    licenseNumber: '',
    firstName: '',
    lastName: '',
    expiration: '',
    status: 'Active',
  });

  const [doctors, setDoctors] = useState([
    {
      licenseNumber: 'PHL-12345',
      firstName: 'Jane',
      lastName: 'Smith',
      expiration: '2026-04-30',
      status: 'Active',
    },
    {
      licenseNumber: 'PHL-67890',
      firstName: 'Mark',
      lastName: 'Lee',
      expiration: '2023-11-15',
      status: 'Expired',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const today = new Date();
    const expDate = new Date(form.expiration);
    const status = expDate > today ? 'Active' : 'Expired';

    setDoctors((prev) => [
      ...prev,
      { ...form, status },
    ]);

    setOpen(false);
    setForm({
      licenseNumber: '',
      firstName: '',
      lastName: '',
      expiration: '',
      status: 'Active',
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Doctor Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Doctor
        </Button>
      </Box>

      {/* Doctor Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>License Number</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>License Expiration</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doc, idx) => (
              <TableRow key={idx}>
                <TableCell>{doc.licenseNumber}</TableCell>
                <TableCell>{doc.firstName}</TableCell>
                <TableCell>{doc.lastName}</TableCell>
                <TableCell>{doc.expiration}</TableCell>
                <TableCell>
                  <Chip
                    label={doc.status}
                    color={doc.status === 'Active' ? 'success' : 'error'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Doctor Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Doctor</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="licenseNumber"
                label="License Number"
                value={form.licenseNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="firstName"
                label="First Name"
                value={form.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastName"
                label="Last Name"
                value={form.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="expiration"
                label="License Expiration"
                type="date"
                value={form.expiration}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Doctors;
