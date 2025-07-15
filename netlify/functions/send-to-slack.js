/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      statusCode: 500,
      body: 'Slack webhook URL not configured',
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: 'Invalid JSON',
    };
  }

  const { first_name, last_name, company, email, message } = data;
  const slackMessage = {
    text: `New Get Started Form Submission:\n*Name:* ${first_name} ${last_name}\n*Company:* ${company}\n*Email:* ${email}\n*Message:* ${message}`,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });
    if (!response.ok) {
      throw new Error('Slack webhook error');
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Failed to send to Slack',
    };
  }
}; 