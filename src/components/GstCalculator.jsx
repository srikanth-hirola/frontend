import React, { useState } from 'react';

const GstCalculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(18); // Set default GST rate to 18%
  const [cgstAmount, setCgstAmount] = useState(0);
  const [sgstAmount, setSgstAmount] = useState(0);
  const [cessAmount, setCessAmount] = useState(0);
  const [totalGstAmount, setTotalGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateGst = (inputAmount, newGstRate) => {
    let calculatedGst = (inputAmount * newGstRate) / 100;
    let newCessAmount = 0;
  
    // Check for GST rates with cess
    if (newGstRate === 14) {
      const cessRate = 12; // Cess for 14% GST
      newCessAmount = (inputAmount * cessRate) / 100;
      calculatedGst += newCessAmount;
      setCessAmount(newCessAmount);
    } else if (newGstRate === 28) {
      const cessRate = 12; // Cess for 28% GST
      newCessAmount = (inputAmount * cessRate) / 100;
      calculatedGst += newCessAmount;
      setCessAmount(newCessAmount);
    } else if (newGstRate === 60) {
      const cessRate = 60; // Cess for 60% GST
      newCessAmount = (inputAmount * cessRate) / 100;
      calculatedGst += newCessAmount;
      setCessAmount(newCessAmount);
    } else {
      setCessAmount(0); // Reset cess amount if not applicable
    }
  
    const cgst = calculatedGst / 2;
    const sgst = calculatedGst / 2;
    setCgstAmount(cgst);
    setSgstAmount(sgst);
    setTotalGstAmount(calculatedGst);
    setTotalAmount(inputAmount + calculatedGst + newCessAmount); // Include cess in total amount
  };
  

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
    calculateGst(inputAmount, gstRate);
  };

  const handleGstRateChange = (e) => {
    const newGstRate = parseFloat(e.target.value);
    setGstRate(newGstRate);
    calculateGst(amount, newGstRate);
  };
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleIconClick = () => {
    setExpanded(!expanded);
    if (searchTerm) {
      // Perform search action with searchTerm
      console.log(`Searching for: ${searchTerm}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      // Perform search action with searchTerm
      console.log(`Searching for: ${searchTerm}`);
    }
  };

 
  return (
    <div>
      <h2>GST Calculator</h2>
      <div>
        <label>Enter Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Select GST Rate (%):</label>
        <select value={gstRate} onChange={handleGstRateChange}>
          <option value={0.1}>0.1%</option>
          <option value={0.25}>0.25%</option>
          <option value={1.5}>1.5%</option>
          <option value={3}>3%</option>
          <option value={5}>5%</option>
          <option value={6}>6%</option>
          <option value={12}>12%</option>
          <option value={13.8}>13.8%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
          <option value={14}>Cess 14%</option>
          <option value={28}>Cess 28%</option>
          <option value={60}> Cess 60%</option>
        </select>
      </div>
      <div>
      <p>CGST Amount: {cgstAmount.toFixed(2)}</p>
        <p>SGST Amount: {sgstAmount.toFixed(2)}</p>
        {cessAmount !== 0 && <p>Cess Amount: {cessAmount.toFixed(2)}</p>}
        <p>Total GST Amount: {totalGstAmount.toFixed(2)}</p>
        <p>Total Amount (including GST): {totalAmount.toFixed(2)}</p>
      </div>
      <div className="search-container">
      <form onSubmit={handleSubmit}>
      <div className={`search-box ${expanded ? 'expanded' : ''}`}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleIconClick}>
            <img
              src="search-icon.png" // Replace with your search icon image
              alt="Search"
              className="search-icon"
            />
          </button>
          
                </div>
                </form>
    </div>
    </div>
  );
};

export default GstCalculator;
