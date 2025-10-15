'use client'
import React, { useState, useEffect } from 'react';
import ServiceCopyrights from '@/app/component/service-copyright/page';

// Material-UI Icons - Install with: npm install @mui/icons-material @mui/material @emotion/react @emotion/styled
import ShieldIcon from '@mui/icons-material/Shield';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function CloudServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <GpsFixedIcon sx={{ fontSize: 48 }} />,
      title: "Cloud Strategy & Planning",
      description: "We work closely with you to design a cloud strategy that fits your business goals. Our experts help you choose the right cloud model—public, private, or hybrid—and ensure a smooth transition."
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 48 }} />,
      title: "Cloud Management & Support",
      description: "Keep your cloud environment running efficiently with our ongoing management and support. We monitor performance, ensure security, and provide continuous improvements to meet your growing needs."
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 48 }} />,
      title: "Security & Data Protection",
      description: "Your data's safety is our top priority. We implement strong security measures and best practices to protect your business information and ensure compliance with industry standards."
    },
    {
      icon: <FlashOnIcon sx={{ fontSize: 48 }} />,
      title: "Cloud Application Development",
      description: "Build and deploy cloud-native applications that are resilient, scalable, and optimized for modern architectures. Our cloud engineers leverage microservices, containers, and serverless technologies for faster innovation."
    },
    {
      icon: <StorageIcon sx={{ fontSize: 48 }} />,
      title: "Business Continuity & Backup",
      description: "Be prepared for the unexpected. Our backup and recovery solutions ensure that your critical data and applications are always protected and quickly recoverable during any disruption."
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
      title: "Optimization & Cost Efficiency",
      description: "Get the most out of your cloud investment. We analyze your usage, improve efficiency, and help you save costs while maintaining high performance and reliability."
    }
  ];

  const whyChooseUs = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: "Expertise Across Leading Technologies",
      description: "Our team comprises certified cloud professionals with deep expertise in AWS, Azure, Google Cloud, and other leading platforms. We stay ahead of industry trends to deliver cutting-edge solutions."
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: "End-to-End Support & Partnership",
      description: "From initial consultation to post-deployment support, we're with you every step of the way. Our commitment extends beyond implementation to ensure your continued success."
    },
    {
      icon: <LockIcon sx={{ fontSize: 40 }} />,
      title: "Security-First Approach",
      description: "We prioritize security in every solution we deliver. With robust encryption, compliance frameworks, and continuous monitoring, your data remains protected at all times."
    }
  ];

  const trustFactors = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      title: "Proven Track Record",
      description: "Successfully delivered 200+ cloud transformation projects across various industries."
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      title: "99.9% Uptime Guarantee",
      description: "Our managed cloud services ensure maximum availability and minimal disruption."
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      title: "Industry Compliance",
      description: "Fully compliant with GDPR, HIPAA, SOC 2, and other major regulatory standards."
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from our dedicated cloud specialists."
    }
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    heroSection: {
      position: 'relative',
      backgroundColor: 'rgb(116,40,148)',
      color: 'white', 
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.15
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      margin: '0 auto',
      padding:'6% 5% 1% ',
      width:'45%',
      marginLeft:'2%'
    },
    subTitle1: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 1s ease-out 0.3s'
    },
    subTitle2: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 1s ease-out 0.6s'
    },
    section: {
      margin: '0 auto',
      padding: '50px 20px',
      paddingTop:'0px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textAlign: 'center',
      color: 'rgb(116,40,148)',
      marginTop:'0%',
    },
    intro: {
      textAlign: 'center',
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: '#555',
      maxWidth: '900px',
      margin: '0 auto',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 1s ease-out 1.2s'
    },
    grid: {
      display: 'grid',
      gap: '30px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderTop: '4px solid rgb(116,40,148)',
      transition: 'all 0.3s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.9)'
    },
    cardIcon: {
      color: 'rgb(116,40,148)',
      marginBottom: '20px'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '15px',
      color: '#333'
    },
    cardDescription: {
      fontSize: '1rem',
      lineHeight: '1.7',
      color: '#666'
    },
    whyChooseSection: {
      backgroundColor: 'rgba(116,40,148,0.05)',
      padding: '80px 20px'
    },
    trustGrid: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    trustCard: {
      backgroundColor: 'rgba(116,40,148,0.03)',
      borderRadius: '8px',
      padding: '30px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.9)'
    },
    whatWeDoSection: {
      backgroundColor: 'rgb(116,40,148)',
      color: 'white',
      padding: '80px 20px'
    },
    whatWeDoGrid: {
      display: 'grid',
      gap: '40px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    iconCircle: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      transition: 'all 0.5s ease'
    },
    conclusionCard: {
      background: 'linear-gradient(135deg, rgba(116,40,148,0.1) 0%, rgba(116,40,148,0.05) 100%)',
      borderRadius: '16px',
      padding: '60px 40px',
      textAlign: 'center',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
      transition: 'all 0.8s ease 1.5s'
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '30px'
    },
    button: {
      padding: '15px 40px',
      fontSize: '1.125rem',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    secondaryButton: {
      backgroundColor: 'white',
      color: 'rgb(116,40,148)',
      border: '2px solid rgb(116,40,148)'
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(116,40,148,0.2);
        }

        .trust-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(116,40,148,0.15);
        }

        .icon-circle:hover {
          transform: rotate(360deg);
          background-color: rgba(255,255,255,0.2);
        }

        .btn-secondary:hover {
          transform: scale(1.05);
          background-color: rgba(116,40,148,0.05);
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem !important;
          }
          .sub-title-1 {
            font-size: 1.5rem !important;
          }
          .sub-title-2 {
            font-size: 1.25rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={{
          ...styles.heroBackground,
          backgroundImage: "url('/images/bg/cloudservicesbg.png')",
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',   
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        
        <div style={styles.heroContent}>
          <h1 style={{...styles.subTitle1, color: "white", marginBottom: "0px"}}>
            Cloud Computing Services
          </h1>

          <h2 style={{...styles.subTitle2, color: "white", marginTop: "0px"}}>
            Transform Your Business with the Power of the Cloud.
          </h2>
        </div>
      </div>

      <div style={{...styles.section}}>
        <div style={{...styles.intro, paddingTop:'5%'}}>
          <div style={{color:"rgb(116,40,148)", margin:"0px", paddingLeft:'5%'}}>
            Building a Smarter Future with Cloud Technology 
          </div>
          <h1 style={{margin:"0px", color:'black'}}>
            Empower Your Business with <span style={{color:"rgb(116,40,148)"}}>OutSystems</span>
          </h1>
          <p>
            Across the evolving business landscape, cloud technology serves as a key enabler of agility, 
            scalability, and efficiency. Cloud solutions empower organizations to enhance flexibility, 
            optimize costs, and strengthen operational performance while maintaining security and reliability. 
            Whether initiating a cloud journey or optimizing existing infrastructure, comprehensive cloud 
            services ensure seamless transformation and long-term success.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Cloud Services</h2>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{
                ...styles.card,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div style={styles.cardIcon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={styles.whyChooseSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Our Cloud Services?</h2>
          <p style={{...styles.intro, marginBottom: '60px'}}>
            At Solverines, we understand that modern businesses need robust, scalable, and 
            integrated cloud solutions to stay competitive in a fast-paced digital environment.
          </p>
          <div style={styles.grid}>
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="service-card"
                style={{
                  ...styles.card,
                  transitionDelay: `${0.6 + index * 0.1}s`
                }}
              >
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Trust Us */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Businesses Trust Us</h2>
        <p style={{...styles.intro, marginBottom: '60px'}}>
          Our commitment to excellence and customer success has made us a trusted partner 
          for organizations worldwide.
        </p>
        <div style={styles.trustGrid}>
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              className="trust-card"
              style={{
                ...styles.trustCard,
                transitionDelay: `${1 + index * 0.1}s`
              }}
            >
              <div style={{...styles.cardIcon, display: 'flex', justifyContent: 'center'}}>
                {factor.icon}
              </div>
              <h3 style={{...styles.cardTitle, fontSize: '1.1rem'}}>{factor.title}</h3>
              <p style={{...styles.cardDescription, fontSize: '0.95rem'}}>{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div style={styles.whatWeDoSection}>
        <h2 style={{...styles.sectionTitle, color: 'white'}}>What We Do</h2>
        <p style={{...styles.intro, color: 'rgba(255,255,255,0.9)', marginBottom: '60px'}}>
          We deliver comprehensive cloud solutions that drive digital transformation
        </p>
        <div style={styles.whatWeDoGrid}>
          <div style={{textAlign: 'center'}}>
            <div className="icon-circle" style={styles.iconCircle}>
              <LightbulbIcon sx={{ fontSize: 50 }} />
            </div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px'}}>Innovate</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7'}}>
              We help you leverage cutting-edge cloud technologies to innovate faster, 
              experiment with new ideas, and bring products to market quickly.
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div className="icon-circle" style={styles.iconCircle}>
              <TrendingUpIcon sx={{ fontSize: 50 }} />
            </div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px'}}>Scale</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7'}}>
              Our cloud solutions grow with your business, providing the infrastructure 
              and capabilities needed to scale seamlessly without limits.
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <div className="icon-circle" style={styles.iconCircle}>
              <ShieldIcon sx={{ fontSize: 50 }} />
            </div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px'}}>Protect</h3>
            <p style={{color: 'rgba(255,255,255,0.9)', lineHeight: '1.7'}}>
              We implement enterprise-grade security measures and compliance frameworks 
              to protect your data, applications, and business operations.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div style={styles.section}>
        <div style={{...styles.conclusionCard, marginTop:'4%'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 700, color: 'rgb(116,40,148)', marginBottom: '25px'}}>
            Ready to Transform Your Business?
          </h2>
          <p style={{fontSize: '1.25rem', color: '#555', lineHeight: '1.8', marginBottom: '30px'}}>
            Embracing cloud technology enables businesses to operate with greater flexibility 
            and reliability. By implementing a thoughtful cloud strategy, organizations can 
            enhance productivity, strengthen security, and drive continuous innovation across 
            all areas of operation.
          </p>
          <div style={styles.buttonContainer}>
            <button className="btn-secondary" style={{...styles.button, ...styles.secondaryButton}}>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      
      <ServiceCopyrights/>
    </div>
  );
}