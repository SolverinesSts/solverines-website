"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import dynamic from "next/dynamic";
import Copyrights from "../component/copyright/page";
import { certification } from "../util/data";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Globe from "./globe";

const SwiperComponent = dynamic(()=> import('./slider'),{
  ssr: false,
})

export default function Homes() {

  const CertimageData = certification;
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const [showFirstImage, setShowFirstImage] = useState(true);
  // const [captionVisible, setCaptionVisible] = useState(false);
  // const [triVisible, setTriVisible] = useState(false);

  // useEffect(() => {
  //   let interval: NodeJS.Timeout;

  //   const startSequence = () => {
  //     setCaptionVisible(true); // Hide captions initially
  //     setTriVisible(true); // Show the triangles
  //     interval = setInterval(() => {
  //       setShowFirstImage((prev) => !prev); // Toggle images
  //       setTimeout(() => setCaptionVisible(true), 1500); // Show captions after 500ms
  //       setTimeout(() => setTriVisible(true), 1500); // Show triangles
  //     }, 6000); // Switch images every 5 seconds
  //   };

  //   startSequence();

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [captionVisible, setCaptionVisible] = useState(false);
  const [triVisible, setTriVisible] = useState(false);
  const [animateTriangles, setAnimateTriangles] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    const startSequence = () => {
      setCaptionVisible(true); // Initially hide captions
      setTriVisible(true); // Initially hide triangles
      setAnimateTriangles(true); // Initially disable triangle animations
  
      interval = setInterval(() => {
        setShowFirstImage((prev) => !prev); // Toggle images
        setTimeout(() => {
          setCaptionVisible(true); // Show captions after 1.5s
         // setTriVisible(true); // Show triangles after 1.5s
          setAnimateTriangles(false); // Reset triangle animations
        }, 100);
  
        setTimeout(() => {
          setAnimateTriangles(true); // Trigger triangle animations
        }, 1000); // Slight delay for triangle animations to sync
      }, 5000); // Switch images every 6 seconds
    };
  
    startSequence();
  
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  

  const services = [
    {
      id: 1,
      title: "Low Code Development",
      imgSrc: "/images/bg/low code.png",
      description:
        "Accelerate application development with low-code platforms for rapid deployment and scalability....",
      link: "~/home/Outsystems",
    },
    {
      id: 2,
      title: "Cloud Services",
      imgSrc: "/images/bg/cloud services.png",
      description:
        "In today's fast-paced digital landscape, businesses need to be agile, scalable, and secure. Our Cloud & DevOps services are ....",
      link: "~/home/CloudService",
    },
    {
      id: 3,
      title: "Application Services",
      imgSrc: "/images/bg/application services.png",
      description:
        "In an era where digital transformation is key, our Application Services are designed to deliver robust...",
      link: "~/home/AppService",
    },
    {
      id: 4,
      title: "Product Engineering",
      imgSrc: "/images/bg/platform service.png",
      description:
        "In today’s fast-paced market, the ability to innovate, develop, and deliver high-quality products is crucial to staying competitive.....",
      link: "#",
    },
    {
      id: 5,
      title: "Data Analytics & AI",
      imgSrc: "/images/bg/data analytics & ai.png",
      description:
        "Harness the power of data and automation to drive smarter decision-making and operational efficiency...",
      link: "~/home/AppService",
    },
    {
      id: 6,
      title: "IT Consulting",
      imgSrc: "/images/bg/it_consulting.png",
      description:
        "Expert advice to help you leverage technology for business growth and digital transformation....",
      link: "#",
    },
  ];

  const data = [
    {
      icon: "/images/bg/performance.png",
      hover:"/images/bg/performancewhite.png",
      number: "01",
      title: "Accelerate Development",
      description:
        "OutSystems’ low-code platform significantly reduces the time required to develop applications. With a visual development environment, pre-built templates, and reusable components, your team can focus on solving business problems rather than writing and debugging code.",
    },
    {
      icon: "/images/bg/skill-enhancement.png",
      hover:"/images/bg/skill-enhancementwhite.png",
      number: "02",
      title: "Enhance Collaboration",
      description:
        "OutSystems promotes collaboration between IT and business teams through its intuitive platform. Consulting partners facilitate this collaboration by providing strategic guidance, aligning development with business goals, and ensuring that all stakeholders are involved in the development process.",
    },
    {
      icon: "/images/bg/cost.png",
      hover:"/images/bg/costwhite.png",
      number: "03",
      title: "Optimize Costs",
      description:
        "Low-code development with OutSystems reduces the need for extensive coding, which lowers development and maintenance costs. Consulting partners help you maximize ROI by optimizing resource allocation and minimizing time-to-market. They also assist in identifying cost-saving opportunities throughout the development lifecycle.",
    },
    {
      icon: "/images/bg/technology.png",
      hover:"/images/bg/technologywhite.png",
      number: "04",
      title: "Drive Digital Transformation",
      description:
        "We provide strategic insights and innovative solutions tailored to your industry and business needs. By partnering with them, you can effectively drive digital initiatives, streamline operations, and deliver exceptional customer experiences.",
    },
  ];

  const industries = [
    { src: '/images/folio/Automotive.png', title: 'Automotive', link: '#' },
    { src: '/images/folio/ConsumerGoods.png', title: 'Consumer Goods', link: '#' },
    { src: '/images/folio/FinancialService.png', title: 'Financial Service', link: '#' },
    { src: '/images/folio/Logistics.png', title: 'Logistics', link: '#' },
    { src: '/images/folio/healthcare.png', title: 'Health Care', link: '#' },
    { src: '/images/folio/realestate.png', title: 'Real Estates', link: '#' },
  ];

  // Counter data
  const counters = [
    { id: 1, title: "OutSystems Experts", target: 100 },
    { id: 2, title: "Projects Delivered", target: 120 },
    { id: 3, title: "Certifications", target: 80 },
    { id: 4, title: "Years Of Experience", target: 10 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0)); // Initial counts are all 0
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-triggering
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          counters.forEach((counter, index) => {
            let start = 0;
            const step = Math.ceil(counter.target / 50); // Increment step (adjust for smoother animation)
            const interval = setInterval(() => {
              start += step;
              if (start >= counter.target) {
                start = counter.target;
                clearInterval(interval);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, 50); // Animation speed
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, counters]);

 
  return (
    <Fragment>
    <div className={styles.div}>
    <div className={styles.slideshowHeader}>
      <div className={styles.imageContainer}>
        {/* First Image */}
        <div
          className={`${styles.imageWrapper} ${
            showFirstImage ? styles.imageFromTop : styles.hidden
          }`}
        >
           <Image
            src="/images/slider/22.png"
            alt="Accelerate Digital Transformation"
            layout="fill"
            objectFit="cover"
            priority
          /> 
<div
  className={`${styles.triangle} ${
    triVisible && animateTriangles ? styles.trianglevisible : styles.hidden
  }`}
></div>
<div
  className={`${styles.normaltriangle} ${
    triVisible && animateTriangles ? styles.trianglevisible : styles.hidden
  }`}
></div>


          <div
            className={`${styles.caption} ${
              showFirstImage && captionVisible ? styles.visible : styles.hidden
            }`}
          >
            <h1>
              Strategic OutSystems Partner
              With a Decade of Low-Code Expertise.
            </h1>
            <p>
              With ten years of low-code experience, we leverage our strategic
              partnership with OutSystems

              to deliver innovative, efficient solutions. Our expertise ensures rapid
              digital transformation,

              seamless integration, and enhanced operational efficiency.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div
          className={`${styles.imageWrapper} ${
            !showFirstImage ? styles.imageFromBottom : styles.hidden
          }`}
        >
          <Image
            src="/images/slider/11.png"
            alt="Strategic OutSystems Partner"
            layout="fill"
            objectFit="cover"
            priority
          />
<div
  className={`${styles.triangle} ${
    triVisible && animateTriangles ? styles.trianglevisible : styles.hidden
  }`}
></div>
<div
  className={`${styles.normaltriangle} ${
    triVisible && animateTriangles ? styles.trianglevisible : styles.hidden
  }`}
></div>
          <div
            className={`${styles.caption} ${
              !showFirstImage && captionVisible ? styles.visible : styles.hidden
            }`}
          >
            <h1>
              Accelerate Digital Transformation

              Through OutSystems Low Code Platform.
            </h1>
            <p>
              OutSystems low-code platform accelerates digital transformation by
              streamlining application

              development, enhancing collaboration, and integrating seamlessly with
              existing systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
 <section className={styles.section1}>
        <div className={styles.s1grid}>
            <Typography
              variant="h4"className={styles.s1span}  >
              Harness rapid application development to transcend inertia and move
              at the speed of thought
            </Typography>
            <Typography>
              Every day, with OutSystems low-code development platform we help our
              clients engage with new technology paradigms, creatively building
              solutions that solve their most pressing business challenges and move
              them to the forefront of their industry.
            </Typography>
          </div>
 </section>

 <section className={styles.section2}>
    <div className={styles.row}>
    <div className={styles.leftside}>
    <div className={styles.subTitle}>
      <span className={styles.bleft}></span>Global Experience
    </div>
    <h2 className={styles.secTitle}>
      Transforming Businesses with Low Code Solutions using <span style={{color:"rgb(116,40,148)"}}>OutSystems</span>
    </h2>
    <p className={styles.secDesc}>
      We have successfully delivered customized low-code solutions to clients across diverse industries worldwide, driving impactful digital transformations. Our expertise ensures 
      each solution is tailored to meet specific business needs, resulting in enhanced efficiency, productivity, and innovation in today's fast-paced digital landscape.
    </p>
    <p style={{ marginTop: "5%" }}className={styles.secDesc}>
      From consulting to implementation and support, our comprehensive suite of
      services ensures a seamless journey from concept to deployment and beyond.
      Leverage our extensive knowledge and experience in low code platforms to
      accelerate your digital transformation.
    </p>
  </div>
  <div className={styles.globe} >
  <div  className={styles.earth}>
      <Globe />
    </div> 
   
      {/* <div className={styles.logo}>
      <div className={styles.earth}> */}
      {/* <Image
    src="/images/price/worldMap.png"
    alt="World Map"
    width={350}
    height={350}
    style={{ objectFit: "contain" }} 
  /> */}

{/* </div> 
      </div> */}
   </div> 
    </div>
    </section>

<section className={styles.section3}>
  <Container maxWidth="lg" sx={{ py: 5 }}>
    <Grid container spacing={4}>
      {/* Section Title */}
      <Grid item xs={12} md={6}>
        <Box className={styles.s3img}>
          <Typography variant="h6" color="rgb(116,40,148)">
            <Box component="span" ><span className={styles.bleft}></span>
              What we do
            </Box>
          </Typography>
          <Typography variant="h4" gutterBottom>
            We combine the logic, creativity, and curiosity to{" "}
            <Box component="span" color="rgb(116,40,148) " fontWeight="bold">
              build, solve, and create
            </Box>
          </Typography>
        </Box>
      </Grid>
      
      {/* Grid items: 6 items in the same size */}
      {services.map((service, index) => (
  <Grid item xs={12} sm={6} md={3} key={service.id} >
    <Box className={styles.gridItem}
      sx={{
        p: 5,
        mx: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 1,
        width: "230px",
        height: "310px",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" }, 
      }}
    >
      {/* Image and Title */}
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img
          src={service.imgSrc}
          alt={service.title}
          style={{ width: "80px", borderRadius: "5px" }}
        />
      </Box>

      <Typography variant="h6" className={styles.s3Title}>
        <a href={service.link} className={styles.s3Title}>
          {service.title}
        </a>
      </Typography>

      <Typography variant="body2"  className={styles.s3desc}>
        {service.description}
      </Typography>

      {/* Read More Button */}
      <Button className={styles.button}
        href={service.link}
        variant="contained"
        size="small"  >
        Read More
        <span className={styles.s3bicon}><EastOutlinedIcon /></span>
      </Button>
    </Box>
  </Grid>
))}

    </Grid>
  </Container>
</section>

<section className={styles.section4}>
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className={styles.s4Title}>
        <span className={styles.bleft}></span>What we do
        <span className={styles.bleft}></span>
      </div>
      <h2 className={styles.sec4Title}>
        Industries <span style={{color:"rgb(116,40,148)"}}>We Serve</span>
      </h2>
    </div>
  </div>

  <div
    className={styles.folioSlider}
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", 
    }}
  >
    {industries.map((industry, index) => (
      <div
        key={index}
        className={styles.folioItem}
        style={{
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
          // backgroundImage: `url(${industry.src})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
          <Image
          src={industry.src}
          alt={industry.title}
          layout="fill"
          objectFit="cover"
          priority
          style={{
            zIndex: 1,
          }}
         />
        <div className={styles.folioContent}>
          <div className={styles.cat}><span className={styles.bleft} style={{backgroundColor:"white"}}></span>
            Industries
          </div>
          <h1 className={styles.cat} >
            {industry.title}
          </h1>
         </div>
         <div className={styles.folioContent}>
         <Link href={industry.link} className={styles.fm} style={{textDecoration:"none"}}>
         <Button className={styles.foliobutton}>
            <Image
             src="/images/bg/eye.png"
             alt={industry.title}
             height={40}
             width={40}
             objectFit="cover"/>
           <span style={{ marginLeft: "10px",color:"white" }}>View Details</span>
           </Button>
          </Link>
         </div>
      </div>
    ))}
  </div>
</section>


<section className={styles.section5}>
  <Box component="section" sx={{  backgroundColor: "#f8f9fa" }}>
  <Grid container  >
    {/* Left Grid for Background Image */}
    <Grid
      item xs={12} md={4} spacing={4}
      sx={{position: "relative" }} className={styles.s5left}>
      <Box  className={styles.s5leftbox}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/images/bg/halfcircle1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
    </Grid>

        {/* Right Grid (Content) */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(116,40,148)",
                fontWeight: 500,
                my: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className={styles.bleft}></span> Outsystems
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 3, lineHeight: 1.3 }}
            >
              Enhance Your Low-Code Innovation with OutSystems
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 , color: "#9ca3a5"}}>
              In the fast-paced world of digital transformation, businesses need
              to innovate quickly and efficiently to stay competitive. OutSystems
              provides a powerful low-code platform that enables organizations to
              rapidly develop, deploy, and manage complex applications with ease.
              Here’s how partnering with OutSystems Consulting Partners can
              enhance your low-code innovation:
            </Typography>
            {data.map((item, index) => (
       <Box className={styles.s5box}
         key={index}
         onMouseEnter={() => setHoveredIndex(index)}
         onMouseLeave={() => setHoveredIndex(null)}
         sx={{
           display: "flex",
           alignItems: "flex-start",
           mb: 3,
           mr:4,
           "&:hover .image-circle": {
             backgroundColor: "rgb(116, 40, 148)",
           },
           "&:hover .number-circle": {
             backgroundColor: "white", 
             color: "rgb(116, 40, 148)", 
           },
           }}
        >
       <Box
         className="image-circle"
         sx={{
           width: 100, 
           height: 50, 
           borderRadius: "50%", 
           position: "relative", 
           display: "flex", 
           justifyContent: "center", 
           alignItems: "center",
           transition: "background-color 0.3s ease", 
           padding:"10px"
         }}
       >
      <img
       src={hoveredIndex === index ? item.hover : item.icon}
        alt={`icon-${index}`}
        style={{
          width: "50px", 
          height: "50px",
          objectFit: "cover", 
        }}
      />
      <Box
        className="number-circle"
        sx={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "rgb(116, 40, 148)", 
          color: "white", 
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-6px",
          left: "-2px",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.3)", 
          transition: "background-color 0.3s ease, color 0.3s ease", 
        }}
      >
        {item.number}
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ ml: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {item.title}
      </Typography>
      <Typography variant="body2" sx={{ lineHeight:1.8, color: "#9ca3a5" }}>{item.description}</Typography>
    </Box>
  </Box>
))}

          </Box>
        </Grid>
      </Grid>
  </Box>
</section>

<section className={styles.section6} ref={sectionRef} style={{  background: "#fbf9fc" }}>
      <Container maxWidth="lg" sx={{p:"3%"}}>
        <Typography variant="h4" align="center" fontWeight="bolder" padding="7%">
        Why Solverines for OutSystems development services?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {counters.map((counter, index) => (
            <Grid item xs={12} sm={6} md={3} key={counter.id}>
              <Box className={styles.s6box} >
                <Typography variant="h6" fontWeight="bolder">{counter.title}</Typography>
                <Typography variant="h3" fontWeight="bolder" color="rgb(116,40,148)">
                  {counts[index]} <span><AddIcon/></span> </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>


<section className={styles.section7}
style={{
  backgroundImage: "url('/images/bg/3.png')",
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat",
}}>
    <div className="container largeContainer">
    <div className={styles.s7row}>
      {/* Left Image Column */}
      <div className={styles.s7left}>
        <Image
          src="/images/bg/outsystems-sales-delivery.png"
          alt="Outsystems Sales Delivery"
          width={350}
          height={100}
        />
      </div>
      <div className={styles.s7right}>
        <div className={styles.imageSlider}>
          <SwiperComponent InputData={CertimageData}/>
        </div>
      </div>
    </div>
  </div>

</section>


    <footer className={styles.footer_02}>
     <Copyrights/>  
    </footer>

</Fragment>
  );
}
