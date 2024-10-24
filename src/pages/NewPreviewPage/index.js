import React, { useState } from "react";
import NewAccordion from "../../newComponents/NewAccordion";
import NewButton from "../../newComponents/NewButton";
import NewDatePickerInput from "../../newComponents/NewDatePickerInput";
import NewPopUp from "../../newComponents/NewPopUp";
import NewCardWrapper from "../../newComponents/NewCardWrapper";
import NewProductRowCard from "../../newComponents/NewProductRowCard";
import NewRating from "../../newComponents/NewRating";
import productrowimage from "../../Data/images/car.jpg";
import CalendarWidget from "../../newComponents/CalenderWidget 1";
import InputField from "../../components/InputField_Text/InputField_text";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import InputFieldCheckbox from "../../components/InputField_checkbox";
import NewProductListCard from "../../newComponents/NewProductListCard";
import NewTab from "../../newComponents/NewTab";
import Tracking from "../../newComponents/NewTracking";
import sampleImage from "../../Data/images/car4.jpg";

const NewPreviewPage = () => {
  const [isopen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("Booked");

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const handleDateInput = (date) => {
    setDate(date);
  };

  const handleInputChange = (value) => {
    setTitle(value);
  };

  const handleSelect = (value) => {
    setType(value);
  };

  const handleStepChange = (stepIndex) => {
    const stepLabels = [
      "Booked",
      "Under Preparation",
      "Ready for Delivery",
      "Delivered",
      "Completed",
      "Cancelled",
    ];

    if (stepIndex >= 0 && stepIndex < stepLabels.length) {
      setStatus(stepLabels[stepIndex]);
      console.log(`Status changed to: ${stepLabels[stepIndex]}`);
    }
  };

  return (
    <div>
      <div className="py-5 pl-3 text-center text-xl font-bold">
        <h1>Component Library</h1>
      </div>
      <hr />
      <div className="p-5">
        <p> Button component section</p>
        <NewButton type="primary" label="DummyText" />
        <NewButton type="secondary" label="DummyText" />
        <NewButton type="tertiary" label="DummyText" />
        <NewButton type="primary-outline" label="DummyText" />
        <NewButton type="secondary-outline" label="DummyText" />
        <NewButton type="disabled-btn" label="DummyText" />
      </div>
      <hr />
      <div className="p-5">
        <p> Accordion component section</p>
        <NewAccordion header={"Header"} children={"Body"} />
      </div>
      <hr />
      <div className="p-5">
        <p> Input component section</p>
        <InputField
          label="Vehicle Name:"
          inputType="letterandnumber"
          inputformValue={title}
          onValueInput={handleInputChange}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> checkbox component section</p>
        <InputFieldCheckbox key="fueltype" label="fuelType" />
      </div>
      <hr />
      <div className="p-5">
        <p> Date picker input component section</p>
        <NewDatePickerInput
          label="Set Date : "
          setDateInput={handleDateInput}
          date={date}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Single Select drop down component section</p>
        <SingleSelectDropdown
          label="Vehicle&nbsp;Type&nbsp;:&nbsp;"
          options={["car", "bike", "suv"]}
          optionlabel="Select Vehicle Type"
          formselectedOption={type}
          onSelect={handleSelect}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Rating component section</p>
        <NewRating />
      </div>
      <hr />
      <div className="p-5">
        <p> Price Range component section</p>
      </div>
      <hr />
      <div className="p-5">
        <p> Pop Up component section</p>
        <NewButton
          type="primary"
          label="popup"
          onClick={() => setIsOpen(true)}
        />
        <NewPopUp
          isOpen={isopen}
          setIsOpen={setIsOpen}
          children={"Good Morning"}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Product List Card component section</p>
        <NewProductListCard
          imagePath={sampleImage}
          category="Car"
          rentPricePerHour="500"
          description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
          onClick
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Product Row component section</p>
        <NewProductRowCard
          imageSrc={productrowimage}
          altText="car1"
          brand="Tata"
          model="Nexon"
          transmission="Manual"
          fuelType="Gasoline"
          description="This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text This is dummy text"
          category="Compact SUV"
          purchasePrice={20000}
          registrationNumber="AP76OP9876"
          rentPricePerHour={20}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Tabs component section </p>
        <NewTab>
          <div label="Car">
            <p>Car vehicles List </p>
            <NewProductListCard
              imagePath={sampleImage}
              category="Car"
              rentPricePerHour="500"
              description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
              onClick
            />
          </div>
          <div label="Bike">
            <p>Bike vehicles List </p>
            <NewProductListCard
              imagePath={sampleImage}
              category="Car"
              rentPricePerHour="500"
              description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
              onClick
            />
            <NewProductListCard
              imagePath={sampleImage}
              category="Car"
              rentPricePerHour="500"
              description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
              onClick
            />
          </div>
          <div label="SUV">
            <p>SUV vehicles List </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <NewProductListCard
                imagePath={sampleImage}
                category="Car"
                rentPricePerHour="500"
                description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
                onClick
              />
              <NewProductListCard
                imagePath={sampleImage}
                category="Car"
                rentPricePerHour="500"
                description="A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy."
                onClick
              />
            </div>
          </div>
        </NewTab>
      </div>
      <hr />
      <div className="p-5">
        <p> Card Wrapper section</p>
        <NewCardWrapper
          height={"300px"}
          border={"none"}
          children={<div style={{ height: "500px" }}></div>}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Calendar Widget 1 section</p>
        <CalendarWidget
          selectedDate={selectedDate}
          onSelectedDate={handleSelectedDate}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Tracking section </p>
        <p>When the Status is Booked</p>
        <Tracking status="Booked" onStepChange={handleStepChange} />
        <br></br>
        <p>When the Status is Under Preparation</p>
        <Tracking status="Under Preparation" onStepChange={handleStepChange} />
        <br></br>
        <p>When the Status is Ready for Delivery</p>
        <Tracking status="Ready for Delivery" onStepChange={handleStepChange} />
        <br></br>
        <p>When the Status is Delivered</p>
        <Tracking status="Delivered" onStepChange={handleStepChange} />
        <br></br>
        <p>When the Status is Completed</p>
        <Tracking status="Completed" onStepChange={handleStepChange} />
        <br></br>
        <p>When the Status is Cancelled</p>
        <Tracking status="Cancelled" onStepChange={handleStepChange} />
        <br></br>
      </div>
      <hr />
    </div>
  );
};

export default NewPreviewPage;
