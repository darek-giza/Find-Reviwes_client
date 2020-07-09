import React, { useCallback, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Toast from './Toast';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

export const SearchForm = ({onAdd}) => {
    // const [place, setPlace] = useState(null);
    const [types, setTypes] = useState('');
    const [radius, setRadius] = useState('1000');
    const [keywords, setKeywords] = useState('')
    const [language, setLanguage] = useState('');
    const [minprice, setMinprace] = useState('');
    const [name, setName] = useState('');
    const [opennow, setOpennow] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = useCallback(
      async event => {
        try {
          setSuccess('');
          setError('');
          setLoading(true);
          event.preventDefault();
          console.log("types: ",types)
          await axios.get('http://localhost:8080/api/nearbysearch',
            {
              headers:{
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
              },
              params: {
                types:types,
                radius:radius,
                keywords:"food",
                language:language,
                minprice:minprice,
                name:name,
                opennow:opennow,
              }
            })
            .then(function (response) {
              console.log("resp:",response)

            })
          setSuccess('Searching success.');
        } catch (error) {
          setError('Searching failure');
        } finally {
          setLoading(false);
        }
      },
      []
    );

    const handleChange = useCallback(
      event => {
        setTypes({...types, [event.target.name]: event.target.value});
        console.log("types in handler:",types)
      },
      [types]
    );


    return (
      <Container maxWidth="sm">
        {error && (
          <Alert severity="error" variant="filled">
            {error}
          </Alert>
        )}
        {success && <Toast message={success} type="success"/>}
        <form autoComplete="off" id="create-expense-form" onSubmit={handleSubmit}>
          <div>
            <TextField
              id="types"
              type=""
              step="sny"
              name="types"
              onChange={handleChange}
              label="Nearby search places">
              Search
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
