/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { 
      email,
      dashboards = 25,
      stakeholders = 20,
      analysts = 3,
      currentBIHours = 40,
      revenueImpact = 50000,
      timeSaved = 0,
      costSavings = 0,
      roi = 0
    } = JSON.parse(event.body);

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
      text: `New Cost-Benefit Analysis Request! 💰`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Cost-Benefit Analysis Request",
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
              text: `*Potential Annual Savings:*\n$${Math.round(costSavings).toLocaleString()}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Calculator Inputs:*"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Dashboards:* ${dashboards}`
            },
            {
              type: "mrkdwn",
              text: `*Stakeholders:* ${stakeholders}`
            },
            {
              type: "mrkdwn",
              text: `*Analysts:* ${analysts}`
            },
            {
              type: "mrkdwn",
              text: `*Current BI Hours/Week:* ${currentBIHours}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Expected Revenue Impact:* $${revenueImpact.toLocaleString()}/year`
            },
            {
              type: "mrkdwn",
              text: `*Time Saved:* ${Math.round(timeSaved)} hours/week`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*ROI:* ${Math.round(roi)}%`
            },
            {
              type: "mrkdwn",
              text: `*Time:* ${new Date().toISOString()}`
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "_This is a high-value lead! Follow up within 24 hours with a personalized analysis._"
          }
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
      body: JSON.stringify({ message: "Analysis request received successfully!" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process request" }),
    };
  }
};