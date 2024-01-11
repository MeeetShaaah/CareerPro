package com.Project.JobListing.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Project.JobListing.Model.Post;

public interface PostRepository extends MongoRepository<Post, String> {
    
}
