import React, { useState } from 'react';
import axios from 'axios';

const FormPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: '',
    refereeName: '',
    phoneNo: '',
  });

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/submit-form', formData);
      alert('Form submitted successfully!');
      setIsPopupVisible(false);
      setFormData({
        name: '',
        email: '',
        referralCode: '',
        refereeName: '',
        phoneNo: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form!');
    }
  };
  return (<div className="relative">
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded"
    onClick={togglePopup}
  >
    Refer Now
  </button>

  {isPopupVisible && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">REFER</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referralCode">
              Referral Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="referralCode"
              type="text"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter referral code"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeName">
              Referee Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="refereeName"
              type="text"
              value={formData.refereeName}
              onChange={handleChange}
              placeholder="Enter referee name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">
              Phone No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNo"
              type="text"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              type="submit"
            >
              Submit
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )}
</div>);
};

export default FormPopup;
