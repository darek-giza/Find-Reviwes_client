import React, { useCallback, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Toast from './Toast';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export const SearchForm = ({onAdd}) => {
  const [params, setParams] = useState({
    types: '',
    radius: '500',
    keywords: '',
    language: '',
    minprice: '',
    name: '',
    opennow: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = useCallback(
    async event => {
      try {
        setDownloaded(false);
        setSuccess('');
        setError('');
        setLoading(true);
        event.preventDefault();
        await axios.get('http://localhost:8080/api/nearbysearch',
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
            params: params
          })
          .then(function (response) {
            console.log("resp:", response)
            if (response.data.status === "OK") {
              setDownloaded(true);
            }
          })
          setSuccess('Searching success.');
        } catch (error) {
          setError('Searching failure');
        } finally {
          setLoading(false);
        }
      },
    [params]
    );

    const handleChange = useCallback(
      event => {
        setParams({...params, [event.target.name]: event.target.value});
      },
      [params]
    );

  return (
    <Container maxWidth="sm">
      {error && (
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      )}
      {success && <Toast message={success} type="success"/>}
      {downloaded && <Redirect to="/places"/>}
      <form autoComplete="off" id="create-expense-form" onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="types"
            type="text"
            name="types"
            onChange={handleChange}
            label="Type of place">
          </TextField>
          <TextField
            required
            id="radius"
            type="number"
            name="radius"
            onChange={handleChange}
            label="Radius">
          </TextField>
          <TextField
            id="keywords"
            type="text"
            name="keywords"
            onChange={handleChange}
            label="keywords">
          </TextField>
        </div>
        <Button color="primary" variant="outlined" size="small" type="submit">
          {isLoading && <CircularProgress color="secondary"/>}
          Search
        </Button>{' '}
        </form>
      </Container>
    );
  }
;
export default SearchForm;
