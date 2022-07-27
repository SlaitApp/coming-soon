import client from '@sendgrid/client';
client.setApiKey(process.env.SENDGRID_API_KEY);

const request = {
  url: `/v3/marketing/contacts`,
  method: 'PUT',
};

async function register(req, res) {
  request.body = {
    list_ids: [process.env.LIST_ID],
    contacts: [
      { email: JSON.parse(req.body).email }
    ]
  };

  client.request(request).then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
    return res.status(200).json({ error: "" });
  }).catch(error => {
    console.error(error.response.body.errors[0]);
    return res.status(error.statusCode || 500).json({ error: error.message });
  });
}

export default register;