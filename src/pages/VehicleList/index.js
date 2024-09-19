import React from "react";
import Tabs from "../../components/Tabs"; // Adjust the import path as needed

const App = () => {
  const tabs = ["Cars", "Bikes", "6 Seater"];

  const carData = [
    {
      id: 1,
      image: "/images/car1.jpg",
      title: "Luxury Sedan",
      price: "50",
      description: "A premium luxury sedan with all the features you need.",
      features: ["Leather seats", "Sunroof", "Navigation system"],
    },
    {
      id: 2,
      image: "/images/car2.jpg",
      title: "Sporty Coupe",
      price: "60",
      description: "A stylish and fast coupe with impressive performance.",
      features: [
        "High-speed acceleration",
        "Sport suspension",
        "Bluetooth connectivity",
      ],
    },
    {
      id: 3,
      image: "/images/car3.jpg",
      title: "Electric SUV",
      price: "55",
      description: "An eco-friendly electric SUV with a long battery range.",
      features: ["Zero emissions", "Advanced autopilot", "Wireless charging"],
    },
    {
      id: 4,
      image: "/images/car4.jpg",
      title: "Family Van",
      price: "40",
      description:
        "A spacious van perfect for family trips and daily commutes.",
      features: [
        "Three rows of seats",
        "Rear entertainment system",
        "Extended cargo space",
      ],
    },
    {
      id: 5,
      image: "/images/car5.jpg",
      title: "Convertible Roadster",
      price: "65",
      description: "A fun-to-drive convertible roadster for those sunny days.",
      features: ["Retractable roof", "Sporty handling", "Premium audio system"],
    },
    {
      id: 6,
      image: "/images/car6.jpg",
      title: "Compact Hatchback",
      price: "30",
      description: "A compact and efficient hatchback for city driving.",
      features: ["Fuel-efficient", "Compact size", "Smart parking assist"],
    },
    {
      id: 7,
      image: "/images/car7.jpg",
      title: "Off-Road Truck",
      price: "70",
      description:
        "A rugged truck built for off-road adventures and heavy-duty tasks.",
      features: ["All-terrain tires", "Heavy-duty suspension", "Tow package"],
    },
    {
      id: 8,
      image: "/images/car8.jpg",
      title: "Hybrid Sedan",
      price: "45",
      description:
        "A hybrid sedan offering a blend of performance and fuel efficiency.",
      features: ["Hybrid engine", "Regenerative braking", "Smart drive modes"],
    },
    {
      id: 9,
      image: "/images/car9.jpg",
      title: "Luxury SUV",
      price: "75",
      description: "An opulent SUV with top-notch features and comfort.",
      features: [
        "Heated and cooled seats",
        "Premium leather interior",
        "Advanced safety features",
      ],
    },
    {
      id: 10,
      image: "/images/car10.jpg",
      title: "Classic Muscle Car",
      price: "80",
      description:
        "A classic muscle car with powerful performance and a nostalgic design.",
      features: ["V8 engine", "Retro styling", "High-performance brakes"],
    },
  ];

  const bikeData = [
    {
      id: 1,
      image: "/images/bike1.jpg",
      title: "Yamaha MT-15",
      price: 25,
      description: "A streetfighter with high torque and aggressive styling.",
      features: ["155cc", "Single-cylinder", "ABS"],
    },
    {
      id: 2,
      image: "/images/bike2.jpg",
      title: "Kawasaki Ninja 300",
      price: 35,
      description: "A sleek, lightweight sports bike with great handling.",
      features: ["300cc", "Parallel-twin", "ABS"],
    },
    {
      id: 3,
      image: "/images/bike3.jpg",
      title: "Honda CB350",
      price: 30,
      description: "A retro-inspired cruiser with a modern twist.",
      features: ["348cc", "Single-cylinder", "LED lights"],
    },
    {
      id: 4,
      image: "/images/bike4.jpg",
      title: "Suzuki Gixxer SF",
      price: 28,
      description: "A fully-faired sports bike with top-notch performance.",
      features: ["155cc", "Single-cylinder", "Fuel-injected"],
    },
    {
      id: 5,
      image: "/images/bike5.jpg",
      title: "Royal Enfield Classic 350",
      price: 32,
      description: "An iconic retro-styled cruiser with a robust engine.",
      features: ["346cc", "Single-cylinder", "ABS"],
    },
    {
      id: 6,
      image: "/images/bike6.jpg",
      title: "BMW G 310 R",
      price: 40,
      description: "A compact roadster with German engineering excellence.",
      features: ["313cc", "Single-cylinder", "ABS"],
    },
    {
      id: 7,
      image: "/images/bike7.jpg",
      title: "KTM Duke 390",
      price: 38,
      description: "A high-performance naked bike for thrill seekers.",
      features: ["373cc", "Single-cylinder", "Ride-by-wire"],
    },
    {
      id: 8,
      image: "/images/bike8.jpg",
      title: "Ducati Monster 821",
      price: 55,
      description:
        "An Italian masterpiece with aggressive styling and performance.",
      features: ["821cc", "L-twin", "Traction control"],
    },
    {
      id: 9,
      image: "/images/bike9.jpg",
      title: "Harley-Davidson Iron 883",
      price: 60,
      description:
        "A heavy cruiser with a rebellious spirit and timeless design.",
      features: ["883cc", "V-twin", "Custom options"],
    },
    {
      id: 10,
      image: "/images/bike10.jpg",
      title: "Aprilia RS 660",
      price: 50,
      description: "A cutting-edge middleweight sport bike with advanced tech.",
      features: ["660cc", "Parallel-twin", "Quick shifter"],
    },
  ];

  const sixSeaterData = [
    {
      id: 1,
      image: "/images/6seater1.jpg",
      title: "Luxury 6-Seater",
      price: "85",
      description: "Spacious and comfortable for family trips.",
      features: ["6 seats", "Panoramic roof", "Advanced safety features"],
    },
  ];

  return (
    <div>
      <Tabs
        tabs={tabs}
        carData={carData}
        bikeData={bikeData}
        sixSeaterData={sixSeaterData}
      />
    </div>
  );
};

export default App;
