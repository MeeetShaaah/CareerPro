// src/Pages/Create.js

import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api'; // Update the import path

const initialForm = { profile: '', exp: 0, techs: [], desc: '' };

const Create = () => {
  const skillSet = [
    { name: 'Javascript' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'Django' },
    { name: 'Rust' },
  ];
  
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.addPost(form)
      .then((data) => {
        console.log('Success:', data);
        navigate('/employee/feed');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Add the following line to log the specific error message
        console.error('Error Message:', error.message);
      });
  };
  

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({ ...form, techs: [...form.techs, e.target.value] });
  };

  return (
    <Paper sx={{ padding: '2%' }} elevation={3}>
      <Typography sx={{ margin: '3% auto' }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <TextField
            type="text"
            sx={{ width: '50%', margin: '2% auto' }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Job-profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            type="number"
            sx={{ width: '50%', margin: '2% auto' }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="text"
            sx={{ width: '50%', margin: '2% auto' }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: '1% auto' }}>
            <Typography variant="h6">Please mention required skills</Typography>
            {skillSet.map(({ name }, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleChange}
                  />
                }
                label={name}
              />
            ))}
          </Box>
          <Button
            sx={{ width: '50%', margin: '2% auto' }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
