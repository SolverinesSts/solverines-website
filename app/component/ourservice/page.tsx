import Image from "next/image";
import React from "react";
import styles from "../../our-services/application-services/application.module.css";

interface ServiceSectionProps {
  backgroundImage: string;
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  backgroundImage,
  icon,
  title,
  subtitle,
}) => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container largeContainer">
        <div className="row">
          <div className="col-md-8">
            <div className={styles.srow} style={{ display: "flex", alignItems: "center" }}>
              {/* Left Image Column */}
              <div className="col-md-2" style={{ textAlign: "center" }}>
                <Image src={icon} alt="Service Icon" width={80} height={80} />
              </div>

              {/* Right Text Column */}
              <div className={styles.colmd10}>
                <h1 style={{ color: "white", marginBottom: "0px", fontSize: "30px" }}>
                  {title}
                </h1>
                <h2 style={{ color: "white", marginTop: "0px" }}>{subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
