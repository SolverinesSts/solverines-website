"use client"
import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./application.module.css";
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Box, Grid, Typography } from "@mui/material";

export default function ApplicationServices(){
  const customBuild=[
    {
      imgSrc: "/images/bg/flexible.png",
      hover: "/images/bg/flexiblewhite.png",
      title: "Full Customization",
      description:
        "Build applications that are specifically designed to meet the needs of your business and industry.",
    },
    {
      imgSrc: "/images/bg/data-processing.png",
      hover: "/images/bg/data-processingwhite.png",
      title: "Scalability",
      description:
        "Create applications that can grow alongside your business, ensuring long-term value and reducing future costs.",
    },
    {
      imgSrc: "/images/bg/skill-enhancement.png",
      hover: "/images/bg/skill-enhancementwhite.png",
      title: "Enhanced Efficiency",
      description:
        "Automate processes, reduce manual work, and improve overall productivity with applications designed for your unique workflows.",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const services = [
        {
          title: "Custom Application Development",
          description:
            "We design, develop, and deploy tailor-made applications that align perfectly with your business goals. From enterprise software to mobile apps, our solutions are scalable, secure, and built for the future.",
          icon: "icon-local_1",
        },
        {
          title: "Application Modernization",
          description:
            "Legacy systems holding your business back? We can help you modernize your outdated applications, transforming them into high-performing, cloud-ready solutions that integrate seamlessly with modern technologies.",
          icon: "icon-local_1",
        },
        {
          title: "Mobile Application Development",
          description:
            "Deliver a seamless mobile experience to your customers or employees with our end-to-end mobile app development services. We build cross-platform mobile applications designed for performance, usability, and scalability.",
          icon: "icon-local_1",
        },
        {
          title: "Application Integration",
          description:
            "Ensure all your business-critical applications communicate and work together effectively. We provide robust integration solutions to connect disparate systems, enabling smooth data flow and operational efficiency.",
          icon: "icon-local_1",
        },
        {
          title: "Application Maintenance & Support",
          description:
            "Keep your applications running smoothly with our proactive maintenance and support services. We monitor performance, resolve issues, and ensure your applications are always up-to-date with the latest features and security enhancements.",
          icon: "icon-local_1",
        },
        {
          title: "UI/UX Design & Development",
          description:
            "We believe great applications are not just functional but also intuitive and engaging. Our UI/UX experts create user-friendly interfaces that deliver exceptional experiences across all devices.",
          icon: "icon-local_1",
        },
      ];

      const accordionItems = [
        {
          id: '1',
          title: 'Tailored Solutions for Your Business Needs',
          description:
            'Every business is unique, and so are its challenges. We take the time to understand your requirements, designing customized enterprise application solutions that align perfectly with your objectives and operational needs.',
        },
        {
          id: '2',
          title: 'Expertise Across Leading Technologies',
          description:
            'With years of experience and expertise in ERP, CRM, SCM, and other critical enterprise platforms, our team helps you select and implement the right technologies for your organization. From cloud-based systems to on-premise solutions, we’ve got you covered.',
        },
        {
          id: '3',
          title: 'Seamless Integration Across Systems',
          description:
            'We ensure your enterprise applications work harmoniously with your existing systems and processes. Our seamless integration services help you bridge data silos, optimize workflows, and create a unified technology ecosystem for enhanced efficiency.',
        },
        {
          id: '4',
          title: 'Scalable Solutions for Growth',
          description:
            'As your business grows, your enterprise applications need to keep pace. We build scalable solutions that can adapt to your evolving needs, ensuring you stay ahead of the curve without overhauling your infrastructure.',
        },
        {
          id: '5',
          title: 'Security & Compliance',
          description:
            'We prioritize the security of your enterprise applications and data. With robust encryption, access controls, and compliance with industry standards, we help safeguard your sensitive information and ensure your systems remain secure and compliant.',
        },
      ];

      const [activeCardId, setActiveCardId] = useState<string | null>(null);
      //setActiveCardId((prevActiveId) => (prevActiveId === null ? 1 : null))
      const handleCardClick = (id : string) => {
        setActiveCardId((prevActiveId) => (prevActiveId === id ? "null" : id));
      };

  const [counters, setCounters] = useState([10, 100, 70]); 
  const sectionRef = useRef(null); 
  const hasAnimated = useRef(false);

  const targetValues = [10, 100, 70]; 

  // Function to handle the counting animation
  const animateCounters = () => {
    const duration = 2000; 
    const startTime = performance.now();

    const update = (currentTime:number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); 

      setCounters(targetValues.map((target) => Math.floor(target * progress)));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; 
          animateCounters();
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    return(
     <Fragment>
       <title>Our-services</title>
       <meta name="description" content='Our-services page description'/>
        <section className={styles.section}
        style={{ backgroundImage: "url(/images/bg/application_services.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
         }}>
      <div className="container largeContainer">
        <div className="row">
          <div className="col-md-8">
          <div className={styles.srow} style={{ display: "flex", alignItems: "center"}}>
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
  <div className={styles.colmd10} >
    <h1 style={{ color: "white", marginBottom: "0px" ,fontSize:"30px"}}>
      Enterprise Application Services
    </h1>
    <h2 style={{ color: "white",marginTop:"0px" }}>
      Custom-Built Applications for Your Business Needs.
    </h2>
  </div>
  </div>

  </div>
  </div>
  </div>
 </section>

    <section className={styles.section1}>
      <Grid className="container largeContainer">
        <Grid container rowSpacing={1} className={styles.s1row} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          {/* Left Content Section */}
          <Grid xs={12} sm={12} md={6}>
          <Box component="div" className={styles.s1left} style={{ flex: "1 1 50%" }}>
            <h1 className={styles.s1secTitle}>Custom-Built Applications</h1>
            <p className={styles.secDesc}>
              In today’s fast-paced digital world, applications are the backbone of modern business operations. Whether you&apos;re looking
               to enhance customer experiences, streamline operations, or gain a competitive edge, having the right applications in place is essential. At Solverines,
               we offer a comprehensive range of application services designed to meet the unique demands of your business and industry.
            </p>
            <Box component="div">
            {customBuild.map((item, index) => (
             <Box component="div" className={styles.s2box} key={index}
               onMouseEnter={() => setHoveredIndex(index)}
               onMouseLeave={() => setHoveredIndex(null)}>
               <Box component="div" className={styles.s2img}>
                 <Image 
                 //src={item.imgSrc} 
                 src={hoveredIndex === index ? item.hover : item.imgSrc}
                 alt="Service Icon"
                  width={50} height={50} />
               </Box>
               <Box component="div">
                 <h3>{item.title}</h3>
                 <p>{item.description}</p>
               </Box>
             </Box>
           ))}
       
          </Box>
          </Box>
          </Grid>

          {/* Right Image Section */}
          <Grid xs={12} sm={12} md={6}>
          <Box component="div"
            className={styles.s1right} 
            style={{
              flex: "0 0 50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems:"flex-start"
            }}
          >
            <Image
              src="/images/bg/AppService.png"
              alt="Application Services"
              width={500}
              height={500}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          </Grid>
        </Grid>
      </Grid>
    </section>

    <section className={styles.section2}>
    <Box component="div" sx={{ py: 5, backgroundColor: '#eeedf0' }}>
      <Box component="div" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ color: 'rgb(116,40,148)', fontWeight: 'bold' }}>
          Our Application Services Offerings
        </Typography>
      </Box>

      <Grid container spacing={2} gap="20px" className={styles.s2row}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3.5}  className={styles.card} 
          sx={{
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
            transition: 'transform 0.3s',
            // border:'1px solid black',
            '&:hover': {
              transform: 'scale(1.02)',
              backgroundColor: 'rgb(116,40,148)',
              color: 'white',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
            },
          }}
          >
              <Box component="div"
                sx={{
                  width: 90,
                  height: 90,
                  mx: 'auto',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid rgb(240, 166, 166)',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    border: 'none',
                  },
                }}
              >
                <Image
                  src="/images/bg/newboard.png"
                  alt="Service Icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', m: 4 ,my:1 }}>
                <a href="#" style={{ textDecoration: 'none'}} className={styles.s2title}>
                  {service.title}
                </a>
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgb(82, 84, 82)', m: 4 ,my:1,lineHeight:"1.8"}}>
                {service.description}
              </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
    </section>

    <section  className={`${styles.section3} ${styles.abcs01}`} ref={sectionRef}>
    <div className={`${styles.container} ${styles.largeContainer}`}>
        <div className={`${styles.row} row`} style={{ display: 'flex' }}>
          {/* Left Column: 70% */}
          <div style={{ flex: '70%', paddingRight: '15px' }}>
            <div className={styles.subTitle}>
              <span className={styles.bleft}></span>Why Choose Our Enterprise Application Services?
            </div>
            <p className={styles.secDesc}>
              At Solverines, we understand that modern businesses need robust, scalable, and integrated enterprise
              applications to stay competitive in a fast-paced digital environment. Our enterprise application services
              are designed to streamline your operations, enhance productivity, and support your long-term business
              goals.
            </p>
            <h2>Here’s why businesses trust us:</h2>
            <div className={`${styles.accordion} ${styles.quAccordion}`} id="quAccordion01">
              {/* Accordion Items */}
              {accordionItems.map(({ id, title, description }) => (
                <div className={styles.s3card} key={id}>
                  <div className={styles.cardHeader} id={`ma_ac_${id}`}>
                    <h3
                      className="mb-0"
                      onClick={() => handleCardClick(id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className={styles.addbtn}>
                      {activeCardId === id ? <RemoveOutlinedIcon /> : <AddIcon />}
                      </span>
                      <span>{title}</span>
                    </h3>
                  </div>
                  {activeCardId === id && (
                    <div className={styles.cardBody}>
                      {description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

  {/* Right Column: 30% */}
  <Grid  style={{ flex: '30%', position: 'relative', paddingLeft: '15px' }} className={styles.s3expCounter}>
    <Box component="div" className={styles.expCounter}
      style={{
        backgroundImage: "url('/images/bg/4.png')",
        backgroundPosition: "top right",
        backgroundSize: "100px 100px", 
        backgroundRepeat: "no-repeat",
        paddingRight:"-2px"
      }}
    >
    <h2><span className={styles.counter} data-count="100">
        {counters[0]}+
        </span></h2>
      <p>Years Of Experience</p>
    </Box>
    <Box component="div" 
      className={styles.expCounter}
      style={{
        position: 'relative',
        right: '-40px',
        backgroundImage: "url('/images/bg/4.png')",
        backgroundPosition: "top right",
        backgroundSize: "100px 100px", 
        backgroundRepeat: "no-repeat",
        paddingRight:"-2px"
      }}
    >
      <h2>
        <span className={styles.counter} data-count="100">
        {counters[1]}+
        </span>
      </h2>
      <p>Experts</p>
    </Box>
    <Box component="div"
      className={styles.expCounter}
      style={{
        position: 'relative',
        right: '-78px',
        backgroundImage: "url('/images/bg/4.png')",
        backgroundPosition: "top right",
        backgroundSize: "100px 100px", 
        backgroundRepeat: "no-repeat",
        paddingRight:"-2px"
      }}
    >
      <h2>
        <span className={styles.counter} data-count="70">
        {counters[2]}+
        </span>
      </h2>
      <p>Certification</p>
    </Box>
  </Grid >
 </div>

      </div>
    </section>

    <section className={styles.techStack} >
      <div className={`${styles.container} largeContainer`}>
        <div className={styles.s4row}>
          <div>
            <div className={styles.subTitle}>
              <span className={styles.bleft}></span>
              Cutting-Edge Tools We Rely On
              <span className={styles.bleft}></span>
            </div>
            <p> Harnessing Cutting-Edge Tech to Drive Success</p>
          </div>
        </div>

        <div className={styles.sectionBody} >
          <div className="col-sm-12">
            <div className={styles.techStackItem}>
              <div className={styles.techName}>Web Development</div>
              <div className={styles.techList}>
              <span>Next.js</span><span>React</span> <span>Angular</span> <span>HTML</span>
              </div>
            </div>
            <div className={styles.techStackItem}>
              <div className={styles.techName}>Mobile Development</div>
              <div className={styles.techList}>
                <span>iOS</span> <span>Android</span> <span>Flutter</span> <span>React Native</span>
              </div>
            </div>
            <div className={styles.techStackItem}>
              <div className={styles.techName}>Back-End Development</div>
              <div className={styles.techList}>
                <span>Python</span> <span>Java</span> <span>C#</span> <span>Elasticsearch</span>
              </div>
            </div>
            <div className={styles.techStackItem}>
              <div className={styles.techName}>Cloud-Based Solutions</div>
              <div className={styles.techList}>
                <span>AWS</span> <span>Microsoft Azure</span> <span>Google Cloud</span>
              </div>
            </div>
            <div className={styles.techStackItem}>
              <div className={styles.techName}>Database Management</div>
              <div className={styles.techList}>
                <span>MySQL</span> <span>PostgreSQL</span> <span>MongoDB</span> <span>SQL Server</span>
              </div>
            </div>
          </div>
        </div>
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
                  <li><a>Home</a> </li>
                  <li><a>Outsystems</a></li>
                  <li><a>Contact</a> </li>
                  <li><a>About</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     </Fragment>
    );
}