package com.Project.JobListing.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.Project.JobListing.Model.Post;
import com.Project.JobListing.Repository.PostRepository;

import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
public class PostController {

    @Autowired
    PostRepository repo;

    @ApiIgnore
    @RequestMapping("/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return repo.findAll();
    }
    
    
}
