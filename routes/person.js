//9. require express
const express = require("express");

// import our person schema
const personSchem = require("../models/person");

//10. create routers
const personRouter = express.Router();

//route get all people
personRouter.get("/", (req, res) => {});
//post
//12. Create and Save a Record of a Model:
personRouter.post("/", (req, res) => {
  try {
    //create a model
    const newPerson = new personSchem(req.body);
    //save it
    newPerson.save();
    //send a confirmation
    res.status(200).send({ msg: "u successeded to add a person", newPerson });
  } catch (err) {
    console.error("post person crashed => " + err);
    //send an error msg
    res.status(500).send("u could not add a person");
  }
});

//put
personRouter.put("/:id", (req, res) => {});

//delete
personRouter.delete("/:id", (req, res) => {});

//get by id
personRouter.get("/:id", (req, res) => {});

//export our routers
module.exports = personRouter;
