package com.example.lab3;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

import java.io.IOException;
import java.nio.file.Files;

@Path("/students")
public class StudentResource {

    /**
     * This function retrieves a file using Java's built-in reflection functions.
     * This is because Java doesn't look in the directory you think it does on start up, this
     * is a way of guaranteeing it will return the absolute path of the file you're trying to read from.
     * @param filename the name of the file
     * @return the file's contents
     */
    private String readFileContents(String filename) {

        String fp = StudentResource.class.getResource(filename)
                .toString()
                .replaceAll(" ", "\\ ");

        try {
            java.nio.file.Path file = java.nio.file.Path.of(fp);
            return Files.readString(file);
        } catch (IOException e) {
            // something went wrong
            return "Did you forget to create the file?\n" +
                    "Is the file in the right location?\n" +
                    e.toString();
        }
    }

    @GET
    @Path("/json")
    @Produces("application/json")
    public String json() {
        return this.readFileContents("/students.json");
    }

    @GET
    @Path("/csv")
    @Produces("text/csv")
    public String csv() {
        return this.readFileContents("/students.csv");
    }

    @GET
    @Path("/xml")
    @Produces("application/xml")
    public String xml() {
        return this.readFileContents("/students.xml");
    }
}
