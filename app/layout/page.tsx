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
import { IconButton,Switch,styled } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import MenuIcon from '@mui/icons-material/Menu';



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 22.5,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(4px)',
    '&.Mui-checked': {
      color: 'black',
      backgroundColor: '#fff',
      transform: 'translateX(18px)',
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));


export default function Layout() {


  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] =useState<null | HTMLElement>(null);
  const [industriesMenuAnchor, setIndustriesMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuIconAnchor, setMenuIconAnchor] = useState<null | HTMLElement>(null);

  const openServicesMenu = (event:React.MouseEvent<HTMLButtonElement>) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const closeServicesMenu = () => {
    setServicesMenuAnchor(null);
  };

  const openIndustriesMenu = (event:React.MouseEvent<HTMLButtonElement>) => {
    setIndustriesMenuAnchor(event.currentTarget);
  };

  const closeIndustriesMenu = () => {
    setIndustriesMenuAnchor(null);
  };

  const openMenuIcon = (event:React.MouseEvent<HTMLButtonElement>) => {
    setMenuIconAnchor(event.currentTarget);
  };

  const closeMenuIcon = () => {
    setMenuIconAnchor(null);
  };


  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100 && scrollY < 500) {
      setHidden(true); 
    } else if (scrollY >= 500) {
      setHidden(false); 
      setScrolled(true);
      setShowScrollTop(scrollY > window.innerHeight);
    } else {
      setHidden(false); 
      setScrolled(false);
    }
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
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
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeServicesMenu} className={styles.li}>
                  Cloud Services
                </MenuItem>
                <MenuItem component={Link} href="/our-services/application-services" onClick={closeServicesMenu} className={styles.li}>
                  Application Services
                </MenuItem>
                <MenuItem component={Link} href="/our-services/platform-services" onClick={closeServicesMenu} className={styles.li}>
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
                <MenuItem component={Link} href="/industries/automotive" onClick={closeIndustriesMenu } className={styles.li}>
                  Automotive
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Consumer Goods
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Financial Services
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Healthcare
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeIndustriesMenu } className={styles.li}>
                  Logistics
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeIndustriesMenu } className={styles.li}>
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
              <Grid display="flex" alignItems="center" >
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
        {/* <Grid ><MenuIcon /></Grid> */}
        <Button onClick={openMenuIcon} className={styles.menuicon} >
          <MenuIcon />
              </Button>
              <Menu 
                className={styles.submenu}
                anchorEl={menuIconAnchor}
                open={Boolean(menuIconAnchor)}
                onClose={closeMenuIcon}
              >
                <MenuItem component={Link} href="/" onClick={closeMenuIcon } className={styles.iconli}>
                 Home
                </MenuItem>
                <MenuItem component={Link} href="/outsystems" onClick={closeMenuIcon } className={styles.iconli}>
                OutSystems
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeMenuIcon } className={styles.iconli}>
                Our Services
                </MenuItem>
                <MenuItem component={Link} href="/our-services/cloud-services" onClick={closeMenuIcon} className={styles.iconli}>
                Industries
                </MenuItem>
                <MenuItem component={Link} href="/contact" onClick={closeMenuIcon } className={styles.iconli}>
                Contact
                </MenuItem>
              </Menu>
      </Toolbar>
    </AppBar>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <IconButton
              onClick={scrollToTop}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: ' rgb(116,40,148)',
                color: '#fff',
                zIndex: 1000,
              }}
            >
              <KeyboardDoubleArrowUpIcon />
            </IconButton>
          )} 
        </>
  );
}
