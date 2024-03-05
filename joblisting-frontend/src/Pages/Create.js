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
  Container,
  AppBar,
  Toolbar,
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
        
        console.error('Error Message:', error.message);
      });
  };

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({ ...form, techs: [...form.techs, e.target.value] });
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ background: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create New Post
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: '2%', marginTop: '1%', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s' }} elevation={3}>
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
              sx={{ width: '80%', margin: '2% auto' }}
              required
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
              label="Job Profile"
              variant="outlined"
              value={profile}
            />
            <TextField
              type="number"
              sx={{ width: '80%', margin: '2% auto' }}
              required
              onChange={(e) => setForm({ ...form, exp: e.target.value })}
              label="Years of Experience"
              variant="outlined"
              value={exp}
            />
            <TextField
              type="text"
              sx={{ width: '80%', margin: '2% auto' }}
              required
              multiline
              rows={4}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              label="Job Description"
              variant="outlined"
              value={desc}
            />
            <Box sx={{ margin: '1% auto' }}>
              <Typography variant="h6" sx={{ color: '#3f51b5' }}>Required skills: </Typography>
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
              sx={{ width: '80%', margin: '2% auto', backgroundColor: '#3f51b5', color: '#fff', '&:hover': { backgroundColor: '#2a3f9d', transform: 'scale(1.05)' } }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Create;
