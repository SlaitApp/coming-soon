import client from '@sendgrid/client';
import { LogSnag } from 'logsnag';

client.setApiKey(process.env.SENDGRID_API_KEY);

const logsnag = new LogSnag({
  token: process.env.LOG_SNAG_TOKEN,
  project: process.env.LOG_SNAG_PROJECT
});

const request = {
  url: `/v3/marketing/contacts`,
  method: 'PUT',
};

async function register(req, res) {
  const email = JSON.parse(req.body).email;
  request.body = {
    list_ids: [process.env.LIST_ID],
    contacts: [
      { email: email }
    ]
  };

  client.request(request).then(([response, body]) => {
    logsnag.publish({
      channel: 'registration',
      event: "Subscription Registration",
      icon: "🎉",
      tags: {
        email: email
      },
      notify: true,
    });
    return res.status(200).json({ error: "" });
  }).catch(error => {
    console.error(error.response.body.errors[0]);
    return res.status(error.statusCode || 500).json({ error: error.message });
  });
}

export default register;