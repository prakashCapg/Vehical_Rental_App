import React from "react";
<<<<<<< HEAD
import BookingPopup from "../../components/PopUp/Popup";
=======
import img from "./img1.jpg";

import Popup from "../../components/PopUp/Popup";
>>>>>>> 8e555c1f4702c3873918ca853d4538129f3b1d95
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import TestButton from "./TestButton";
import TestCard1 from "./TestCard1";
import TestDropdown from "./TestDropdown";

import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";

const Preview = () => {
  const cardData = [
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
      features: ["Automatic", "Air Conditioning", "Bluetooth", "Backup Camera"],
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "800",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
    {
      id: 1,
      image: img,
      title: "BMW",
      price: "20000",
      description: "A reliable compact car with excellent fuel efficiency.",
    },
  ];

  const tabs = ["Car", "Bike", "6 Seater"];
  return (
    <div>
      <h1>Preview</h1>

      <BookingPopup />
      {/*<LoginPopup />*/}

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <Tabs tabs={tabs} />

      <ImageUpload />
      <TestButton></TestButton>
      <TestCard1></TestCard1>
      <TestDropdown></TestDropdown>
    </div>
  );
};

export default Preview;
