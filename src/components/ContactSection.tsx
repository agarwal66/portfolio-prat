import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState(""); // Track the name for dynamic subject

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("_captcha", "false");
    formData.append("_template", "box");
    formData.append("_subject", `New Enquiry from ${name}`); // Dynamically set the subject
    formData.append("_autoresponse", "Thanks for reaching out! I’ll get back to you shortly.");

    try {
      await fetch("https://formsubmit.co/agarwalprateek55@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Feel free to reach out to me for any questions or opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:agarwalprateek666@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    agarwalprateek666@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919772159844" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9772159844
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Remote, Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {submitted ? (
              <div className="p-6 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                ✅ Thank you for submitting! I’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} // Update name state
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm">Subject</label>
                  <Input id="subject" name="subject" placeholder="Subject" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">Message</label>
                  <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                </div>

                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/80 w-full"
                  disabled={isSubmitting}
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



// --Sendinblue ke through bhejna ho to uska code ---------------
// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";

// const SENDINBLUE_API_KEY = import.meta.env.VITE_SENDINBLUE_API_KEY;
// const RECIPIENT_EMAIL = "agarwalprateek55@gmail.com";

// const ContactSection: React.FC = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);
//     const data = {
//       name: formData.get('name') as string,
//       email: formData.get('email') as string,
//       subject: formData.get('subject') as string,
//       message: formData.get('message') as string,
//     };

//     const emailPayload = {
//       sender: {
//         name: "Prateek's Desk",
//         email: "agarwalprateek55@gmail.com"
//       },
//       to: [{
//         email: RECIPIENT_EMAIL,
//         name: 'Prateek Agarwal'
//       }],
//       subject: `New Inquiry from ${data.name}`,
//       htmlContent: `
//         <html>
//           <body>
//             <h2>New Contact Form Submission</h2>
//             <p><strong>From:</strong> ${data.name} (${data.email})</p>
//             <p><strong>Reply To:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
//             <p><strong>Subject:</strong> ${data.subject}</p>
//             <p><strong>Message:</strong></p>
//             <p>${data.message.replace(/\n/g, '<br>')}</p>
//           </body>
//         </html>
//       `,
//       replyTo: {
//         email: data.email,
//         name: data.name
//       }
//     };

//     try {
//       const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'api-key': SENDINBLUE_API_KEY
//         },
//         body: JSON.stringify(emailPayload)
//       });

//       const responseData = await response.text();
//       let parsedData;
//       try {
//         parsedData = responseData ? JSON.parse(responseData) : {};
//       } catch (e) {
//         console.log("Could not parse response:", e);
//       }

//       if (response.ok) {
//         toast({
//           title: "Message sent!",
//           description: "Thank you for your message. I'll get back to you soon.",
//         });
//         (e.target as HTMLFormElement).reset();
//       } else {
//         throw new Error(parsedData?.message || 'Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       toast({
//         title: "Error",
//         description: "There was a problem sending your message. Please try again or email directly.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="bg-background">
//       <div className="section-container">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Contact <span className="text-gradient">Me</span>
//         </h2>
//         <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//           Feel free to reach out to me for any questions or opportunities.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
//             <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <Mail className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a href="mailto:agarwalprateek666@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
//                     agarwalprateek666@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <Phone className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a href="tel:+919772159844" className="text-muted-foreground hover:text-primary transition-colors">
//                     +91 9772159844
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <MapPin className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-muted-foreground">Remote, Worldwide</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm">Name</label>
//                   <Input id="name" name="name" placeholder="Your name" required />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm">Email</label>
//                   <Input id="email" name="email" type="email" placeholder="Your email" required />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm">Subject</label>
//                 <Input id="subject" name="subject" placeholder="Subject" required />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm">Message</label>
//                 <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
//               </div>

//               <Button
//                 type="submit"
//                 className="bg-primary hover:bg-primary/80 w-full"
//                 disabled={isSubmitting}
//               >
//                 <Send size={18} className="mr-2" />
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

// ------------Email js website ke through bhejna hi uska code ----------//
// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
// import emailjs from "emailjs-com";

// // Define contact submission type
// interface ContactSubmission {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// // EmailJS configuration
// // To get these values:
// // 1. Sign up at emailjs.com
// // 2. Create a Gmail service under Email Services
// // 3. Create an email template
// // 4. Get your user ID from Account > API Keys
// const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

// const ContactSection: React.FC = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [initialized, setInitialized] = useState(false);

//   useEffect(() => {
//     // Initialize EmailJS with your user ID
//     emailjs.init(EMAILJS_USER_ID);
//     setInitialized(true);
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Get form data
//     const formData = new FormData(e.currentTarget);
//     const data = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       subject: formData.get("subject") as string,
//       message: formData.get("message") as string,
//     };

//     try {
//       // Send email using EmailJS
//       // Make sure your EmailJS template has variables:
//       // {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
//         from_name: data.name,
//         from_email: data.email,
//         subject: `New Enquiry from ${data.name}`,
//         message: data.message,
//         to_email: "agarwalprateek55@gmail.com", // Your email address
//       });

//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });

//       // Reset form
//       (e.target as HTMLFormElement).reset();
//     } catch (error) {
//       console.error("Error:", error);
//       toast({
//         title: "Error",
//         description:
//           "There was a problem sending your message. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="bg-background">
//       <div className="section-container">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Contact <span className="text-gradient">Me</span>
//         </h2>
//         <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//           Feel free to reach out to me for any questions or opportunities.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
//             <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <Mail className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:agarwalprateek666@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     agarwalprateek666@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <Phone className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+919772159844"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +91 9772159844
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/20 p-3 rounded-full">
//                   <MapPin className="text-primary" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-muted-foreground">Remote, Worldwide</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Your email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm">
//                   Subject
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   placeholder="Subject"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Your message"
//                   rows={5}
//                   required
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="bg-primary hover:bg-primary/80 w-full"
//                 disabled={isSubmitting || !initialized}
//               >
//                 <Send size={18} className="mr-2" />
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ContactSection;
