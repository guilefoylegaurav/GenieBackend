const fetch = require("node-fetch")
const analyzeText = async (req, res) => {
  const { inputs } = req.body;
  try {
    const response = await fetch(
            process.env['HF_URL'],
            {
                headers: { Authorization: `Bearer ${process.env['HF_API_KEY']}` },
                method: "POST",
                body: JSON.stringify({inputs}),
            }
        );

    const data = await response.json();
    const { label, score } = data[0][0];
    const pc = Math.round(((score * 100) + Number.EPSILON) * 100) / 100;
    res.status(200).json({
      success: true, 
      label: label, pc: pc
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: 'The prediction could not be obtained',
    });
  }
};

module.exports = { analyzeText };