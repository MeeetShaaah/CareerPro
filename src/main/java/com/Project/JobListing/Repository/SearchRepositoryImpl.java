package com.Project.JobListing.Repository;

import com.Project.JobListing.Model.Post;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SearchRepositoryImpl implements SearchRepository {

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> findByText(String text) {
        List<Post> posts = new ArrayList<>();

        try {
            MongoDatabase database = client.getDatabase("ShreyRaj");
            MongoCollection<Document> collection = database.getCollection("JobPost");

            // Clear the list before each search
            posts.clear();

            // Create a text index on the relevant fields: techs, desc, profile
            collection.createIndex(new Document("techs", "text").append("desc", "text").append("profile", "text"));

            // Search using the text index
            FindIterable<Document> result = collection.find(
                new Document("$text", new Document("$search", text)))
                .sort(new Document("exp", 1))
                .limit(10);

            result.forEach(doc -> posts.add(converter.read(Post.class, doc)));

        } catch (Exception e) {
            e.printStackTrace();
            // Log or handle the exception appropriately
        }

        return posts;
    }
}
