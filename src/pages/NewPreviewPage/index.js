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
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";

const NewPreviewPage = () => {
  const [isopen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

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

  const steps = [
    { id: 1, label: "Booked", icon: <BeenhereIcon /> },
    { id: 2, label: "Under Preparation", icon: <ConstructionIcon /> },
    { id: 3, label: "Ready for Delivery", icon: <AirplaneTicketIcon /> },
    { id: 4, label: "Delivered", icon: <DoneOutlineIcon /> },
    { id: 5, label: "Completed", icon: <DoneAllIcon /> },
    { id: 6, label: "Cancelled", icon: <CancelIcon /> },
  ];

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
        <NewProductListCard />
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
            <NewProductListCard />
          </div>
          <div label="Bike">
            <p>Bike vehicles List </p>
            <NewProductListCard />
            <NewProductListCard />
          </div>
          <div label="SUV">
            <p>SUV vehicles List </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <NewProductListCard />
              <NewProductListCard />
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
        <Tracking status="Booked" steps={steps} currentStep={0} />
        <br></br>
        <p>When the Status is Under Preparation</p>
        <Tracking status="Under Preparation" steps={steps} currentStep={1} />
        <br></br>
        <p>When the Status is Ready for Delivery</p>
        <Tracking status="Ready for Delivery" steps={steps} currentStep={2} />
        <br></br>
        <p>When the Status is Delivered</p>
        <Tracking status="Delivered" steps={steps} currentStep={3} />
        <br></br>
        <p>When the Status is Completed</p>
        <Tracking status="Completed" steps={steps} currentStep={4} />
        <br></br>
        <p>When the Status is Cancelled</p>
        <Tracking status="Cancelled" steps={steps} currentStep={5} />
        <br></br>
      </div>
      <hr />
    </div>
  );
};

export default NewPreviewPage;
