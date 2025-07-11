// components/PatientRecords.jsx
import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import MRNDetails from './MRNDetails';

const mockData = {
  MRN001: [
    {
      date: '2024-05-01',
      history: 'Fever, cough',
      doctor: 'Dr. Jane Smith',
      reportId: 'REP-1001',
      prescription: 'Paracetamol 500mg for 5 days',
    },
    {
      date: '2024-06-15',
      history: 'Checkup after flu',
      doctor: 'Dr. Mark Lee',
      reportId: 'REP-1002',
      prescription: 'Multivitamins',
    },
  ],
  MRN002: [
    {
      date: '2024-06-10',
      history: 'Sprained ankle',
      doctor: 'Dr. Alice Brown',
      reportId: 'REP-2001',
      prescription: 'Ibuprofen + rest',
    },
  ],
};

const PatientRecords = () => {
  const [selectedMRN, setSelectedMRN] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar MRN List */}
      <Box
        sx={{
          width: 250,
          borderRight: '1px solid #ddd',
          backgroundColor: '#f8f9fa',
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Patient MRNs
        </Typography>
        <Divider />
        <List>
          {Object.keys(mockData).map((mrn) => (
            <ListItem button key={mrn} onClick={() => setSelectedMRN(mrn)}>
              <ListItemText primary={mrn} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* MRN Detail Table */}
      <Box sx={{ flex: 1, p: 3 }}>
        {selectedMRN ? (
          <>
            <Typography variant="h5" gutterBottom>
              Medical Records for {selectedMRN}
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: '#f1f1f1' }}>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Medical History</TableCell>
                    <TableCell>Attended Doctor</TableCell>
                    <TableCell>Medical Report ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockData[selectedMRN].map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.history}</TableCell>
                      <TableCell>{record.doctor}</TableCell>
                      <TableCell
                        sx={{ color: 'primary.main', cursor: 'pointer' }}
                        onClick={() => setSelectedReport({ ...record, mrn: selectedMRN })}
                      >
                        {record.reportId}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Typography variant="h6" sx={{ mt: 3 }}>
            Select an MRN to view records.
          </Typography>
        )}
      </Box>

      {/* Report Detail Modal */}
      <Dialog open={!!selectedReport} onClose={() => setSelectedReport(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Medical Report Details</DialogTitle>
        <DialogContent dividers>
          {selectedReport && (
            <MRNDetails report={selectedReport} />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PatientRecords;
