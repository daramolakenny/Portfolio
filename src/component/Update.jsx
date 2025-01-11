import React from 'react'

export const Update = () => {
  return (
    <div className="bg-[#191923] pb-4">
      <div className="flex items-start justify-start ml-8 md:left-10 md:flex">
        <p className="text-gray-100">
          &copy; {new Date().getFullYear()} Daramola Kehinde. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Update;