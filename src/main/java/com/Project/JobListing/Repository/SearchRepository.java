package com.Project.JobListing.Repository;

import java.util.List;

import com.Project.JobListing.Model.Post;

public interface SearchRepository {

    List<Post> findByText(String text);

}