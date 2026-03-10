import React from 'react';

function PipelineList({ pipelines }) {
  return (
    <ul>
      {pipelines.map((pipeline) => (
        <li key={pipeline.id}>{pipeline.name}</li>
      ))}
    </ul>
  );
}

export default PipelineList;