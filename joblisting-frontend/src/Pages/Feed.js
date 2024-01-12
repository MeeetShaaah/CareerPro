// src/Pages/Feed.js

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${query}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} md={6} lg={4}>
          <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
            <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: "600" }}>
              {post.profile}
            </Typography>
            <Typography sx={{ color: "#585858", marginTop: "2%" }} variant="body">
              Description: {post.desc}
            </Typography>
            <br />
            <br />
            <Typography variant="h6">Years of Experience: {post.exp} years</Typography>

            <Typography gutterBottom variant="body">Skills: </Typography>
            {post.techs.map((skill, index) => (
              <Typography variant="body" gutterBottom key={index}>
                {skill} .{` `}
              </Typography>
            ))}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
