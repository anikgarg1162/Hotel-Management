import React, { useState } from 'react';
import axios from 'axios';
import './css/Planner.css';

const App = () => {
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [stayDuration, setStayDuration] = useState('');
  const [travelingWith, setTravelingWith] = useState('');
  const [interests, setInterests] = useState('');
  const [specificDates, setSpecificDates] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `
      Budget: ${budget}, 
      Location: ${location}, 
      Stay Duration: ${stayDuration},
      Traveling With: ${travelingWith},
      Interests: ${interests},
      Specific Dates: ${specificDates}
    `;

    try {
      const response = await axios.post('http://localhost:5000/planner', { prompt });
      setGeneratedText(response.data.text);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Package Planner</h1>
      <div className="container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g., 200000"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., India"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stayDuration">Stay Duration:</label>
            <input
              type="text"
              id="stayDuration"
              value={stayDuration}
              onChange={(e) => setStayDuration(e.target.value)}
              placeholder="e.g., 5 days"
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelingWith">Traveling With:</label>
            <input
              type="text"
              id="travelingWith"
              value={travelingWith}
              onChange={(e) => setTravelingWith(e.target.value)}
              placeholder="e.g., Solo, Couple, Family"
            />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests:</label>
            <input
              type="text"
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., Beaches, Temples, Mountains"
            />
          </div>
          <div className="form-group">
            <label htmlFor="specificDates">Specific Dates:</label>
            <input
              type="text"
              id="specificDates"
              value={specificDates}
              onChange={(e) => setSpecificDates(e.target.value)}
              placeholder="e.g., Specific dates or seasons"
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>
        {generatedText && (
          <div className="generated-text" dangerouslySetInnerHTML={{ __html: generatedText.replace(/`/g, '').replace(/\*/g, '') }} />
        )}
      </div>
    </div>
  );
};

export default App;