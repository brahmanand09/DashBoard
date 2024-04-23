import React, { useState } from 'react';
import './Products.css';

const ProductDetails = () => {

  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    startDate: '',
    endDate: '',
    lastModified:'',
    isActive: 'Active',
    productManager: '',
    productEngineer: '',
    standards: '',
    documentRequired:'',
    additionalRequired:'',
    attributes:'',
    testLists:'',
    testEngineer:'',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch('http://localhost:4000/api/submit-form',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => 
      console.log('Data',response.json()));
      // Reset form after successful submission if needed
      setFormData({
        productId: '',
        productName: '',
        startDate: '',
        endDate: '',
        lastModified:'',
        isActive: 'Active',
        productManager: '',
        productEngineer: '',
        standards: '',
        documentRequired:'',
        additionalRequired:'',
        attributes:'',
        testLists:'',
        testEngineer:'',
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>Product Details</h2>
      <div className="form-buttons">
        <button onClick={handleSubmit}>Save</button>
      </div>
      <div className="form-content">
        <div className="form-field">
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={formData.productId}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastModified">Last Modified:</label>
          <input
            type="date"
            id="lastModified"
            value={formData.lastModified}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="isActive">Is Active:</label>
          <input
            type="text"
            id="isActive"
            value={formData.isActive}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="productManager">Product Manager:</label>
          <input
            type="text"
            id="productManager"
            value={formData.productManager}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="productEngineer">Product Engineer:</label>
          <input
            type="text"
            id="productEngineer"
            value={formData.productEngineer}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="standards">Standards:</label>
          <input
            type="text"
            id="standards"
            value={formData.standards}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="documentRequired">Document Required:</label>
          <input
            type="text"
            id="documentRequired"
            value={formData.documentRequired}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="additionalRequireds">Additional Required:</label>
          <input
            type="text"
            id="additionalRequired"
            value={formData.additionalRequired}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="attributes">Attributes:</label>
          <input
            type="text"
            id="attributes"
            value={formData.attributes}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="testLists">Test Lists:</label>
          <input
            type="text"
            id="testLists"
            value={formData.testLists}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="testEngineer">Test Engineer:</label>
          <input
            type="text"
            id="testEngineer"
            value={formData.testEngineer}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
