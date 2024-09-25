import React from 'react';
import Header from './Header';
import Preview from '../pages/Preview';

const MenuItems = () => {
    
 const userMenuItems=[
    {name:'MakeBooking' ,path:'/user/make-booking'},
    {name:'BookingHistory',path:'/user/booking-history'}
 ]

 const employeeMenuItems=[
    { name: 'Booking Management', path: '/employee/booking-management' },
    { name: 'Delivery Management', path: '/employee/delivery-management' },
    { name: 'Vehicle Management', path: '/employee/vehicle-management' }
 ]

 const menuItems= userType === 'user' ? userMenuItems:employeeMenuItems;

return (
    <div>
        <Preview menuItems={menuItems} />
    </div>
);
};

export default MenuItems;
