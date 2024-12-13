import { Fragment } from "react";
import styles from "./copyright.module.css";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Divider from '@mui/material/Divider';
import { Box, Grid, List, ListItem, Typography } from "@mui/material";

export default function Copyrights(){
    return(
        <Fragment >
          <Grid className={styles.footer}>
          <Grid className={styles.footrow}>
            <Box component="div" className={styles.aboutWidget}>
              <Typography component="h1">Are you looking for a passionate and reliable IT solutions partner?</Typography>
              <Box component="div" className={styles.phone}>
                <Typography className={styles.ficon}> <CallOutlinedIcon sx={{color:"rgb(116,40,148) ",fontSize:"45px"}} /></Typography>
                <Typography className={styles.fphn}> +91 7550042242</Typography>
              </Box>
              </Box>
          </Grid >

            <Divider variant="middle"  />

          <Grid className={styles.copyrightrow} container rowSpacing={1}>
           <Grid xs={12} sm={12} md={6} className={styles.left} >
           <Box component="div" className="col-md-6">
              <Typography component="p" className={styles.copyText}>
                © Copyrights Solverines Technology Solutions Pvt. Ltd. 2024. All rights reserved.
              </Typography>
            </Box>
           </Grid>
              <Grid xs={12} sm={12} md={6} className={styles.right}>
                <Box component="div" className={styles.copyMenu}>
                <List component="ul">
                  <ListItem component="li"><a href="">Home</a></ListItem>
                  <ListItem component="li"><a href="">Outsystems</a></ListItem>
                  <ListItem component="li"><a href="">Contact</a></ListItem>
                  <ListItem component="li"><a href="">About</a></ListItem>
                </List>
                </Box>
              </Grid>
          </Grid>
          </Grid>
        </Fragment>
    );
}