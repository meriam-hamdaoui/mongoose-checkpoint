//9. require express
const express = require("express");
const {
  getAll,
  addPerson,
  addMany,
  getByName,
  getById,
  classicUpdates,
  updatePerson,
  deleteById,
  deleteByName,
  searchQuery,
} = require("../controllers/person");

//@important !!! u may have to comment few routers to make other work specially the puts

//10. create routers
const personRouter = express.Router();
//14.
//get all people
personRouter.get("/", getAll);

//12.
//post
personRouter.post("/addperson", addPerson);

//13.
//i comment the ligne below to avoid the repetition inside my DB
//addMany();

//15.
personRouter.get("/:name", getByName);

//16.
personRouter.get("/:_id", getById);

//17.
personRouter.put("/:_id", classicUpdates);

// 18.
personRouter.put("/:name", updatePerson);

//delete
//19.
personRouter.delete("/:_id", deleteById);

//20. Delete Many Documents with model.remove()
personRouter.delete("/:name", deleteByName);

//21.
//get by id
personRouter.get("/:favouritefood", searchQuery);

//export our routers
module.exports = personRouter;
