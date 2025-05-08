// backend/send-email.js

const SibApiV3Sdk = require("sib-api-v3-sdk");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, subject, message } = req.body;

  const apiKey = process.env.SENDINBLUE_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = `
    <html><body>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    </body></html>`;
  sendSmtpEmail.sender = { email: "agarwalprateek666@gmail.com" };
  sendSmtpEmail.to = [{ email: "agarwalprateek666@gmail.com" }];

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email failed", error });
  }
};
