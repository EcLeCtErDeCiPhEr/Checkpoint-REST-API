var nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = (emailTo) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${process.env.email}` ,
          pass: `${proess.env.email}`,
        },
      });
      
      var mailOptions = {
        from:`${process.env.email}`,
        to: `${emailTo}`,
        subject: "Recruiting",
        html: `<!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              background-color: #ffffff;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #ddd;
            }
            h1 {
              color: #007bff;
              font-size: 24px;
              margin-bottom: 10px;
            }
            p {
              color: #333;
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 20px;
            }
            .cta-button {
              background-color: #28a745;
              color: white;
              padding: 12px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              display: inline-block;
              margin-bottom: 20px;
            }
            .feature-img {
                 width: 100%;
              max-width: 250px;
              margin: 10px;
            }
            .section {
              margin-bottom: 30px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 12px;
              color: #666;
            }
            .divider {
              height: 1px;
              background-color: #ddd;
              margin: 20px 0;
            }
            .social-icons {
              display: inline-block;
              margin: 0 10px;
            }
            .social-icons img {
              width: 32px;
              height: 32px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Welcome Section -->
            <h1>Welcome to Our Amazing Service!</h1>
            <p>We’re so glad you’ve decided to join us! We’re committed to providing you with the best tools and support to help you succeed. Here’s a quick overview of what you can expect:</p>
      
            <!-- Features Section -->
            <div class="section">
              <h2>Exclusive Features Just for You</h2>
              <p>Our platform has been designed with you in mind. Take a look at some of the awesome features that you now have access to:</p>
                     <img src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Feature 1" class="feature-img">
              <p><strong>Feature 1:</strong> Enjoy unlimited access to premium tools to enhance your productivity.</p>
              <img src="https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="Feature 2" class="feature-img">
              <p><strong>Feature 2:</strong> Collaborate with a community of like-minded professionals.</p>
            </div>
      
            <!-- Special Offer Section -->
            <div class="section">
              <h2>Special Offer Just for You</h2>
              <p>As a thank you for joining, we’re giving you a special *20% discount* on your first purchase! Use the promo code below:</p>
              <p style="text-align: center; font-size: 24px; color: #007bff;"><strong>PROMO2024</strong></p>
              <p>This offer is valid for the next 7 days. Don’t miss out!</p>
              <a href="https://example.com/shop" class="cta-button">Shop Now</a>
            </div>
      
            <!-- Testimonials Section -->
            <div class="section">
              <h2>What Our Users Are Saying</h2>
              <p>"This platform has completely transformed how I manage my projects. The tools are incredibly easy to use!" - <em>Sarah K.</em></p>
              <p>"I love the community aspect. Being able to connect with others has been a game-changer for my business." - <em>John D.</em></p>
            </div>
      
            <!-- Getting Started Section -->
            <div class="section">
              <h2>How to Get Started</h2>
              <p>We’ve put together a quick guide to help you get the most out of your experience. Here are a few steps to get started:</p>
              <ol>
                <li>Log in to your account by clicking the button below.</li>
                <li>Explore the dashboard and set up your profile.</li>
                <li>Start using our tools to enhance your work and productivity!</li>
                  </ol>
              <a href="https://example.com/dashboard" class="cta-button">Go to Your Dashboard</a>
            </div>
      
            <!-- Divider -->
            <div class="divider"></div>
      
            <!-- Footer Section -->
            <div class="footer">
              <p>Stay connected with us on social media:</p>
              <a href="https://facebook.com/yourcompany" class="social-icons"><img src="https://yourserver.com/facebook-icon.png" alt="Facebook"></a>
              <a href="https://twitter.com/yourcompany" class="social-icons"><img src="https://yourserver.com/twitter-icon.png" alt="Twitter"></a>
              <a href="https://instagram.com/yourcompany" class="social-icons"><img src="https://yourserver.com/instagram-icon.png" alt="Instagram"></a>
              <p>&copy; 2024 Your Company. All rights reserved.<br>
              Need help? <a href="mailto:support@example.com">Contact Us</a></p>
            </div>
          </div>
        </body>
      </html>
       
      
      `,
      };
      
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
}