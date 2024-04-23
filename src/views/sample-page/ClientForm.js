import React, { useState } from 'react';
import './ClientForm.css'; // Import CSS file

const Form = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    clientName: '',
    startDate: '',
    endDate: '',
    isActive: 'Active',
    clientManager: '',
    clientEngineer: '',
    clientContact: '',
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Data', response.json());
      // Reset form after successful submission
      setFormData({
        clientName: '',
        startDate: '',
        endDate: '',
        isActive: 'Active',
        clientManager: '',
        clientEngineer: '',
        clientContact: '',
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className='form-page'>
      <div className="client-header">
        <div className='client-form-title'>
          <h1 >Client Details Form</h1>
        </div>
        <div className="form-submit">
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Save" />
          </form>
        </div>
      </div>
      <div className="client-form-container">
        <div className='left-client-form-container'>
          <div className='left-table'>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <p>Client Name:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>End Date:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Client Manager:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Client Contact:</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className='left-input'>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <input type="text" id="clientName" value={formData.clientName} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="date" id="endDate" value={formData.endDate} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" id="clientManager" value={formData.clientManager} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" id="clientContact" value={formData.clientContact} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      
      <div className="right-client-form-container">
      <div className='left-table'>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <p>Start Date:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Is Active:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Client Engineer:</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className='left-input'>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <input type="date" id="startDate" value={formData.startDate} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" id="isActive" value={formData.isActive} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" id="clientEngineer" value={formData.clientEngineer} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Form;
