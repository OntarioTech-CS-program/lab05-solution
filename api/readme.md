# API (Lab 3 - REST API Building 2)

This is the solution for the API portion of this lab.

>Note that there is no autograding for the Java portion of this lab due to complications  
>with the libraries and implementation of Jakarta & Glassfish.

## Modifications

The students will need to return a `Response` object from the endpoint functions, below is how `StudentResource.java` should look:

```java
@Path("/students")
public class StudentResource {
    
   /** ... **/
      
   @GET
   @Path("/json")
   public Response json() {
      String content = this.readFileContents("/students.json");

      return Response.status(200)
               .header("Access-Control-Allow-Origin", "*")
               .header("Content-Type", "application/json")
               .entity(content)
               .build();
   }

   @GET
   @Path("/csv")
   public Response csv() {
      String content = this.readFileContents("/students.csv");

      return Response.status(200)
               .header("Access-Control-Allow-Origin", "*")
               .header("Content-Type", "text/csv")
               .entity(content)
               .build();
   }

   @GET
   @Path("/xml")
   public Response xml() {
      String content = this.readFileContents("/students.xml");

      return Response.status(200)
               .header("Access-Control-Allow-Origin", "*")
               .header("Content-Type", "application/xml")
               .entity(content)
               .build();
   }
}
```

>Note that the CORS header doesn't have to have the `localhost` origin but can have `"*"`,  
>the template readme doesn't mention this, but if the student has this it *is* correct.
>
>If there are any questions, contact Liam Major.
