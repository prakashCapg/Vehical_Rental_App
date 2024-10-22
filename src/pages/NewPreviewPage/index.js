import React from "react";
import NewProductListCard from "../../newComponents/NewProductListCard";
import NewTab from "../../newComponents/NewTab";
import Tracking from "../../newComponents/NewTracking";

function NewPreviewPage() {
  const steps = [
    { label: "Booked", icon: <div>📅</div> },
    { label: "Under Preparation", icon: <div>🔄</div> },
    { label: "Ready for Delivery", icon: <div>🚚</div> },
    { label: "Delivered", icon: <div>✅</div> },
    { label: "Completed", icon: <div>🎉</div> },
  ];
  return (
    <div>
      <div className="py-5 pl-3 text-center text-xl font-bold">
        <h1>Component Library</h1>{" "}
      </div>
      <hr />
      <div className="p-5">
        <p> Button component section</p>
      </div>
      <hr />
      <div className="p-5">
        <p> Accordion component section</p>
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
      </div>
      <hr />
      <div className="p-5">
        <p> Product List Card component section</p>
        <NewProductListCard />
      </div>
      <hr />
      <div className="p-5">
        <p> Product Row component section </p>
      </div>
      <hr />
      <div className="p-5">
        <p> Tabs component section </p>
        <br></br>
        <NewTab>
          <div label="Car"></div>
          <div label="Bike"></div>
          <div label="SUV"></div>
        </NewTab>
      </div>
      <hr />
      <div className="p-5">
        <p> Card Wrapper section </p>
      </div>
      <hr />
      <div className="p-5">
        <p> Calendar Widget 1 section </p>
      </div>
      <hr />
      <div className="p-5">
        <p> Tracking section </p>
        <br></br>
        <Tracking status="Booked" steps={steps} currentStep={0} />
      </div>
      <hr />
    </div>
  );
}

export default NewPreviewPage;
