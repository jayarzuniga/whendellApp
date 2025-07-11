// Sidebar.jsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { label: 'Patients', icon: <PeopleIcon />, path: '/patients' },
    { label: 'Doctors', icon: <LocalHospitalIcon />, path: '/doctors' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #ddd',
        },
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src="/logo192.png" // Replace with your logo path
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
          <Typography variant="h6" fontWeight="bold" color="primary">
            HealthApp
          </Typography>
        </Box>
      </Toolbar>

      <Divider />

      <Box sx={{ overflow: 'auto' }}>
        <List>
          {navItems.map(({ label, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <ListItem
                button
                key={label}
                component={Link}
                to={path}
                sx={{
                  backgroundColor: isActive ? '#e0e0e0' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#ddd',
                  },
                }}
              >
                <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'inherit' }}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'primary.main' : 'inherit',
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
