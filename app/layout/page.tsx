'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../layout.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
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
    const scrollY = window.scrollY;
    if (scrollY > 100 && scrollY < 500) {
      setHidden(true); 
    } else if (scrollY >= 500) {
      setHidden(false); 
      setScrolled(true);
    } else {
      setHidden(false); 
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
    <AppBar
      className={`${styles.header03} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}
    >
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
          <Grid item xs={8} md={6} className={styles.navMenu}>
            <Grid display="flex" justifyContent="center">
              <Button component={Link} href="/" className={styles.menuLink}>
                Home
              </Button>
              <Button component={Link} href="/outsystems" className={styles.menuLink}>
                OutSystems
              </Button>
              <Button onClick={openServicesMenu} className={styles.menuLink}>
                Our Services<KeyboardArrowDownIcon />
              </Button>
              <Menu
                className={styles.submenu}
                anchorEl={servicesMenuAnchor}
                open={Boolean(servicesMenuAnchor)}
                onClose={closeServicesMenu}
              >
                <MenuItem component={Link} href="/outsystems" onClick={closeServicesMenu} className={styles.li}>
                  Low Code Development
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeServicesMenu} className={styles.li}>
                  Cloud Services
                </MenuItem>
                <MenuItem component={Link} href="/outsystems" onClick={closeServicesMenu} className={styles.li}>
                  Application Services
                </MenuItem>
                <MenuItem component={Link} href="/outsystems" onClick={closeServicesMenu} className={styles.li}>
                  Platform Services
                </MenuItem>
                <MenuItem component={Link} href="/outsystems" onClick={closeServicesMenu} className={styles.li}>
                  Data Analytics & AI
                </MenuItem>
                <MenuItem component={Link} href="/outsystems" onClick={closeServicesMenu} className={styles.li}>
                  IT Consulting
                </MenuItem>
              </Menu>
              <Button onClick={openIndustriesMenu} className={styles.menuLink}>
                Industries<KeyboardArrowDownIcon />
              </Button>
              <Menu sx={{minWidth:"500px"}}
                className={styles.submenu}
                anchorEl={industriesMenuAnchor}
                open={Boolean(industriesMenuAnchor)}
                onClose={closeIndustriesMenu}
              >
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Automotive
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Consumer Goods
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Financial Services
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Healthcare
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Logistics
                </MenuItem>
                <MenuItem component={Link} href="/our-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Real Estates
                </MenuItem>
              </Menu>
              <Button component={Link} href="/contact" className={styles.menuLink}>
                Contact
              </Button>
            </Grid>
          </Grid>

          {/* Contact Info and Search */}
          <Grid
            item
            xs={12}
            md={3}
            className={`${styles.contact} ${scrolled ? styles.scrolled : ''}`}
          >
            <Grid display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
              <Grid display="flex" alignItems="center">
                <ChatOutlinedIcon sx={{ fontSize: '40px', paddingRight: '5%' }} />
                <Typography variant="body2" ml={1}>
                  Phone:+91 7550042242
                  <br />
                  Email:info@solverines.com
                </Typography>
              </Grid>
              <Grid className={`${styles.serach} ${scrolled ? styles.scrolled : ''}`}>
                <SearchIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
