import React, { useState } from "react";
import NewAccordion from "../../newComponents/NewAccordion";
import NewButton from "../../newComponents/NewButton";
import NewDatePickerInput from "../../newComponents/NewDatePickerInput";
import NewPopUp from "../../newComponents/NewPopUp";
import NewCardWrapper from "../../newComponents/NewCardWrapper";
import NewProductRowCard from "../../newComponents/NewProductRowCard";
import NewRating from "../../newComponents/NewRating";

import CalendarWidget from "../../newComponents/CalenderWidget 1";
import InputField from "../../components/InputField_Text/InputField_text";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import InputFieldCheckbox from "../../components/InputField_checkbox";

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
  return (
    <div>
      <div className="py-5 pl-3 text-center text-xl font-bold">
        <h1>Component Library</h1>{" "}
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
      </div>
      <hr />
      <div className="p-5">
        <p> Product Row component section </p>
        <NewProductRowCard
          imageSrc={"/images/car1.jpg"}
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
      </div>
      <hr />
      <div className="p-5">
        <p> Card Wrapper section </p>
        <NewCardWrapper
          height={"300px"}
          border={"none"}
          children={<div style={{ height: "500px" }}></div>}
        />
      </div>
      <hr />
      <div className="p-5">
        <p> Calendar Widget 1 section </p>
        <CalendarWidget
          selectedDate={selectedDate}
          onSelectedDate={handleSelectedDate}
        />
      </div>
      <hr />
    </div>
  );
};

export default NewPreviewPage;
