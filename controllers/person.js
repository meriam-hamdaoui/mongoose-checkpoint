//@descriinside this file we're gonna create all our controllers functions

// import our person schema
const personSchema = require("../models/person");

//14. find/display all the people
exports.getAll = async (req, res) => {
  try {
    const peopleList = await personSchema.find();
    res.status(200).send({ msg: "ur people list", peopleList });
  } catch (error) {
    console.error("get all person crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get people");
  }
};

//12. Create and Save a Record of a Model:
exports.addPerson = async (req, res) => {
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
};

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
//i comment the ligne below to avoid the repetition inside my DB
//exports.addMany = personSchema.create(arrayOfPeople);

//the findOne (by name) and findById don't work together
//one of them should be commented
//15.Use model.findOne() to Return a Single Matching Document from Your Database
exports.getByName = async (req, res) => {
  try {
    let { name } = req.params;
    const requestedPerson = await personSchema.findOne({ name: name });
    res.status(200).send({ msg: "ur requested Person", requestedPerson });
  } catch (err) {
    console.error("get person name crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
  }
};

//16.Use model.findById() to Search Your Database By _id
exports.getById = async (req, res) => {
  try {
    let { _id } = req.params;
    const requestedIdPerson = await personSchema.findById({ _id });
    res.status(200).send({ msg: "ur requested id Person", requestedIdPerson });
  } catch (err) {
    console.error("get person name crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
  }
};

//17.Perform Classic Updates by Running Find, Edit, then Save
exports.classicUpdates = async (req, res) => {
  try {
    let { _id } = req.params;
    let foodToAdd = "hamburger";
    const updateData = await personSchema.findById({ _id });
    // console.log(updateData);
    updateData.favouritFoods.push(foodToAdd);
    updateData.save();
    res.status(200).send({ msg: "food added ", updateData });
  } catch (err) {
    console.error("add food crashed => " + err);
    //send an error msg
    res.status(500).send("u could not get this person");
  }
};

// 18.model.findOneAndUpdate()
exports.updatePerson = async (req, res) => {
  try {
    let { name } = req.params;
    const updateOne = await personSchema.findOneAndUpdate(
      { name: name },
      { $set: { age: 20 } },
      { new: true }
    );
    res.status(200).send({ msg: "findOneAndUpdate successeded ", updateOne });
  } catch (err) {
    console.error("findOneAndUpdate error => " + err);
    //send an error msg
    res.status(500).send("u could not findOneAndUpdate this person");
  }
};

//19.Delete One Document Using model.findByIdAndRemove
exports.deleteById = async (req, res) => {
  try {
    let { _id } = req.params;
    const removePerson = await personSchema.findByIdAndRemove({ _id });
    res
      .status(200)
      .send({ msg: "findByIdAndRemove successeded ", removePerson });
  } catch (err) {
    console.error("findByIdAndRemove error => " + err);
    //send an error msg
    res.status(500).send("u could not findByIdAndRemove this person");
  }
};

//20. Delete Many Documents with model.remove()
exports.deleteByName = async (req, res) => {
  try {
    let { name } = req.params;
    const removePeople = await personSchema.remove({ name: name });
    res
      .status(200)
      .send({ msg: "remove many people successeded ", removePeople });
  } catch (err) {
    console.error("remove many people error => " + err);
    //send an error msg
    res.status(500).send("u could not remove many people");
  }
};

//21.Chain Search Query Helpers to Narrow Search Results
//get by id
exports.searchQuery = async (req, res) => {
  try {
    let { favouritefood } = req.params;
    const searchQuery = await personSchema
      .find({ favouritefood })
      .sort({ name: "asc" })
      .limit(2)
      .select("-age")
      .exec();
    res
      .status(200)
      .send({ msg: "Chain Search Query successeded ", searchQuery });
  } catch (err) {
    console.error("searchQuery error => " + err);
    //send an error msg
    res.status(500).send("u could not searchQuery");
  }
};
