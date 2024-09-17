import React from "react";
import Card1 from "./Card1";

const TestCard1 = () => {
  const items = [
    {
      imageSrc: "https://via.placeholder.com/150",
      altText: "Placeholder Image 1",
      title: "Vehicle 1",
      description: "This is a description for Vehicle 1.",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      altText: "Placeholder Image 2",
      title: "Vehicle 2",
      description: "This is a description for Vehicle 2.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Card1
          key={index}
          imageSrc={item.imageSrc}
          altText={item.altText}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default TestCard1;
