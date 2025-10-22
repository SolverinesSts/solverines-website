
'use client'
import React, { useState, useEffect } from 'react';
import { 
  Storage as Server,
  Settings,
  Link as Link2,
  ShowChart as Activity,
  Security as Shield,
  TrendingUp,
  ArrowForward as ArrowRight,
  CheckCircle,
  EmojiEvents as Award,
  People as Users,
  FlashOn as Zap,
  GpsFixed as Target,
  Lock,
  AccessTime as Clock,
  Code,
  Public as Globe
} from '@mui/icons-material';
import ServiceCopyrights from '@/app/component/service-copyright/page';
import styles from './platform.module.css'
const PlatformServicesPage = () => {
  const [activeService, setActiveService] = useState<number|null>(null);
  const [scrollY, setScrollY] = useState(0);
  //const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Settings,
      title: "Platform Administration & Management",
      description: "Keep your OutSystems environment running smoothly with proactive monitoring, maintenance, and upgrades. We manage configurations, permissions, and environment setups to ensure consistent performance and reliability.",
      features: ["Proactive Monitoring", "System Maintenance", "Configuration Management", "Environment Setup"]
    },
    {
      icon: Link2,
      title: "Integration & Connectivity",
      description: "Connect OutSystems applications with other systems and APIs to enable seamless data flow and collaboration. Design and implement integrations that unify the digital ecosystem.",
      features: ["API Integration", "System Connectivity", "Data Flow Management", "Ecosystem Unification"]
    },
    {
      icon: Activity,
      title: "Performance Monitoring & Optimization",
      description: "Ensure your applications and platform perform at their best. We provide monitoring, analytics, and optimization services to maintain speed, stability, and scalability.",
      features: ["Real-time Monitoring", "Performance Analytics", "Speed Optimization", "Scalability Management"]
    }
  ];

  const trustReasons = [
    {
      icon: Award,
      title: "Certified OutSystems Experts",
      description: "Our team consists of certified OutSystems professionals with deep expertise in platform architecture and best practices."
    },
    {
      icon: Clock,
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock platform monitoring and support to ensure your environment stays healthy and responsive."
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "Implement industry-leading security measures and compliance standards to protect your digital assets."
    }
  ];

  const whatWeDo = [
    {
      title: "Platform Health Checks",
      description: "Regular assessments of your OutSystems environment to identify optimization opportunities and prevent issues before they impact operations.",
      icon: Activity
    },
    {
      title: "Environment Architecture",
      description: "Design and implement scalable environment architectures that support development, testing, and production workflows efficiently.",
      icon: Code
    },
    {
      title: "Lifecycle Management",
      description: "Manage the complete lifecycle of your OutSystems platform including upgrades, patches, and version migrations with minimal disruption.",
      icon: Target
    },
    {
      title: "Performance Tuning",
      description: "Optimize database queries, application logic, and infrastructure configurations to maximize platform performance and user experience.",
      icon: Zap
    },
    {
      title: "Integration Hub Setup",
      description: "Establish centralized integration patterns and reusable connectors to streamline connections with external systems and APIs.",
      icon: Globe
    },
    {
      title: "Security Hardening",
      description: "Implement comprehensive security measures including role-based access control, encryption, and audit trails across your platform.",
      icon: Shield
    }
  ];

  return (
    <div className={styles.platformservicespage}>
      {/* Hero Section */}
      <section  className={styles.herosection} >
        <div className={styles.heropattern}></div>
        <div className={styles.heroicons}>
          <Server className={styles.floatingicon} sx={{ fontSize: 80 }} />
          <Settings className={styles.floatingicon} sx={{ fontSize: 70 }} />
          <Link2 className={styles.floatingicon} sx={{ fontSize: 75 }} />
          <Shield className={styles.floatingicon} sx={{ fontSize: 65 }} />
        </div>
        <div className={styles.herocontent}>
          <h1 className={styles.herotitle}style={{color: "white"}}>Platform Services</h1>
          <h2 className={styles.herosubtitle} style={{color: "white"}}>Unlock the Full Potential of Your Digital Platform.</h2>
          {/* <h2 className="hero-subtitle" style={{color: "white", marginTop: "0px"}}>Flexible, Scalable, and Efficient Platform Solutions</h2> */}
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introsection}>
        <div className={styles.introwrapper}>
          <div className={styles.introleft}>
            <h2 className={styles.introheading}>Empower Your Digital Transformation Journey</h2>
            <p className={styles.introtext}>
              Modern businesses need platforms that accelerate application delivery, streamline operations, and support growth. 
              Platform services help organizations maximize the value of their development environment, enabling faster innovation, 
              improved collaboration, and reliable performance.
            </p>
          </div>
          <div className={styles.introright}>
            <div className={styles.introcircles}>
              <div className={styles.introcircle}></div>
              <div className={styles.introcircle}></div>
            </div>
            <div className={styles.introvisualgrid}>
              <div className={styles.introvisualitem}>
                <Zap sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Fast Delivery</span>
              </div>
              <div className={styles.introvisualitem}>
                <Settings sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Streamlined Ops</span>
              </div>
              <div className={styles.introvisualitem}>
                <TrendingUp sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Growth Support</span>
              </div>
              <div className={styles.introvisualitem}>
                <Target sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Innovation</span>
              </div>
              <div className={styles.introvisualitem}>
                <Users sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Collaboration</span>
              </div>
              <div className={styles.introvisualitem}>
                <Activity sx={{ fontSize: 28 }} />
                <span className={styles.introvisuallabel}>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustsection}>
        <div className={styles.trustcontainer}>
          <div className={styles.sectionheader}>
            <h2 className={styles.sectiontitle}>Why Organizations Trust Us</h2>
            <p className={styles.sectiondescription}>
              We bring deep OutSystems expertise, proven methodologies, and a commitment to excellence 
              that ensures your platform investment delivers maximum value.
            </p>
          </div>
          <div className={styles.trustgrid}>
            {trustReasons.map((reason, index) => (
              <div key={index} className={styles.trustcard}>
                <div className={styles.trusticon}>
                  <reason.icon sx={{ fontSize: 32 }} />
                </div>
                <h3 className={styles.trusttitle}>{reason.title}</h3>
                <p className={styles.trustdescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.whatwedosection}>
        <div className={styles.whatwedocontainer}>
          <div className={styles.sectionheader}>
            <h2 className={styles.sectiontitle}>What We Do for Your OutSystems Platform</h2>
            <p className={styles.sectiondescription}>
              Comprehensive platform management services designed to keep your OutSystems environment 
              healthy, secure, and performing at its best.
            </p>
          </div>
          <div className={styles.whatwedogrid}>
            {whatWeDo.map((item, index) => (
              <div key={index} className={styles.whatwedocard}>
                <div className={styles.whatwedoicon}>
                  <item.icon sx={{ fontSize: 28 }} />
                </div>
                <h3 className={styles.whatwedotitle}>{item.title}</h3>
                <p className={styles.whatwedodescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicessection}>
        <div className={styles.servicescontainer}>
          <div className={styles.sectionheader}>
            <h2 className={styles.sectiontitle}>Our Platform Services</h2>
            <p className={styles.sectiondescription}>
              Whether deploying new applications, managing existing ones, or integrating with other systems, 
              our comprehensive platform services ensure your platform operates at peak efficiency.
            </p>
          </div>

          <div className={styles.servicesgrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.servicecard} ${activeService === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={styles.serviceicon}>
                  <service.icon sx={{ fontSize: 28 }} />
                </div>
                <h3 className={styles.servicetitle}>{service.title}</h3>
                <p className={styles.servicedescription}>{service.description}</p>
                <div className={styles.servicefeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureitem}>
                      <CheckCircle sx={{ fontSize: 16 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctasection}>
        <div className={styles.ctapattern}></div>
        <div className={styles.ctacontent}>
          <h2 className={styles.ctatitle}>Ready to Optimize Your OutSystems Platform?</h2>
          <p className={styles.ctadescription}>
            Our platform services enable businesses to maximize the value of their development environment. 
            From strategy and administration to integration and optimization, we deliver end-to-end services 
            that improve efficiency, accelerate delivery, and ensure long-term platform success.
          </p>
          <button className={styles.ctabutton}>
            Get Started Today
            <ArrowRight sx={{ fontSize: 20 }} />
          </button>
        </div>
      </section>
      <ServiceCopyrights/>
    </div>
  );
};

export default PlatformServicesPage;