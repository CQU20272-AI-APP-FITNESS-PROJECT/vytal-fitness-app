Vytal.AI - AI-Powered Personal Fitness Companion


This is an application that leverages on Generative AI to assist users in achieving their fitness goals. The app generates personalized 7-day workout 
routine and offers tailored diet and lifestyle advice based on user input. 
Additionally, it allows users discover and purchase relevant fitness products through an embedded store. The App is an IOS/Android app.

Project Overview
Vytal.AI is a smart fitness companion mobile application that leverages generative AI to provide users with personalized 7-day workout plans,
nutrition advice, and lifestyle guidance. The app integrates an affiliate fitness product marketplace, creating a comprehensive fitness ecosystem 
that helps users achieve their health goals while discovering relevant fitness equipment.

 Project Background
 
In today's digital age, health and wellness have become growing priorities among individuals. However, most fitness apps either require expensive subscriptions
or rely on generalized content that doesn't meet personalized fitness goals. Many users find it challenging to integrate personalized workout routines, lifestyle guidance,
and fitness product recommendations in one convenient solution.

Vytal.AI addresses these challenges by offering a hybrid mobile application that runs on both Android and iOS platforms, providing AI-driven personalization without
the need for expensive subscriptions or cloud hosting.

 Key Objectives

AI-Generated Workout Plans: Provide personalized 7-day workout routines tailored to user fitness goals and time availability
Smart Lifestyle Coaching: Offer AI-powered diet and lifestyle recommendations to encourage healthy habits
User Management: Enable secure user registration and personalized fitness experience management
Affiliate Product Discovery: Allow users to browse and purchase relevant fitness products through an embedded store
Cross-Platform Accessibility: Ensure broad usability across Android and iOS smartphones
Local Operation: Functions entirely offline except for AI API calls, eliminating hosting costs

 Key Features & Functionalities
🤖 AI-Powered Features
AI Workout Generator using advanced Gen-AI models (Cohere API)
AI Diet & Lifestyle Coach for personalized nutrition and wellness advice
Structured prompts ensuring consistent and accurate AI responses

User Management

User Registration & Login with MySQL-based authentication
Secure password hashing and input sanitization
Personalized user profiles and preferences

Product Marketplace

Fitness Product Catalogue with comprehensive details:
Product name, category, images, descriptions
Pricing information and affiliate purchase links
Search & Filter Functionality for easy product discovery
Category-based browsing and name-based search

 Mobile Experience

Cross-platform compatibility (Android 10+ / iOS 12+)
Responsive UI design with optimal text and graphical balance
Local operation with minimal network dependencies

 Technology Stack

Component	Technology	Purpose
Frontend	React Native	Cross-platform mobile development
Backend	Node.js + Express	API proxy server for secure operations
Database	MySQL	User accounts, product catalogue, saved plans
AI Integration	Cohere API	Generative AI for workout plans and advice
HTTP Client	Axios/Fetch API	API communication within React Native
Local Storage	SQLite	Offline caching of AI outputs and product data
Development	Android Emulator/iOS Simulator	Local testing environment

System Requirements

Hardware Requirements
User Device: Smartphone with 2GB+ RAM, Android 10+ or iOS 12+
Development Machine: 8GB RAM, 256GB SSD, Quad-core CPU

Network & Protocols

HTTPS: Encrypted communication with Cohere API
Localhost (127.0.0.1): Development server during testing
No External Hosting: All logic runs locally except AI API calls



Risk Management & Quality Assurance

Risk Mitigation Strategies

- API Limit Management: Fallback accounts and offline suggestions
- Network Failure Handling: Error handlers with retry mechanisms
- Memory Optimization: Efficient image and resource usage
- Security: API key protection via secure proxy backend
- Input Validation: Comprehensive user input sanitization
- Quality Assurance Plan
- Functional test cases for all user requirements
- Unit testing for login, forms, and product rendering
- Manual testing for mobile responsiveness
- AI prompt testing for consistent outputs
- Regular code reviews and UI/UX walkthroughs
  
