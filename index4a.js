// import express from "express"
// const app = express()
// app.listen(8080,()=>{
//     console.log("server started")
// })
// app.get("/x/:a/y/:b/z/:c", (req, res) => {
//   const num1 = Number(req.params.a);
//   const num2 = Number(req.params.b);
//   const num3 = Number(req.params.c);

//   const sum = num1 + num2 + num3;

//   res.send(sum);
// });





import express from "express"
const app = express()
app.listen(8080,()=>{
    console.log("server started")
});
app.get("/:a/:b/:c/:d", (req, res) => {
  res.send("Hello World");
});



