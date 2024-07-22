const httpConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.OPEN_AI_SECRET_KET
  }
};

const OPEN_AI_MODEL = 'gpt-3.5-turbo';
const OPEN_AI_API = 'https://api.openai.com/v1/completions';

export default function ChatBotHandler(req, res) {

  let dataBody = JSON.parse(req.body);

  if (req.method === 'POST') {
    let requestData = {
      model: OPEN_AI_MODEL,
      messages: [dataBody.message],
      temperature: 0
    }

    fetch(OPEN_AI_API, {
      ...httpConfig,
      method: 'POST',
      body: JSON.stringify(requestData)
    }).then(async (response) => {
      const dataResponse = await response.json();
      console.log(dataResponse);
      res.status(200).json({ data: dataResponse.choices[0].message, success: true });
    })
      .catch(error => {
        res.status(400).json({ data: error, success: false });
      });
  }
}