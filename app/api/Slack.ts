import { NextApiRequest, NextApiResponse } from 'next';

export default async function slackHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL as string;
    const message = req.body.feedback;

    const payload = {
      text: message,
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    res.status(200).json({ message: 'Message posted to Slack successfully!' });
  } catch (error) {
    console.error('Error posting message to Slack:', error);
    res.status(500).json({ message: 'Error posting message to Slack' });
  }
}
