import { Fragment } from "react";
import styles from './contact.module.css'
import Image from "next/image";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Typography } from "@mui/material";

export default function Contact(){
  const datas = [
    {
      icon: <LocationOnOutlinedIcon />, 
      number: "01",
      title: "Office Address:",
      description:
        "S-16, 3rd Floor, Siddharth, 15th Main Road, ThiruViKa / SIDCO Industrial Estate, Guindy, Chennai 600032, Tamil Nadu, India.",
    },
    {
      icon: <LocalPhoneOutlinedIcon />,
      number: "02",
      title: "Call Us For Help:",
      description: "+91 7550042242",
    },
    {
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
          <div className="row" style={{ display: "flex", alignItems: "center",paddingTop:"5%" }}>
  {/* Left Image Column */}
  <div className="col-md-2" style={{ textAlign: "center" }}>
    <Image
      src="/images/service/icon_4.png"
      alt="Service Icon"
      width={70}
      height={60}
      style={{ width: "100%", height: "auto" }}
    />
  </div>

  {/* Right Text Column */}
  <div className="col-md-10" style={{marginLeft:"2%"}}>
    <h1 style={{ color: "white", marginBottom: "0px",fontSize:"40px" }}>
    Let's Connect
    </h1>
    <h2 style={{ color: "white", fontWeight: 400 }}>
    Reach out for any inquiries, support, or collaboration opportunities.
    </h2>
  </div>
 </div>
</div>
</div>
</div>
</section>

<Box component="section" className={styles.section1}>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",}}>
        {/* Office Address */}
        {datas.map((data, index) => (
        <Box className={styles.box}
          sx={{
            flex: "1",  
            borderRadius: "8px",
            textAlign: "center",
          }}>

          <Box
            sx={{
              display: "flex"}}>
          <Box className={styles.iconbox} >
          <Box className={styles.icon}>
           {data.icon}
          </Box>
          </Box>
          <Box className={styles.dbox} >
          <Typography variant="h6" component="h3" className={styles.span1}>
            {data.title}
          </Typography>
          <Typography variant="body1" className={styles.span2}>
           {data.description}
          </Typography>
            </Box>
          </Box>
          
        </Box>
        ))}
      </Box>
</Box>

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