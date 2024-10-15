import React from 'react';

const EditButton = ({ isEditing, onClick, label1, label2 }) => {
  return (
    <button
      className='btn-header bg-blue-600 ml-4 p-2'
      onClick={onClick}
    >
      {isEditing ? label1 : label2}
    </button>
  );
};

export default EditButton;
