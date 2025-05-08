const express = require('express');
const bodyParser = require('body-parser');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Setup middleware
app.use(bodyParser.json());

// Configure Sendinblue
const apiKey = process.env.SENDINBLUE_API_KEY;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = apiKey;

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
    to: [{ email: 'agarwalprateek666@gmail.com', name: "Prateek Agarwal" }],
    sender: { email: 'agarwalprateek666@gmail.com', name: name },
    subject: subject || `New Message from ${name}`,
    htmlContent: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Sendinblue Error:', error);
    res.status(500).json({ message: 'Error sending email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
