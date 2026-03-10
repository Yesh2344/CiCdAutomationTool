# Minor edit
# Minor edit
import React, { useState } from 'react';

function PipelineForm({ onCreatePipeline }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, description };
    await onCreatePipeline(data);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Pipeline</button>
    </form>
  );
}

export default PipelineForm;