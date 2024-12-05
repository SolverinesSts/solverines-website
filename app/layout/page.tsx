'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '../layout.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] = React.useState(null);
  const [industriesMenuAnchor, setIndustriesMenuAnchor] = React.useState(null);

  const openServicesMenu = (event: any) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const closeServicesMenu = () => {
    setServicesMenuAnchor(null);
  };

  const openIndustriesMenu = (event: any) => {
    setIndustriesMenuAnchor(event.currentTarget);
  };

  const closeIndustriesMenu = () => {
    setIndustriesMenuAnchor(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar className={`${styles.header03} ${scrolled ? styles.scrolled : ''}`}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          {/* Logo */}
          <Grid item xs={4} md={3}>
            <Link href="/">
              <img
                src={scrolled ? '/images/newlogo.png' : '/images/logonew.png'}
                alt="solverines"
                className={styles.transparentLogo}
                style={{ height: '30px' }}
              />
            </Link>
          </Grid>

          {/* Navigation Menu */}
          <Grid item xs={8} md={6} className={styles.navMenu} >
            <Box display="flex" justifyContent="center" >
              <Button component={Link} href="/" className={styles.menuLink}>
                Home
              </Button>
              <Button component={Link} href="/outsystems" className={styles.menuLink}>
                OutSystems
              </Button>
              <Button onClick={openServicesMenu}  className={styles.menuLink}>
                Our Services<KeyboardArrowDownIcon/>
              </Button>
              <Menu className={styles.submenu}
                anchorEl={servicesMenuAnchor}
                open={Boolean(servicesMenuAnchor)}
                onClose={closeServicesMenu}
             >
                <MenuItem component={Link}  href="/outsystems"  onClick={closeServicesMenu}> Low Code Development </MenuItem>
                <MenuItem component={Link} href="/our-services"  onClick={closeServicesMenu}>  Cloud Services</MenuItem>
                <MenuItem component={Link} href="/outsystems"  onClick={closeServicesMenu}> Application Services </MenuItem>
                <MenuItem component={Link} href="/outsystems"  onClick={closeServicesMenu}> Platform Services </MenuItem>
                <MenuItem component={Link} href="/outsystems"  onClick={closeServicesMenu}> Data Analytics & AI </MenuItem>
                <MenuItem component={Link} href="/outsystems"  onClick={closeServicesMenu}> IT Consulting </MenuItem>
              </Menu>
              <Button onClick={openIndustriesMenu} className={styles.menuLink}>
                Industries<KeyboardArrowDownIcon/>
              </Button>
              <Menu className={styles.submenu}
                anchorEl={industriesMenuAnchor}
                open={Boolean(industriesMenuAnchor)}
                onClose={closeIndustriesMenu}
              >
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Automotive</MenuItem>
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Consumer Goods</MenuItem>
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Financial Services</MenuItem>
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Healthcare</MenuItem>
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Logistics</MenuItem>
                <MenuItem  component={Link} href="/outsystems"  onClick={closeServicesMenu}>Real Estates</MenuItem>
              </Menu>
              <Button component={Link} href="/contact" className={styles.menuLink}>
                Contact
              </Button>
            </Box>
          </Grid>

          {/* Contact Info and Search */}
          <Grid item xs={12} md={3}  className={`${styles.contact} ${scrolled ? styles.scrolled : ''}`}>
            <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
              <Box display="flex" alignItems="center" >
                <ChatOutlinedIcon sx={{fontSize:"40px",paddingRight:"5%"}} />
                <Typography variant="body2" ml={1}>
                 Phone:+91 7550042242
                 <br></br>
                 Email:info@solverines.com
                </Typography>
              </Box>
              <Box className={`${styles.serach} ${scrolled ? styles.scrolled : ''}`}>
                <SearchIcon  />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
