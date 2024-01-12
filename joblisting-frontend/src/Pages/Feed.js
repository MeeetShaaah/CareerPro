import { Box, Card, Grid, TextField, Typography, InputAdornment, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const SearchTextField = styled(TextField)({
  width: "40%", // Adjusted the width to make it smaller
  marginLeft: "auto", // Move the search box to the right
});

const HomeButton = styled(Button)({
  color: "#3f51b5",
  borderColor: "#3f51b5",
  "&:hover": {
    backgroundColor: "#3f51b5",
    color: "#fff",
  },
});

const PostCard = styled(Card)({
  padding: "3%",
  overflow: "hidden",
  width: "84%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const LoadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/posts/${query}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchInitialPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/allPosts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} md={12} lg={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2%" }}>
        <HomeButton variant="outlined" component={Link} to="/">
          Home
        </HomeButton>
        <SearchTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          fullWidth
          onChange={(e) => setQuery(e.target.value)}
        />
      </Grid>
      {loading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        posts.map((p) => (
          <Grid key={p.id} item xs={12} md={6} lg={4}>
            <PostCard>
              <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: "600" }}>
                {p.profile}
              </Typography>
              <Typography sx={{ color: "#585858", marginTop: "2%" }} variant="body">
                Description: {p.desc}
              </Typography>
              <br />
              <br />
              <Typography variant="h6">Years of Experience: {p.exp} years</Typography>
              <Typography gutterBottom variant="body">
                Skills :{" "}
              </Typography>
              {p.techs.map((s, i) => (
                <Typography variant="body" gutterBottom key={i}>
                  {s} . {` `}
                </Typography>
              ))}
            </PostCard>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Feed;