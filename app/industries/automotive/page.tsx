"use client"
import React from "react";
import {
  CarRepair,
  Cloud,
  TrendingUp,
  CheckCircle,
  Code,
  RadioButtonChecked,
  BarChart,
  Repeat,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

const AutomotiveLandingPage: React.FC = () => {
  const challenges = [
    "Complex Supply Chains: Managing multi-tier suppliers, inventory, and logistics in real time.",
    "Data Integration & Visibility: Disparate systems lead to inefficiencies and delayed insights.",
    "Connected Vehicle Technologies: Need for secure IoT and telematics integration.",
    "Customer Experience: Rising expectations for digital engagement and personalization.",
    "Sustainability & Compliance: Meeting regulatory standards while optimizing production and emissions.",
  ];

  const solutions = [
    {
      icon: <Code sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />,
      title: "Custom Software Development",
      description:
        "Tailor-made web and mobile applications for production tracking, dealer management, and customer engagement.",
    },
    {
      icon: <RadioButtonChecked sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />,
      title: "IoT & Connected Vehicle Solutions",
      description:
        "Integrate IoT sensors, telematics, and real-time analytics for vehicle monitoring, predictive maintenance, and driver insights.",
    },
    {
      icon: <Cloud sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />,
      title: "Cloud & Enterprise Modernization",
      description:
        "Migrate legacy systems to secure, scalable cloud platforms — enabling automation, faster deployments, and cost efficiency.",
    },
    {
      icon: <BarChart sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />,
      title: "Data Analytics & AI Integration",
      description:
        "Use AI and machine learning to predict maintenance, optimize logistics, and analyze vehicle performance data.",
    },
    {
      icon: <Repeat sx={{ fontSize: 48, color: "rgb(116,40,148)" }} />,
      title: "Automation & Workflow Optimization",
      description:
        "Implement RPA and intelligent workflow solutions to streamline production, quality control, and logistics management.",
    },
  ];

  const impacts = [
    "30–40% improvement in operational efficiency",
    "Real-time visibility across supply chain and production lines",
    "Reduced downtime through predictive maintenance solutions",
    "Enhanced customer satisfaction with personalized digital experiences",
    "Improved compliance and sustainability tracking",
  ];

  const whyChoose = [
    {
      title: "Automotive Domain Expertise",
      description:
        "Years of experience delivering technology solutions for manufacturers and mobility innovators.",
    },
    {
      title: "End-to-End Delivery",
      description: "From strategy and design to deployment and maintenance.",
    },
    {
      title: "Agile & Scalable Teams",
      description: "Rapid development cycles with flexible engagement models.",
    },
    {
      title: "Technology Excellence",
      description: "Expertise in .NET, React, AWS, Azure, and AI frameworks.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We build lasting relationships focused on innovation, reliability, and measurable growth.",
    },
  ];

  return (
    <Grid sx={{ bgcolor: "white", color: "black", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Grid
        sx={{
          py: 13,
          textAlign: "center",
          background:
            "linear-gradient(to bottom right, rgb(116,40,148), rgb(76,20,108), #5b5b5bff)",
        }}
      >
        <Container maxWidth="md">
          <Typography sx={{color:"grey.100"}} variant="h3" fontWeight="bold" gutterBottom>
            Automotive Industry Software Development Services
          </Typography>
          <Typography variant="h5" sx={{ color: "rgb(200,150,220)", mb: 3 }}>
            Driving Digital Transformation in the Automotive Sector
          </Typography>
          <Typography sx={{ color: "rgba(226, 203, 235, 1)", mb: 5 }} fontSize="1.2rem">
            The automotive industry is evolving faster than ever — from connected
            vehicles and smart manufacturing to AI-driven supply chains and
            digital customer experiences. Our software development services empower
            automotive companies to accelerate innovation and deliver intelligent
            mobility solutions.
          </Typography>
          <Button
            sx={{
              bgcolor: "rgb(116,40,148)",
              color: "white",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "rgb(96,30,128)" },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Grid>

      {/* Challenges */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
          Industry Challenges
        </Typography>
        <Typography
          textAlign="center"
          sx={{ color: "gray.400", mb: 5, fontSize: "1.1rem" }}
        >
          Automotive businesses face complex challenges in today's connected world:
        </Typography>
        <Card
          sx={{
            backgroundColor: "#ffffffff",
            border: "1px solid rgb(116,40,148)",
            borderRadius: 3,
            maxWidth: 700,
            mx: "auto",
            p: 3,
          }}
        >
          <Stack spacing={2}>
            {challenges.map((item, i) => (
              <Stack direction="row" spacing={2} key={i} alignItems="flex-start">
                <CheckCircle sx={{ color: "rgb(116,40,148)" }} />
                <Typography color="black">{item}</Typography>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Container>

      {/* Solutions */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
          Our Software Development Solutions
        </Typography>
        <Typography
          textAlign="center"
          sx={{ color: "gray.400", mb: 6, fontSize: "1.1rem" }}
        >
          We help automotive manufacturers, OEMs, dealers, and mobility providers
          transform operations through modern, scalable software solutions:
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {solutions.map((s, i) => (
            <Card
              key={i}
              sx={{
                width: 320,
                backgroundColor: "#ffffffff",
                border: "1px solid rgb(116,40,148)",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  borderColor: "rgb(146,70,178)",
                  boxShadow: "0 0 15px rgba(116,40,148,0.5)",
                },
              }}
            >
              <CardContent>
                <Grid mb={2}>{s.icon}</Grid>
                <Typography color="black" variant="h6" fontWeight="bold" gutterBottom>
                  {s.title}
                </Typography>
                <Typography color="black">{s.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>

      {/* Business Impact */}
      <Grid sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
            Business Impact
          </Typography>
          <Typography
            textAlign="center"
            sx={{ color: "gray.400", mb: 5, fontSize: "1.1rem" }}
          >
            By leveraging our software expertise, automotive clients achieve:
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={3}
            maxWidth={900}
            mx="auto"
          >
            {impacts.map((impact, i) => (
              <Card
                key={i}
                sx={{
                  flex: "1 1 350px",
                  backgroundColor: "#ffffffff",
                  border: "1px solid rgb(116,40,148)",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { borderColor: "rgb(146,70,178)" },
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TrendingUp sx={{ color: "rgb(116,40,148)" }} />
                  <Typography color="black">{impact}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Grid>

      {/* Why Choose Us */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          Why Choose Us
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={3}
          justifyContent="center"
          maxWidth={900}
          mx="auto"
        >
          {whyChoose.map((w, i) => (
            <Grid key={i} sx={{ flex: "1 1 350px", display: "flex", gap: 2 }}>
              <CheckCircle sx={{ color: "rgb(116,40,148)", fontSize: 28 }} />
              <Grid>
                <Typography variant="h6" fontWeight="bold">
                  {w.title}
                </Typography>
                <Typography color="gray.400">{w.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>

      {/* CTA Section */}
      <Grid
        sx={{
          py: 10,
          textAlign: "center",
          background:
            "linear-gradient(to bottom right, rgb(116,40,148), rgb(76,20,108), #5b5b5bff)",
        }}
      >
        <Container>
          <Typography sx={{color: "grey.100"}} variant="h4" fontWeight="bold" mb={3}>
            Transform Your Automotive Operations with Technology
          </Typography>
          <Typography
            sx={{ color: "grey.200", maxWidth: 700, mx: "auto", mb: 4 }}
          >
            Whether you're a manufacturer, supplier, or mobility startup, we help
            you harness technology to drive smarter, faster, and greener growth.
          </Typography>
          <Button
            sx={{
              bgcolor: "white",
              color: "rgb(116,40,148)",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "rgb(240,240,240)" },
            }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Grid>

      {/* Footer */}
      <Divider sx={{ borderColor: "rgb(116,40,148)" }} />
      <Grid sx={{ py: 3, textAlign: "center", bgcolor: "black" }}>
        <Typography color="white">
          © 2025 Solverines Technology Solutions Pvt. Ltd. 2024. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AutomotiveLandingPage;
