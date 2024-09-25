
import React from 'react'
import img from'./img1.jpg'

import Popup from "../../components/PopUp/Popup";
import InputFieldText from "../../components/InputField_Text/InputField_text";
import Tabs from "../../components/Tabs";
import Buttons from "../../components/button/Buttons";
import InputFieldDate from "../../components/InputField_Date/InputField_Date";

import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";
import { Link } from 'react-router-dom';


const Preview = ({ menuItems }) => {

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
    <div>
      <h1>Preview</h1>
      <h2>Menu Items:</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>

   
      <Popup />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <Tabs tabs={tabs} />

      <Buttons></Buttons>

      <Dropdown></Dropdown>

      <Card1></Card1>
    </div>
  );
};

export default Preview;
