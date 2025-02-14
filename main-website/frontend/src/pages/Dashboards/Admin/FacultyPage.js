// Frontend: FacultyPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/pages/FacultyPage.css';

const FacultyPage = () => {
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    qualifications: '',
    role: '',
    image: null,
  });
  const [editingFaculty, setEditingFaculty] = useState(null);

  useEffect(() => {
    fetchFaculties();
    fetchDepartments();
  }, []);

  const fetchFaculties = async () => {
    const response = await axios.get('http://localhost:5000/api/faculties');
    setFaculties(response.data);
  };

  const fetchDepartments = async () => {
    const response = await axios.get('http://localhost:5000/api/departments');
    setDepartments(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    if (editingFaculty) {
      await axios.put(`http://localhost:5000/api/faculties/${editingFaculty.id}`, formDataObject);
    } else {
      await axios.post('http://localhost:5000/api/faculties', formDataObject);
    }

    setShowForm(false);
    setFormData({ name: '', department: '', qualifications: '', role: '', image: null });
    setEditingFaculty(null);
    fetchFaculties();
  };

  const handleEdit = (faculty) => {
    setEditingFaculty(faculty);
    setFormData({
      name: faculty.name,
      department: faculty.department,
      qualifications: faculty.qualifications,
      role: faculty.role,
      image: null,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/faculties/${id}`);
    fetchFaculties();
  };

  return (
    <div className="faculty-page">
      <button className="add-faculty-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Faculty'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="faculty-form">
          <h2>{editingFaculty ? `Edit ${editingFaculty.name}` : 'Add Faculty'}</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <select name="department" value={formData.department} onChange={handleInputChange} required>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.department_name}>
                {dept.department_name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="qualifications"
            placeholder="Qualifications"
            value={formData.qualifications}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleInputChange}
            required
          />
          <input type="file" name="image" onChange={handleImageChange} />
          <button type="submit">{editingFaculty ? 'Update Faculty' : 'Add Faculty'}</button>
        </form>
      )}

      <table className="faculty-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Department</th>
            <th>Qualifications</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>
                <img src={`http://localhost:5000${faculty.image_url}`} alt={faculty.name} className="faculty-image" />
              </td>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.qualifications}</td>
              <td>{faculty.role}</td>
              <td>
                <button onClick={() => handleEdit(faculty)}>Edit</button>
                <button onClick={() => handleDelete(faculty.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyPage;
