import NewProductListCard from "../../newComponents/NewProductListCard";
import NewTab from "../../newComponents/NewTab";
import Tracking from "../../newComponents/NewTracking";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import NewDatePickerInput from "../../newComponents/NewDatePickerInput";

function NewPreviewPage() {
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
        <br></br>
        <Tracking status="Under Preparation" steps={steps} currentStep={1} />
        <br></br>
        <Tracking status="Ready for Delivery" steps={steps} currentStep={2} />
        <br></br>
        <Tracking status="Delivered" steps={steps} currentStep={3} />
        <br></br>
        <Tracking status="Completed" steps={steps} currentStep={4} />
        <br></br>
        <Tracking status="Cancelled" steps={steps} currentStep={5} />
        <br></br>
      </div>
      <hr />
    </div>
  );
}

export default NewPreviewPage;
