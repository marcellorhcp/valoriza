import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Olá mundo, método GET!!!")
});
app.post("/test-post", (request, response) => {
  return response.send("Olá mundo! Este é o método POST!!!")
});

app.listen(3000, ()=> console.log("Server is running"));