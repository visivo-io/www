/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { email, feature = "Unknown Feature" } = JSON.parse(event.body);

    if (!email) {
      return { statusCode: 400, body: JSON.stringify({ error: "Email is required" }) };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email format" }) };
    }

    // Send to Slack
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("SLACK_WEBHOOK_URL not configured");
      return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
    }

    const message = {
      text: `New Feature Waitlist Signup! 🚀`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Feature Waitlist Signup",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            },
            {
              type: "mrkdwn",
              text: `*Feature:*\n${feature}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Time:*\n${new Date().toISOString()}`
            },
            {
              type: "mrkdwn",
              text: `*Source:* Marketing Website`
            }
          ]
        }
      ]
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully joined waitlist!" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process request" }),
    };
  }
};