import { Fragment } from "react";
import styles from './contact.module.css'
import Image from "next/image";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Grid, Typography } from "@mui/material";

export default function Contact(){
  const datas = [
    {
      id:1,
      icon: <LocationOnOutlinedIcon />, 
      number: "01",
      title: "Office Address:",
      description:
        "S-16, 3rd Floor, Siddharth, 15th Main Road, ThiruViKa / SIDCO Industrial Estate, Guindy, Chennai 600032, Tamil Nadu, India.",
    },
    {
      id:2,
      icon: <LocalPhoneOutlinedIcon />,
      number: "02",
      title: "Call Us For Help:",
      description: "+91 7550042242",
    },
    {
      id:3,
      icon: <MailOutlinedIcon />,
      number: "03",
      title: "Mail info:",
      description: "info@solverines.com",
    },
  ];
  

    return(
        <Fragment>
        <section className={styles.section}
        style={{ backgroundImage: "url(/images/bg/contact_us.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}>
      <div className="container largeContainer">
        <div className="row">
          <div className="col-md-8">
          <div className={styles.row} style={{ display: "flex", alignItems: "center"}}>
  {/* Left Image Column */}
  <div className="col-md-2" style={{ textAlign: "center" }}>
    <Image
      src="/images/Service/icon_4.png"
      alt="Service Icon"
      width={80}
      height={80}
    />
  </div>

  {/* Right Text Column */}
  <div className={styles.colmd10}>
    <h1 style={{ color: "white", marginBottom: "0px",fontSize:"30px"}}>
    Let&apos;s Connect
    </h1>
    <h2 style={{ color: "white",marginTop:"0px"}}>
    Reach out for any inquiries, support, or collaboration opportunities.
    </h2>
  </div>
 </div>
</div>
</div>
</div>
</section>

<section  className={styles.section1}>
<Grid
  container
  spacing={2} // Adds spacing between items
>
  {datas.map((data, index) => (
    <Grid
      item
      key={data.id || index}
      xs={12} // 1 item per row for extra-small screens
      sm={6}  // 2 items per row for small screens
      md={6}  // 2 items per row for medium screens
      lg={4}  // 3 items per row for large screens
      sx={{
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box component="div" className={styles.iconbox}>
          <Box component="div" className={styles.icon}>
            {data.icon}
          </Box>
        </Box>
        <Box component="div" className={styles.dbox}>
          <Typography variant="h6" component="h3" className={styles.span1}>
            {data.title}
          </Typography>
          <Typography variant="body1" className={styles.span2}>
            {data.description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>

</section>

<section style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.430847514486!2d80.1737745!3d13.0606239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb8488ebaf8aeb26!2sSolverines+Technology+Solutions+Private+Limited!5e0!3m2!1sen!2sin!4v1512921867307"
          width="100%"
          height="410"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>

    <footer className={styles.footer}>
        <div className={`${styles.container} largeContainer`}>
          <div className="row"></div>
        </div>
      </footer>

      <section className={styles.copyright}>
        <div className={`${styles.container} largeContainer`}>
          <div className="row">
            <div className="col-md-6">
              <p>
                © Copyrights Solverines Technology Solutions Pvt. Ltd. 2024. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.copyMenu}>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Outsystems</a> </li>
                  <li><a href="">Contact</a> </li>
                  <li><a href="">About</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
</Fragment>
    );
}