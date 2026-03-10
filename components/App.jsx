import React, { useState, useEffect } from 'react';
import { getPipeline, createPipeline } from '../utils/api';
import PipelineList from './PipelineList';
import PipelineForm from './PipelineForm';

function App() {
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPipelines = async () => {
      setLoading(true);
      try {
        const data = await getPipeline();
        setPipelines(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPipelines();
  }, []);

  const handleCreatePipeline = async (data) => {
    try {
      const response = await createPipeline(data);
      setPipelines((prevPipelines) => [...prevPipelines, response]);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>CI/CD Automation Tool</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PipelineList pipelines={pipelines} />
      )}
      {error ? (
        <p style={{ color: 'red' }}>{error.message}</p>
      ) : null}
      <PipelineForm onCreatePipeline={handleCreatePipeline} />
    </div>
  );
}

export default App;