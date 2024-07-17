const FeedbackModel = require('../Models/FeedbackSchema');

const createFeedback = async (req, res) => {
  try {
    const feedback = new FeedbackModel(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
};

const ShowFeedback = async (req , res)=>{
  try {
    const Feedback= await FeedbackModel.find({});
    console.log(Feedback);
    res.status(200).send(Feedback);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createFeedback , ShowFeedback };
