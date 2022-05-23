//9. require express
const express = require("express");

// import our person schema
const personSchema = require("../models/person");

//10. create routers
const personRouter = express.Router();

//get all people
//14. find/display all the people
personRouter.get("/", async (req, res) => {
  try {
    const peopleList = await personSchema.find();
    res.status(200).send({ msg: "ur people list", peopleList });
  } catch (error) {
    console.error("get all person crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get people");
  }
});

//post
//12. Create and Save a Record of a Model:
personRouter.post("/addperson", async (req, res) => {
  try {
    //create a model
    const newPerson = await new personSchema(req.body);
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
//post
//13. Create Many Records with model.create()
const arrayOfPeople = [
  {
    name: "souad",
    age: 43,
    email: "souad@gmail.com",
    favouritFoods: ["icecream", "strawberry", "pasta"],
  },
  {
    name: "zohra",
    age: 68,
    email: "zohra@gmail.com",
    favouritFoods: ["couscous", "green beans", "milk"],
  },
  {
    name: "fatma",
    age: 33,
    email: "fatma@gmail.com",
    favouritFoods: ["pasta", "cheese", "pizza"],
  },
];
//i comment the ligne above to avoid the repetition inside my DB
//personSchem.create(arrayOfPeople);

//the findOne (by name) and findById don't work together
//one of them should be commented

//15.Use model.findOne() to Return a Single Matching Document from Your Database
// personRouter.get("/:name", async (req, res) => {
//   try {
//     let { name } = req.params;
//     const requestedPerson = await personSchema.findOne({ name: name });
//     res.status(200).send({ msg: "ur requested Person", requestedPerson });
//   } catch (err) {
//     console.error("get person name crashed => " + err);
//     //send an error msg
//     res.status(500).send("u could not get this person");
//   }
// });

//16.Use model.findById() to Search Your Database By _id
personRouter.get("/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    const requestedIdPerson = await personSchema.findById({ _id });
    res.status(200).send({ msg: "ur requested id Person", requestedIdPerson });
  } catch (err) {
    console.error("get person name crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
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
