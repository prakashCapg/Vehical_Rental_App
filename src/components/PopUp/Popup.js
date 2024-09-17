import React, { useState } from "react";
import "../../components/PopUp/Popup.css";

const Popup = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

//booking component
const BookingPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);

  const openPopup = () => setPopupVisible(true);
  const closePopup = () => {
    setPopupVisible(false);
    setConfirmationVisible(false);
  };

  const handleBook = () => setConfirmationVisible(true);

  const confirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => setPopupVisible(false), 2000);
    setConfirmationVisible(true);
  };

  const cancelBooking = () => {
    setBookingConfirmed(false);
    setTimeout(() => setPopupVisible(false), 2000);
    setConfirmationVisible(true);
  };

  return (
    <>
      <button onClick={openPopup}>Booking Popup</button>
      <Popup isVisible={isPopupVisible} onClose={closePopup} title="Booking">
        {!isConfirmationVisible ? (
          <div>
            <p>Are you sure you want to book?</p>
            <div className="popup-actions">
              <button className="popup-action" onClick={confirmBooking}>
                Yes
              </button>
              <button className="popup-action" onClick={cancelBooking}>
                No
              </button>
            </div>
          </div>
        ) : isBookingConfirmed ? (
          <p>Your booking has been confirmed!</p>
        ) : (
          <p>Your booking has been cancelled!</p>
        )}
      </Popup>
    </>
  );
};

export default BookingPopup;

// Login Popup Component
// const LoginPopup = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => setPopupVisible(true);
//   const closePopup = () => setPopupVisible(false);

//   return (
//     <>
//       <button onClick={openPopup}>Open Login Popup</button>
//       <Popup isVisible={isPopupVisible} onClose={closePopup} title="Login">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <div className="popup-actions">
//           <button className="popup-action">Login</button>
//         </div>
//       </Popup>
//     </>
//   );
// };
