a) Project Background
In today’s digital age, health and wellness have become a growing priority among individuals (Holdsworth 2019). However, most fitness apps either require expensive subscriptions or rely on generalized content that doesn’t meet personalized fitness goals. Many users also find it challenging to integrate personalized workout routines, lifestyle guidance, and fitness product recommendations in one convenient solution.
The group wants to develop a fitness driven mobile application named Vytal.AI. It is going to be a smart fitness companion app for mobile devices that uses generative AI to provide users with personalized 7-day workout plans and nutrition or wellness advice, based on their fitness goals. Moreover, the goal is also to integrate a mode of financial model through the positioning of affiliated fitness products that the users can browse, gain knowledge about and also purchase from.
The final goal is to produce a mobile app that is hybrid in nature and hence can be run both on Android and iOS and also has enriching and useful UI for performing all the necessary operations (Presa Käld and Svensson 2021).
b) Project Objective
As mentioned, an AI enabled mobile app named Vytal.AI to help individuals achieve their fitness goals through personalized, AI-assisted plans and recommendations, while offering a seamless experience for discovering useful fitness equipment.
Key Objectives
Some of the major objectives that are considered while planning the Vytal.AI mobile application are as follows:
●	To offer AI-generated 7-day workout plans tailored to the user’s fitness goal and time availability
o	Provides quick, personalized routines without needing a trainer.
●	To provide personalized diet and lifestyle tips via a secondary AI feature
o	Smart recommendations can help to encourage healthy habits alongside workouts (Thompson and John 2024).
●	To allow users to register and manage their own personalized fitness experience
o	Enables secure access to personal plans and preferences.
●	To enable discovery and purchase of relevant fitness products from an embedded affiliate store
o	Recommends useful gear and supports affiliate earnings.
o	Creates a robust financial-income model for the app organization.
●	To make the app be accessible from all mobile platforms, irrespective of the OS, either being Android or iOS
o	Ensures broad usability across all smartphones.
Key features and Functionalities
Based on the objectives set previously, the app is meant to consist of the following key features and functionalities:
●	AI Workout Generator (via available online Gen-AI models)
●	AI Diet & Lifestyle Coach
●	User Registration & Login (MySQL-based)
●	Fitness Product catalogue with:
o	Name, Category, Image, Description, Price, Affiliate Buy Link
●	Search and Filter for Products
●	Fully local app, that is can be run without hosting the services on any online or cloud-based server
c) High-Level User Requirements
●	As a new user, I want to register with my email and password
●	As a registered user, I want to log in to access my personalized fitness features
●	As a logged in user, I want to enter my fitness goal and available time to generate a custom workout plan
●	As a logged in user, I want to receive a 7-day plan tailored to my inputs
●	As a logged in user, I want to receive additional health and lifestyle advice for my fitness goal
●	As a logged in user, I want to browse fitness products relevant to my workouts
●	As a logged in user, I want to search for products based on category or name
●	As a logged in user, I want to see product name, image, price, and description
●	As a logged in user, I want to click on a product and open a buy link in browser
●	As a logged in user, I want the app to look visually appealing and provide all details with an adequate balance of text and graphical elements.
d) High-Level System Requirements
Hardware & Software Requirements
Component	Requirement / Purpose
User Device	Smartphone with 2GB+ RAM, Android 10+ or iOS 12+ – for running the Vytal.AI mobile app
Development Machine	8GB RAM, 256GB SSD, Quad-core CPU – for running emulator and local backend server
React Native	Used for cross-platform mobile development (Android + iOS)
Node.js + Express	Acts as backend proxy to handle API requests securely and avoid frontend API key exposure
MySQL	Stores user accounts, product catalogue, and optionally saved plans
Axios / Fetch API	Used within React Native to make HTTP requests to Cohere API and local server
SQLite	May be used for lightweight offline caching of AI outputs or product data (Gaffney et al. 2022).
Cohere API	Gen-AI model that can generates personalized workout plans and lifestyle advice based on user input
Android Emulator / iOS Simulator	Required for local testing of app features during development

Network and Protocols
●	HTTPS – Ensures all communication with Cohere API is encrypted and secure
●	Localhost (127.0.0.1) – Used for development server calls during testing (e.g., for the proxy backend)
●	No external hosting required – All app logic runs locally except Cohere API calls, ensuring ease of deployment and low cost

e) Risk Management and Quality Assurance Plans
Risk Management Matrix
Risk Item	Likelihood	Impact	Mitigation Strategy
AI API limit exceeded	Medium	Medium	Create alternate free accounts or use fallback text suggestions
Network failure during API call	Medium	Low	Add error handler with retry or offline message
App crashes due to memory load	Low	Medium	Optimize image and resource usage
React Native build issues	Medium	Medium	Use version-controlled dependencies and perform regular testing
API key exposed in frontend	High	High	Route API calls via secure local proxy backend
Inconsistent AI responses	Medium	Medium	Use structured prompts and limit token output
Product data not displaying	Low	Medium	Pre-validate product fields before rendering on the interface
Unauthorized user access	Low	High	Add hashed passwords and sanitize all user inputs to prevent security issues

Quality Assurance Plan
In order to ensure that the application follows the necessary quality expectations of the team and the market standards, the following steps are to be taken:
●	Validate all user requirements through functional test cases
●	Use unit testing for login, input forms, and product rendering
●	Use manual testing for mobile responsiveness and layout
●	Perform prompt testing to ensure AI outputs are consistently accurate
●	Ensure data validation for product and user input
●	Use test cases for API errors, including timeout, no response, malformed prompt
●	Conduct UI/UX walkthroughs to assess usability
●	Regular code reviews to ensure maintainability and best practices
f) Team Work Schedule
 
 

The above work schedule highlights all the stages of the app development process and showcases the effort divisions between each member of the team. The legend attached show the task division among the four members.
g) Conclusion
Vytal.AI is a smart, AI-powered mobile app designed to assist users with fitness planning, lifestyle guidance, and curated product discovery. The application will be fully functional prototypical version, developed using React Native and MySQL, and will provide a clean, modern experience. It delivers high value to individual users, with potential for affiliate monetization and commercial expansion for the organization as well.
 
References
Gaffney, K.P., Prammer, M., Brasfield, L., Hipp, D.R., Kennedy, D. and Patel, J.M., 2022. SQLite: past, present, and future. Proceedings of the VLDB Endowment, 15(12).
Holdsworth, M.A., 2019. Health, wellness and wellbeing. Revue Interventions économiques. Papers in Political Economy, (62).
Presa Käld, M. and Svensson, O., 2021. React Native and native application development: A comparative study based on features & functionality when measuring performance in hybrid and native applications.
Thompson, L.P. and John, D., 2024. Revolutionizing Personalized Nutrition Through Deep Learning: Crafting Tailored Diet Plans Based on Genetic, Microbiome, and Environmental Data to Optimize Health and Wellness Outcomes. NatureBio, 1(1), pp.1-9.
