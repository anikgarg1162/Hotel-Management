const genAI= require('../Models/AiSchema');

const planner = async(req,res)=>{
    const { prompt } = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        res.json({ text });
      } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Failed to generate content' });
      }
}
module.exports={planner};