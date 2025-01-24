"use client"
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import styles from './outsystems.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import dynamic from "next/dynamic";
import Copyrights from "../component/copyright/page";
import { certification, integeration } from "../util/data";
import Marquee from "react-fast-marquee";
import { Box, Grid } from "@mui/material";

const SwiperComponent = dynamic(()=> import('../home/slider'),{
  ssr: false,
})


export default function Outsystems(){

  const CertimageData = certification;
  const IntegImageData = integeration;
  const features = [
    {
      icon: "/images/bg/newboard.png",
      hover:"/images/bg/newboardwhite.png",
      title: "Rapid Development",
      description:
        "With OutSystems, you can reduce your development time by up to 50% using its intuitive drag-and-drop interface and pre-built templates. Create sophisticated applications without the need for extensive coding knowledge.",
    },
    {
      icon: "/images/bg/skill-development.png",
      hover:"/images/bg/skill-developmentwhite.png",
      title: "Full-Stack Capabilities",
      description:
        "OutSystems supports the development of both front-end and back-end applications, ensuring a seamless and integrated solution for your business needs. Whether it's web, mobile, or desktop, OutSystems has you covered.",
    },
    {
      icon: "/images/bg/flexible.png",
      title: "Scalability and Security",
      hover:"/images/bg/flexiblewhite.png",
      description:
        "Built for the enterprise, OutSystems ensures that your applications can scale with your business while maintaining top-notch security. Enjoy peace of mind knowing your applications are secure, compliant, and resilient.",
    },
    {
      icon: "/images/bg/honesty.png",
      hover:"/images/bg/honestywhite.png",
      title: "Integration-Friendly",
      description:
        "OutSystems makes it easy to integrate with your existing systems and third-party applications. With pre-built connectors and APIs, you can seamlessly connect OutSystems to your current IT ecosystem.",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const accordionItems = [
    {
      id: '01',
      title: 'Certified OutSystems Expertise',
      description:
        'Our team is composed of highly skilled and certified OutSystems professionals who bring years of experience in low-code development. We have successfully delivered numerous projects across various industries, helping businesses of all sizes unlock the full potential of the OutSystems platform. Our expertise ensures that your projects are in the hands of true specialists who understand the intricacies of OutSystems inside and out.',
    },
    {
      id: '02',
      title: 'Tailored Solutions for Your Business',
      description:
        ' We understand that every business is unique, with its own set of challenges, goals, and requirements. That’s why we don’t believe in one-size-fits-all solutions. Our approach is tailored to your specific needs, ensuring that the applications we develop are aligned with your business objectives. Whether you’re looking to build a new application from scratch or modernize existing systems, we’ll work closely with you to deliver a solution that fits perfectly.',
    },
    {
      id: '03',
      title: ' End-to-End Support',
      description:
        ' From the initial consultation to post-deployment support, we provide comprehensive services that cover every stage of your OutSystems journey. Our team is here to guide you through the entire process, ensuring smooth and successful implementation. We offer ongoing support and maintenance services to ensure your applications remain up-to-date and continue to deliver value long after launch.',
    },
    {
      id: '04',
      title: ' Proven Track Record of Success',
      description:
        ' We take pride in our track record of delivering high-quality, impactful solutions to our clients. Our portfolio includes successful projects across various sectors, including healthcare, finance, retail, and more. These success stories are a testament to our ability to drive real results, and we’re committed to bringing that same level of excellence to your project',
    },
    {
      id: '05',
      title: ' Agile and Collaborative Approach',
      description:
        'We believe in working collaboratively with our clients to achieve the best outcomes. Our agile methodology ensures that we remain flexible and responsive to your needs, allowing us to adapt to changes and deliver solutions that meet your evolving business requirements. We keep you involved and informed every step of the way, fostering a true partnership built on transparency and trust.',
    },
    {
      id: '06',
      title: 'Innovation-Driven Solutions',
      description:
        'At Solverines, we’re passionate about innovation. We stay ahead of the curve by continuously exploring new technologies and methodologies that can enhance the solutions we deliver. With OutSystems, we leverage the latest advancements in low-code development to create innovative applications that drive business growth and efficiency.',
    },
    {
      id: '07',
      title: 'Commitment to Your Success',
      description:
        ' Your success is our top priority. We are dedicated to delivering solutions that not only meet but exceed your expectations. Our commitment to quality, reliability, and customer satisfaction is unwavering, and we go the extra mile to ensure that your OutSystems project is a resounding success.',
    },
  ];

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardClick = (id : string) => {
    setActiveCardId((prevActiveId) => (prevActiveId === id ? null : id));
  };

  const [counters, setCounters] = useState([10, 100, 70]); // State for the counters
const sectionRef = useRef(null); // Ref for the section
const hasAnimated = useRef(false); // To ensure animation runs only once per page load

const targetValues = [10, 100, 70]; 

const animateCounters = () => {
  const duration = 2000; // Animation duration in milliseconds
  const startTime = performance.now();

  const update = (currentTime:number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1

    setCounters(targetValues.map((target) => Math.floor(target * progress)));

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

// Set up Intersection Observer
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true; // Ensure it runs only once
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
     <title>OutSystems</title>
     <meta name="description" content='Outsystem page description'/>
     
    <section className={styles.section}style={{ backgroundColor:"black" }}>
    <div className={styles.srow}>
     <h2 style={{ color: "white"}}> Low-code, high-performance.</h2>
    </div>  
    </section>

    <section className={styles.section1}>
      <Grid className={styles.container} container rowSpacing={1}  >
      <Grid className={styles.s1row} item xs={12} sm={12} md={6} >
          <Box component="div" className={styles.s1col}>
            <div className={styles.s1Title}>The Leading Low-Code Development Platform</div>
            <h1 className={styles.s1secTitle}>
              Empower Your Business with <span style={{color:"rgb(116,40,148)"}}>OutSystems</span>
            </h1>
            <p className={styles.s1Desc}>
              In today&apos;s fast-paced digital world, businesses need to innovate rapidly to stay ahead of the competition. 
              OutSystems offers a revolutionary low-code platform that empowers organizations to develop, deploy, and manage 
              applications quickly and efficiently. Whether you&apos;re looking to build enterprise-grade applications, modernize legacy systems, 
              or create customer-facing mobile apps, OutSystems provides the tools you need to succeed.
            </p>
          </Box>
     </Grid>
     <Grid className={styles.s1row} item xs={12} sm={12} md={6}>
       <Box component="div" className={styles.textContent}>
         <iframe
           title="An Overview of High-Performance Low-Code on the OutSystems Platform in 2 Minutes!"
           width="100%"
           height="100%"
           src="https://www.youtube.com/embed/0gx3hMMDOZI?start=25&amp;feature=oembed&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.linkit.nl"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen
         ></iframe>
       </Box>
      </Grid>
      </Grid>
    </section>

    <section className={styles.section2} 
     style={{
      backgroundImage: "url('/images/bg/3.jpg')",
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
}}>
      <Grid className={styles.s2container}>
        <Box component="div" className={styles.s2Title}>
          <span className={styles.bleft}></span>Why Choose OutSystems?
        </Box>
        <Grid className={styles.s2row}>
      {features.map((feature, index) => (
        <Grid
          className={styles.s2col}
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Grid className={styles.s2scontainer}>
            <Box component="div" className={styles.s2ib_box}>
              <Image
                src={hoveredIndex === index ? feature.hover : feature.icon}
                alt="Service Icon"
                width={40}
                height={40}
              />
            </Box>
            <Box component="div" className={styles.s2ib2_box}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
      </Grid>
    </section>
<section  className={styles.integrate} 
     style={{
      backgroundImage: "url('/images/bg/3.png')",
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
    }}>
    <div >
      <div >
        <div >
          <div style={{color:"rgb(116,40,148)" ,fontWeight:"bold"}}>
            <span className={styles.bleft}></span>Integrate with Any System, Effortlessly<span className={styles.bleft}></span>
          </div>
          <h2 style={{ fontSize: '30px' }}>
            The Power of Effortless Integration
          </h2>
        </div>
      </div>
      <div >
        <SwiperComponent InputData={IntegImageData}/>
      </div>
    </div>
</section>

<section  className={`${styles.section3} ${styles.abcs01}`} ref={sectionRef}>
    <div className={`${styles.container} ${styles.largeContainer}`}>
        <div className={`${styles.row} row`} style={{ display: 'flex' }}>
          {/* Left Column: 70% */}
          <div style={{ flex: '70%', paddingRight: '15px' }} className={styles.s3left}>
            <div className={styles.s3Title}>
              <span className={styles.bleft}></span>Why Choose Us as Your OutSystems Partner?
            </div>
            <h1>Your Trusted Partner for Digital Transformation</h1>
            <p className={styles.secDesc}>
            Selecting the right partner for your OutSystems journey is crucial to ensuring
             the success of your digital transformation initiatives. At Solverines, we combine 
             deep expertise, a customer-centric approach, and a commitment to excellence to deliver outstanding results for our clients.
            </p>
            <h4>Here’s why we stand out as your ideal OutSystems partner:</h4>
            <div>
              {/* Accordion Items */}
              {accordionItems.map(({ id, title, description }) => (
                <div className={styles.s3card} key={id}>
                  <div className={styles.cardHeader} >
                    <h4
                      className="mb-0"
                      onClick={() => handleCardClick(id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className={styles.addbtn}>
                      {activeCardId === id ? <RemoveOutlinedIcon /> : <AddIcon />}
                      </span>
                      <span>{title}</span>
                    </h4>
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
  <div style={{ flex: '30%', position: 'relative', paddingLeft: '15px' }}>
    <div className={styles.expCounter}
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
    </div>
    <div
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
    </div>
    <div
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
    </div>
  </div>
</div>
</div>
</section>

<section className={styles.section4}      style={{
      backgroundImage: "url('/images/bg/3.png')",
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
    }}>
        <Grid className={styles.s7row} container rowSpacing={1} >
          <Grid xs={12} sm={6} md={3} >
            {/* Left Image Column */}
            <Box component="div" className={styles.s7left}>
              <Image
                src="/images/bg/outsystems-sales-delivery.png"
                alt="Outsystems Sales Delivery"
                width={200}
                height={100}
              />
            </Box>
          </Grid>
            <Grid className={styles.s7right} xs={12} sm={12} md={9}>
              <Box component="div" className={styles.imageSlider}>
                <SwiperComponent InputData={CertimageData} />
              </Box>
            </Grid>
        </Grid>
</section>

<section className={styles.section5}>
      <div className={styles.stokeText}>
        <Marquee
        loop={0}
        speed={150}
        delay={0}
        // onCycleComplete={}
        >
        <h2>Outsystems Consultation</h2>
        </Marquee>
      </div>
          <div className={` ${styles.textCenter}`}>
            <h4>OutSystems Free Edition</h4>
            <p className={styles.secDesc}>
              We offer you a free, cloud-based personal environment where you can build mobile, web, and progressive applications 50% faster and access all OutSystems features: data models, workflows, logic, UI/UX, custom code…
            </p>
            <div className={styles.btndiv}>
            <a className={styles.quBtn} href="#">
            Try Outsystems For Free
            </a>
            </div>
        </div>

</section>

   <footer className={styles.footer_02}>
     <Copyrights/>  
    </footer>
    </Fragment>
  )
}


