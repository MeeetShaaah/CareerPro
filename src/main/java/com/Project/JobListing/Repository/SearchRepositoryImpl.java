package com.Project.JobListing.Repository;

import com.Project.JobListing.Model.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepositoryImpl implements SearchRepository{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    final List<Post> posts = new ArrayList<>();

    @Override
    public List<Post> findByText(String text) {

        MongoDatabase database = client.getDatabase("ShreyRaj");
        MongoCollection<Document> collection = database.getCollection("JobPost");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
        new Document("text", 
        new Document("query", text)
                   .append("path", Arrays.asList("techs", "desc", "profile")))), 
        new Document("$sort", 
        new Document("exp", 1L)), 
        new Document("$limit", 10L)));

        result.forEach(doc -> posts.add(converter.read(Post.class,doc)));

        return posts;
    }
    
}
