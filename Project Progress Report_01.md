Table of Contents

1. Introduction	2
2. User Stories	2
3. Wireframe Designs	4
4. Database Design	6
4.1 ER Diagram	6
4.2 Database Description	7
5. Software Architecture	11
5.1 Software Components	11
5.2 Data Flow Design	13
5.3 Class Diagram	13
Model Class Descriptions	14
6. AI Component Description	15
6.1 AI Component Usage Table	15
7. Platforms/languages/tools/frameworks	16
8. Comprehensive Test Plan	18
8.1 User Acceptance Test Cases	18
9. Evidence of Setup	19
9.1 Version Control	19
9.2 Project Tracking	19
10. Conclusion	19

 
1. Introduction
In today's digital era, health and wellbeing are becoming increasingly important to individuals. However, most fitness applications demand pricey memberships or rely on generic information that may not satisfy individual fitness objectives (Stephenson et al. 2018). The team is working on a fitness-focused mobile app called Vytal.AI. It will be a smart fitness companion application for mobile devices that employs generative AI to give users with individualized exercise routines and health recommendations based on their fitness objectives, as well as integrated financial assistance for the business, through affiliated shopping features. 
This report serves as a technical design plan documentation for this project. User stories will be defined, followed by detailed design documentation of the database and the software architecture. Finally a test plan will be provided and evidence of the team project setup will be shared.
2. User Stories
User Registration & Authentication
1.	The user will like to register using their email and password, so that he/she can create a personalized fitness profile.
2.	As a returning user, I want to log in using my registered credentials, so that I can access my personalized workout and diet plans.
AI-Generated Fitness Plan
3.	As a user, I want to input my fitness goal, available workout days, and time per day, so that the app can generate a 7-day personalized workout plan.
4.	As a user, I want to view my generated workout plan within the app, so that I can follow it each day without needing external tools.
AI-Powered Lifestyle Advice
5.	As a user, I want to receive personalized lifestyle or diet advice based on my fitness goal, so that I can improve my overall well-being.
6.	As a user, I want to re-generate advice as needed, so that I can receive alternative suggestions suited to my changing preferences.
Affiliate Product Discovery
7.	As a user, I want to browse fitness-related products relevant to my goals, so that I can find and buy useful equipment or supplements.
8.	As a user, I want to view product descriptions and prices, so that I can make informed purchasing decisions.
9.	As a user, I want to click on a product to be redirected to an external affiliate purchase link, so that I can buy the product easily.
Search and Filtering
10.	As a user, I want to search for fitness products by keyword, so that I can find relevant gear or supplements faster.
11.	As a user, I want to filter products based on type or category (e.g., gear, nutrition), so that I can explore only the items that interest me.
Account & Session Management
12.	As a user, I want to securely log out of the application, so that my account remains private when using shared devices.
3. Wireframe Designs
   
  
The app screens have been designed with the aim to suffice for a high-fidelity prototype (Li, W. Tigwell and Shinohara 2021). These screens will help to later stage the actual development phase of the applications. Here is a concise description of each of the 5 developed Vytal.AI app screens:
1.	Login/Sign-Up Screen
o	Clean on-boarding screen with a modern gradient background.
o	Includes tab-switching between Login and Sign-Up forms.
o	Features form validation, user-friendly input fields, and "Forgot Password" link.
o	Designed for fast mobile entry and secure access.
2.	Dashboard (Home Screen)
o	Personalized greeting with user’s name.
o	Quick Action buttons for AI Plans, Store, Profile, and Log Activity.
o	Clean layout ensures easy access to major features.
o	Navigation bar at the bottom enhances mobility across app sections.
3.	AI Assistant Screen
o	Chat-based interface for interacting with Vytal.AI.
o	Includes toggle tabs for Workout Plans and Lifestyle Tips.
o	Auto-generated workout plans displayed clearly with formatting (Smith et al. 2019).
o	Input field at the bottom allows natural text queries.
4.	Store Screen
o	Affiliate product cards featuring images, descriptions, and prices.
o	Modal popup appears on product click with purchase options.
o	Minimalist design promotes product focus.
5.	Profile Screen
o	Editable user details including name, email, and fitness goals.
o	Dropdown menu for primary goal selection.
o	Includes Save and Logout actions, enhancing user control.
4. Database Design
The database design is an important part for software design. This helps to clearly understand the data storage architectural needs of the app. In this scenario, a relational database has been designed. Relational databases allow storage of data in the form tables that are connected to each other in the form of secured relationships (Győrödi et al. 2021). Five primary tables are identified, and their attributes, keys and relationships are showcased in the Entity-relationship Diagram attached below.
4.1 ER Diagram
 
4.2 Database Description
This database is designed to support a fitness-focused mobile application that includes AI-generated workout plans, personalized user goals, and affiliate product promotions. Below are the key tables and their descriptions:
1. user
Stores registered user details, including physical metrics needed to personalize AI suggestions.
Field	Type	Description
user_id	INT (PK)	Unique identifier for each user
full_name	STRING	User’s full name
email	STRING	User’s email address (unique)
password_hash	STRING	Encrypted password
weight	FLOAT	User's weight in kg
height	FLOAT	User's height in cm
dob	DATE	Date of birth
gender	STRING	Gender of the user
goal_id	INT (FK)	Links to the user’s selected goal
created_at	DATETIME	Account creation timestamp

2. goal
Defines the user’s fitness objective and daily time commitment.
Field	Type	Description
goal_id	INT (PK)	Unique identifier for each goal
goal_name	STRING	e.g., "Lose Fat", "Gain Muscle"
time_per_day_minutes	INT	Minutes user dedicates daily

3. product
Contains affiliate product data shown in the in-app store.
Field	Type	Description
product_id	INT (PK)	Unique identifier for each product
name	STRING	Product name
description	STRING	Brief product details
price	STRING	Price shown to user (not actual checkout)
image_url	STRING	Image source URL
affiliate_link	STRING	External purchase URL

4. user_interest
Tracks when a user clicks “Add to Cart” (redirect to affiliate link).
Field	Type	Description
interest_id	INT (PK)	Unique identifier for the interaction
user_id	INT (FK)	User who clicked
product_id	INT (FK)	Product clicked
clicked_at	DATETIME	Timestamp of the interaction

5. ai_result
Stores AI-generated fitness suggestions or routines per user-goal combo.
Field	Type	Description
result_id	INT (PK)	Unique identifier for each AI result
user_id	INT (FK)	User for whom the result was generated
goal_id	INT (FK)	Goal related to the result
result_text	TEXT	Output string from AI
generated_at	DATETIME	Timestamp of generation

Here is the list of relationships and cardinalities that connects the entities or tables in the ER diagram designed above:
1.	A user can have one goal, but each goal can be assigned to many users.
2.	A user can show interest in many products, but each interest belongs to one user.
3.	A product can be marked interested by many users, but each interest record links to only one product.
4.	A user can receive many AI-generated results, but each result belongs to only one user.
5.	Each AI result is linked to one goal, and each goal can have many AI-generated results.
5. Software Architecture
The Model-View-Controller (MVC) layered within a Frontend-Backend-Database architecture is the chosen software architecture of this project. This structure ensures a clean separation of concerns:
•	Model: Handles data (users, goals, products, AI results).
•	View: Mobile UI (React Native screens).
•	Controller: Manages app logic, interactions, and backend API communication (Paul and Nalwaya 2019).
5.1 Software Components
 
Component Breakdown of the above diagram will help to gain better understanding as to how the various technologies and tools will interact in order to instantiate the MVC architecture for the app.
1. Frontend (Mobile App - React Native)
•	View Layer
o	Built using React Native components.
o	Renders screens like Login, Home, Goal Setup, AI Results, Product Discovery.
•	Controller Layer
o	Handles input logic, validations, and invokes API calls.
o	Manages screen navigation and local state.
2. Backend (Node.js + Express)
•	Acts as a secure API proxy for AI API (Cohere).
•	Hosts REST endpoints for:
o	User registration/login
o	Goal and result management
o	Product listing
•	Performs authentication, validation, and business logic.
3. Database (MySQL)
•	Stores:
o	User profiles
o	Goals and time availability
o	AI-generated result history
o	Product catalog and user interest logs
5.2 Data Flow Design
 
The Data Flow Diagram (DFD) that has been created and presented above, showcases the Level-90 version of the entire model. It depicts the essential activities of the Vytal.AI application. The DFD has been so designed that it consists of three key processes such as the handling of user requests, creation of AI-powered fitness and lifestyle routines, and finally displaying the affiliate product suggestions for users to browse and purchase. The user interacts with the system via signing up, logging in, and selecting goals. These inputs are saved in the user database. The app uses the Cohere AI API to create individualized plans that are saved in the AI Results store. Users can also get purchase ideas from the purchase Catalog. All data flows between external entities, processes, and data repositories are plainly visible.
5.3 Class Diagram
 
This UML class diagram employs the MVC approach, dividing the application into Models (data entities such as User, Goal, and Product), Controllers (logic handlers such as UserController and AIController), and Views (screens such as HomeScreen and ProductScreen). It assures modular architecture, streamlines data flow, and allows for easy maintenance and future React Native integration. The section below demonstrates the details regarding the model classes of the application.
Model Class Descriptions
1.	User
o	Represents an individual using the app.
o	Stores personal and demographic details including height, weight, and DOB.
2.	Goal
o	Contains predefined fitness goals (e.g., "Lose Weight", "Build Muscle") and associated time commitments.

3.	AIResult
o	Stores the AI-generated fitness or lifestyle plans for each user based on selected goals.
o	Each entry is tied to both a user and a goal.
4.	Product
o	Represents an affiliate fitness-related product.
o	Includes image, description, and external purchase link.
5.	User Interest
o	Tracks which products a user showed interest in by clicking on them.
o	Useful for analytics and personalization.
6. AI Component Description
The Vytal.AI application leverages Generative AI via the Cohere API to provide personalized fitness support. The AI component intelligently generates 7-day workout plans based on the user’s selected fitness goals and available time. A secondary AI feature delivers customized diet and lifestyle advice, making the app a holistic, smart fitness assistant. The Cohere AI platform provides trial-level APIs for development, which will be used for this purpose to generate the required outputs, in a desired form of structured JSON objects (Singh 2025).



6.1 AI Component Usage Table
Feature	AI Functionality	Impact
7-Day Workout Plan Generator	Uses Cohere API to generate personalized workout routines	Delivers custom plans without human trainer intervention
Lifestyle & Diet Advice	AI-generated health, diet, and sleep guidance	Encourages holistic well-being through intelligent tips
Prompt Engineering	Structured prompts crafted based on user input. Generating output in desirably structured JSON objects.	Ensures accuracy and relevance of AI output

7. Platforms/languages/tools/frameworks
As already discussed previously, the frontend of the Vytal.AI app will be developed using the React Native cross-platform development framework. This will allow the development of an application that can be easily deployed onto any platform, whether iOS or Android. 
Moreover, the backend of the application will be developed using Node.js and Express.js, which are considered to be among the most secured and robust options for backend development for web and mobile application systems. This will also allow the easy access and data routing with the help of API interactions and so on. 
Finally, in order for data storage and access, a MySQL relational database will be used, that will store structured user and product data. This is a better alternative over SQLite which is lightweight for a mobile app, but is mainly used for local storage, while MySQL can allow server or cloud based data storage and access means. 
Below, a brief description of each of the tools and platforms that will be used across the development of this application are listed:
Languages:
•	JavaScript – Core scripting language for both frontend and backend logic.
•	JSX – JavaScript XML used in React Native for component-based UI development.
•	SQL – Used for defining and querying relational data in the database.
Frontend Tools & Frameworks:
•	React Native – A framework for building native mobile apps using React.
•	Bootstrap – A CSS framework to quickly build responsive UI layouts.
•	Custom CSS – For styling specific UI components beyond Bootstrap presets.
Backend Tools & Frameworks:
•	Node.js – A runtime environment for executing JavaScript on the server side.
•	Express.js – A minimalist web framework for building efficient backend APIs.
•	Axios / Fetch API – Tools for making HTTP requests to external APIs like Cohere.
Database Platform:
•	MySQL – A robust relational database for structured storage of app data.
•	SQLite (optional) – A lightweight embedded database for local data caching.
This stack ensures performance, portability, and future scalability of the application.
8. Comprehensive Test Plan
Testing is important to validate the usefulness and completion of any IT-based or development project. In this scenario, unit testing, integration testing, and user acceptability testing (UAT) are all part of Vytal.AI's testing methodology. The appropriate operation of individual parts and combination procedures (such login, AI plan creation, and product presentation) will be guaranteed by unit and integration testing. The initial user-acceptance test plan for the application is provided in the table below:
8.1 User Acceptance Test Cases
Test Case ID	User Story Reference	Test Description	Expected Outcome
UAT-01	As a user, I want to sign up and log in	User enters details and logs into the app	User is authenticated and navigates to dashboard
UAT-02	As a user, I want AI to generate workout plans	User submits goal and time availability	AI returns a 7-day plan tailored to input
UAT-03	As a user, I want diet/lifestyle suggestions	User triggers the lifestyle AI feature	AI displays relevant diet and lifestyle tips
UAT-04	As a user, I want to explore fitness products	User views and clicks “Add to Cart” for a product	Redirects to affiliate product page
UAT-05	As a user, I want the app to work smoothly	Test navigation, buttons, and transitions	No crashes, lag, or broken functionality


9. Evidence of Setup
9.1 Version Control
A new GIT repository is created for this purpose that will allow the maintained and access of code across various version control accessibility features, among the team members.
<GitHub Screenshot Here>
9.2 Project Tracking
 
 

Trello, a visual project management and collaboration tool, is being used for project tracking. It provides an intuitive board and card system that enables the team to easily organise, assign, and monitor tasks among the four group members throughout the development phase. This ensures clear visibility of progress, responsibilities, and deadlines during the entire project lifecycle.

10. Conclusion
Hence, in conclusion it can be stated that Vytal.AI is a well-organized cross-platform fitness app that uses AI to make tailored health programs and suggest products. The solution, which is supported by contemporary architecture, user-centered design, and a strong technology stack, is scalable, intelligent, and ready to improve digital well-being in a smart, accessible way. This document can successfully suffice as the detailed design documentation for the final development phase of the project to commence as needed.
 
References
Stephenson, J., Heslehurst, N., Hall, J., Schoenaker, D.A., Hutchinson, J., Cade, J.E., Poston, L., Barrett, G., Crozier, S.R., Barker, M. and Kumaran, K., 2018. Before the beginning: nutrition and lifestyle in the preconception period and its importance for future health. The Lancet, 391(10132), pp.1830-1841.
Li, J., W. Tigwell, G. and Shinohara, K., 2021, May. Accessibility of high-fidelity prototyping tools. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1-17).
Smith, R., Tang, T., Warren, J. and Rixner, S., 2019, July. Auto-generating visual exercises for learning program semantics. In Proceedings of the 2019 ACM Conference on Innovation and Technology in Computer Science Education (pp. 360-366).
Győrödi, C.A., Dumşe-Burescu, D.V., Győrödi, R.Ş., Zmaranda, D.R., Bandici, L. and Popescu, D.E., 2021. Performance impact of optimization methods on MySQL document-based and relational databases. Applied Sciences, 11(15), p.6794.
Paul, A. and Nalwaya, A., 2019. React Native for Mobile Development. Apress.
Singh, D.K., 2025. Unraveling Enterprise Large Language Model platform-Cohere.





