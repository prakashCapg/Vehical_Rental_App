import React, { useState } from "react";
import BookingPopup from "../../components/PopUp/Popup";
import img from "./img1.jpg";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import TestButton from "./TestButton";
import TestCard1 from "./TestCard1";
import TestDropdown from "./TestDropdown";
import Popup from '../../components/PopUp/Popup';

import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
import InputField_Search from "../../components/InputField_Search";

import { getVehicleDetailsByIdRef } from "../../services/booking-details.service";
import Calendar from "../../components/Calendar";


const Preview = () => {

  const cardData=[
    {id:1,image:img,title:'BMW',price:'800',description: "A reliable compact car with excellent fuel efficiency.",features: ["Automatic", "Air Conditioning", "Bluetooth", "Backup Camera"]},
    {id:1,image:img,title:'BMW',price:'800',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'800',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."},
    {id:1,image:img,title:'BMW',price:'20000',description: "A reliable compact car with excellent fuel efficiency."}

  ]
  
  const tabs = ["Car", "Bike", "6 Seater"];

  return (
    <div className="min-h-screen">
      <h1>Preview</h1>

      <Popup />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

     

      <ImageUpload />
      <TestButton></TestButton>
      <TestCard1></TestCard1>
      <TestDropdown></TestDropdown>

      <InputField_Search apiEndPoint='http://localhost:3002/bookings' navigation='/employee/booking-details'/>
      
      <Calendar />
      
    </div>
  );
};

export default Preview;
