const HousekeepingModel = require('../Models/UserHousekeepSchema');

const createHousekeep = async(req,res)=>{
    try {
        const housekeep = new HousekeepingModel(req.body);
        await housekeep.save();
        res.status(201).send(housekeep);
      } catch (error) {
        res.status(400).send(error);
      }
}

const showHousekeep = async(req,res)=>{
  try {
    const housekeep = await HousekeepingModel.find({});
    console.log(housekeep);
    res.status(200).send(housekeep);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createHousekeep , showHousekeep };