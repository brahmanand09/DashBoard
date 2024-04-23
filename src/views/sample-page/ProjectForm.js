import React, { useState } from 'react';
import './ProjectForm.css'; 

const ProjectForm = () => {
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isActive, setIsActive] = useState('Active');
  const [clientManager, setClientManager] = useState('');
  const [clientEngineer, setClientEngineer] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientName, setClientName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <h2>Create Project</h2>
      <div className="form-buttons">
        <button onClick={handleSubmit}>Save</button>
      </div>
      <div className="form-content">
      <div className="form-field">
          <label htmlFor="projectId">Project ID:</label>
          <input
            type="text"
            id="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="isActive">Is Active:</label>
          <input
            type="text"
            id="isActive"
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientManager">Project Manager:</label>
          <input
            type="text"
            id="clientManager"
            value={clientManager}
            onChange={(e) => setClientManager(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientEngineer">Project Engineer:</label>
          <input
            type="text"
            id="clientEngineer"
            value={clientEngineer}
            onChange={(e) => setClientEngineer(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientContact">Project Contact:</label>
          <input
            type="text"
            id="clientContact"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientContact">Project Stage:</label>
          <input
            type="text"
            id="clientContact"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientContact">Project Phase:</label>
          <input
            type="text"
            id="clientContact"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="clientContact">Effort Estimate:</label>
          <input
            type="text"
            id="clientContact"
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          />
        </div>
      </div>
    </div>
  //  </main>
  //  </form>
  );
};

export default ProjectForm;
