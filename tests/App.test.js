import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { render, fireEvent, waitFor } from '@testing-library/react';

describe('App component', () => {
  it('renders pipeline list', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Pipeline 1')).toBeInTheDocument());
  });

  it('renders pipeline form', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Create Pipeline')).toBeInTheDocument());
  });

  it('submits pipeline form', async () => {
    const { getByText, getByLabelText } = render(<App />);
    const nameInput = getByLabelText('Name:');
    const descriptionInput = getByLabelText('Description:');
    const submitButton = getByText('Create Pipeline');

    fireEvent.change(nameInput, { target: { value: 'Pipeline 1' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is a pipeline' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(getByText('Pipeline 1')).toBeInTheDocument());
  });
});