import React, { useState } from "react";
import NewAccordion from "../../newComponents/NewAccordion";
import NewButton from "../../newComponents/NewButton";
import NewDatePickerInput from "../../newComponents/NewDatePickerInput";
import NewPopUp from "../../newComponents/NewPopUp";

const NewPreviewPage = () => {
  const [isopen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
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
      </div>
      <hr />
      <div className="p-5">
        <p> checkbox component section</p>
      </div>
      <hr />
      <div className="p-5">
        <p> Date picker input component section</p>
        <NewDatePickerInput label="Set Date : " setDate={setDate} date={date} />
      </div>
      <hr />
      <div className="p-5">
        <p> Single Select drop down component section</p>
      </div>
      <hr />

      <div className="p-5">
        <p> Rating component section</p>
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
      </div>
      <hr />
      <div className="p-5">
        <p> Tabs component section </p>
      </div>
      <hr />
      <div className="p-5">
        <p> Card Wrapper section </p>
      </div>
      <hr />
    </div>
  );
};

export default NewPreviewPage;
