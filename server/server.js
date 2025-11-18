import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

export const companies = [
  {
    id: 1,
    name: "TechVision Solutions",
    location: "Hyderabad",
    industry: "Software",
    foundedYear: 2015,
    employees: 250,
    revenue: "15M USD"
  },
  {
    id: 2,
    name: "GreenEra Industries",
    location: "Bangalore",
    industry: "Manufacturing",
    foundedYear: 2008,
    employees: 1200,
    revenue: "120M USD"
  },
  {
    id: 3,
    name: "CloudSphere Labs",
    location: "Pune",
    industry: "Cloud Computing",
    foundedYear: 2019,
    employees: 180,
    revenue: "8M USD"
  },
  {
    id: 4,
    name: "FinEdge Analytics",
    location: "Mumbai",
    industry: "Finance",
    foundedYear: 2012,
    employees: 340,
    revenue: "40M USD"
  },
  {
    id: 5,
    name: "EduSpark Technologies",
    location: "Delhi",
    industry: "EdTech",
    foundedYear: 2020,
    employees: 95,
    revenue: "1.5M USD"
  },
  {
    id: 6,
    name: "AeroDynamics Pvt Ltd",
    location: "Chennai",
    industry: "Aerospace",
    foundedYear: 2005,
    employees: 750,
    revenue: "210M USD"
  },
  {
    id: 7,
    name: "UrbanCart Retail",
    location: "Hyderabad",
    industry: "E-Commerce",
    foundedYear: 2017,
    employees: 310,
    revenue: "22M USD"
  },
  {
    id: 8,
    name: "NextGen Robotics",
    location: "Bangalore",
    industry: "Robotics",
    foundedYear: 2016,
    employees: 190,
    revenue: "18M USD"
  },
  {
    id: 9,
    name: "SolarWave Energy",
    location: "Ahmedabad",
    industry: "Renewable Energy",
    foundedYear: 2014,
    employees: 500,
    revenue: "70M USD"
  },
  {
    id: 10,
    name: "HealthBridge Pvt Ltd",
    location: "Kochi",
    industry: "Healthcare",
    foundedYear: 2011,
    employees: 620,
    revenue: "52M USD"
  },
  {
    id: 11,
    name: "CyberShield Networks",
    location: "Bangalore",
    industry: "Cybersecurity",
    foundedYear: 2013,
    employees: 420,
    revenue: "35M USD"
  },
  {
    id: 12,
    name: "MetroBuild Constructions",
    location: "Hyderabad",
    industry: "Construction",
    foundedYear: 2001,
    employees: 2000,
    revenue: "300M USD"
  },
  {
    id: 13,
    name: "GlobalFoods Pvt Ltd",
    location: "Chennai",
    industry: "Food Processing",
    foundedYear: 1998,
    employees: 1600,
    revenue: "180M USD"
  },
  {
    id: 14,
    name: "AutoDrive Motors",
    location: "Pune",
    industry: "Automobile",
    foundedYear: 2007,
    employees: 850,
    revenue: "250M USD"
  },
  {
    id: 15,
    name: "AgriBloom Tech",
    location: "Indore",
    industry: "AgriTech",
    foundedYear: 2021,
    employees: 80,
    revenue: "900K USD"
  },
  {
    id: 16,
    name: "UrbanStay Hotels",
    location: "Goa",
    industry: "Hospitality",
    foundedYear: 2010,
    employees: 370,
    revenue: "27M USD"
  },
  {
    id: 17,
    name: "Shopverse Online",
    location: "Delhi",
    industry: "E-Commerce",
    foundedYear: 2018,
    employees: 140,
    revenue: "12M USD"
  },
  {
    id: 18,
    name: "MediCore Diagnostics",
    location: "Bangalore",
    industry: "Healthcare",
    foundedYear: 2004,
    employees: 650,
    revenue: "48M USD"
  },
  {
    id: 19,
    name: "AquaPure Systems",
    location: "Hyderabad",
    industry: "Water Technology",
    foundedYear: 2016,
    employees: 210,
    revenue: "16M USD"
  },
  {
    id: 20,
    name: "VeloTech Sports",
    location: "Mumbai",
    industry: "Sports Equipment",
    foundedYear: 2012,
    employees: 115,
    revenue: "7M USD"
  },
  {
    id: 21,
    name: "BrightEdge Lighting",
    location: "Delhi",
    industry: "Electronics",
    foundedYear: 2009,
    employees: 480,
    revenue: "64M USD"
  },
  {
    id: 22,
    name: "Skybound Airlines",
    location: "Chennai",
    industry: "Aviation",
    foundedYear: 1994,
    employees: 5200,
    revenue: "1.4B USD"
  },
  {
    id: 23,
    name: "ByteWave Technologies",
    location: "Bangalore",
    industry: "IT Services",
    foundedYear: 2013,
    employees: 560,
    revenue: "32M USD"
  },
  {
    id: 24,
    name: "FreshNest Organics",
    location: "Jaipur",
    industry: "Food & Agriculture",
    foundedYear: 2017,
    employees: 150,
    revenue: "3M USD"
  },
  {
    id: 25,
    name: "NovaPrint Media",
    location: "Kolkata",
    industry: "Printing",
    foundedYear: 2003,
    employees: 500,
    revenue: "22M USD"
  },
  {
    id: 26,
    name: "OptiChain Logistics",
    location: "Mumbai",
    industry: "Logistics",
    foundedYear: 2006,
    employees: 720,
    revenue: "90M USD"
  },
  {
    id: 27,
    name: "WaveConnect Telecom",
    location: "Hyderabad",
    industry: "Telecom",
    foundedYear: 2002,
    employees: 3100,
    revenue: "540M USD"
  },
  {
    id: 28,
    name: "GameStorm Studios",
    location: "Pune",
    industry: "Gaming",
    foundedYear: 2018,
    employees: 140,
    revenue: "5M USD"
  },
  {
    id: 29,
    name: "FinTech Bridge",
    location: "Bangalore",
    industry: "FinTech",
    foundedYear: 2016,
    employees: 260,
    revenue: "21M USD"
  },
  {
    id: 30,
    name: "PureNature Cosmetics",
    location: "Delhi",
    industry: "Cosmetics",
    foundedYear: 2011,
    employees: 410,
    revenue: "38M USD"
  }
];


app.get("/companies", (req, res) => {
  res.json({
    success: true,
    total: companies.length,
    data: companies
  });
});

app.get("/companies/:id", (req, res) => {
  const company = companies.find(c => c.id === Number(req.params.id));
  if (!company)
    return res.status(404).json({ success: false, message: "Not Found" });

  res.json({ success: true, data: company });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
