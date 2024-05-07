# Mosaic Mind: Embracing Neurodiversity Across the UK

[Agile Projectboard](https://github.com/users/hypergeek-dev/projects/9)

The site is live here: [Mosaic Minds](https://mosaicminds-d8fd1fea2187.herokuapp.com/)

## Table of Contents

1. [About Mosaic Mind](#about-mosaic-mind)
2. [Features](#features)
   - [Responsive Web Design](#responsive-web-design)
   - [Navigation and Header](#navigation-and-header)
   - [Styling and Layout](#styling-and-layout)
   - [Lazy Loading of Images](#lazy-loading-of-images)
   - [Interactive Search Functionality](#interactive-search-functionality)
   - [Content Sections](#content-sections)
   - [Footer](#footer)
   - [JavaScript Enhancements](#javascript-enhancements)
   - [Accessibility](#accessibility)
   - [Performance Optimization](#performance-optimization)
3. [Testing](#testing)
   - [Manual Testing of User Stories](#manual-testing-of-user-stories)
   - [Validation of JavaScript Code](#validation-of-javascript-code)
4. [Event Management System Database Schema](#event-management-system-database-schema)
   - [Overview of Relationships](#overview-of-relationships)
     - [Profiles App](#profiles-app)
     - [Meetings App](#meetings-app)
   - [Implementation Considerations](#implementation-considerations)
5. [Attributions](#attributions)
6. [Licensing](#licensing)

## About Mosaic Mind

Mosaic Mind is a compassionate association dedicated to nurturing an inclusive community for individuals with neurodiverse conditions.
Our mission is to provide a platform where neurodiversity is not just accepted but celebrated.

We run a network of support groups all over the UK, offering a safe space for sharing experiences, learning, and growing together.
This site provides access to online meetings in your local area through our event management system.

## Features:

1. **Meetings App:**

   - List of scheduled meetings visible without authentication.
   - Authentication required for adding, editing, and favoriting meetings.
   - Ability to add meetings.
   - Ability to edit/delete own meetings.
   - Option to favorite/unfavorite meetings.
   - Profile page with listed favorite meetings.
   - Editable user information (username, email, phone number, role at meetings) on the profile page.

2. **Authentication:**

   - Required for certain actions like adding/editing meetings and accessing user-specific features.

3. **Search Functionality:**

   - Available to all users.
   - Allows searching for meetings.

4. **Navigation:**

   - Links to all apps (Meetings, Volunteer, etc.) on a page for easy access.

5. **Volunteer App:**
   - Accessible to everyone, regardless of authentication.
   - Form to fill out for volunteering.

## Tech Stack

### Backend

- **Django** - Python-based web framework for building robust backend applications.
- **dj-rest-auth** - Django package for RESTful authentication.
- **Django Allauth** - Django package for authentication, registration, account management, and social authentication.
- **Django CORS Headers** - Django package for handling Cross-Origin Resource Sharing (CORS).
- **Django Filter** - Django package for filtering querysets dynamically.
- **Django Phonenumber Field** - Django package for storing phone numbers in models.
- **Django Rest Framework** - Django package for building RESTful APIs.
- **Django Rest Framework Simple JWT** - Django package for JWT authentication.
- **Gunicorn** - Python WSGI HTTP Server for UNIX.

### Frontend

- **React** - JavaScript library for building user interfaces.
- **React Bootstrap** - React components for faster and easier web development using Bootstrap.
- **Axios** - Promise-based HTTP client for the browser and Node.js.
- **Date-fns** - JavaScript date utility library.
- **JWT Decode** - JavaScript library for decoding JWTs.
- **React Icons** - SVG icons as React components.
- **React Infinite Scroll Component** - React component for infinite scrolling.
- **React Router DOM** - DOM bindings for React Router.
- **React Hook Form** - React library for flexible and easy-to-use form validation.
- **Web Vitals** - Library for measuring web performance metrics.

## Deployment

To deploy the backend locally, follow these steps:

1. Clone the repository from GitHub:

```
git clone https://github.com/users/hypergeek-dev/projects/mosaicminds
```

2. Install the required dependencies using pip:

```
pip install -r requirements.txt
```

3. Create environmental file:

- Create a new file named `.env` in the root directory of your project.
- Open the `.env` file in a text editor and add the following lines:

```
import os

os.environ['ALLOWED_HOSTS'] = '(Add the list of allowed hosts for your application)'
os.environ['API_KEY'] = '(Add your API key for accessing external services)'
os.environ['CLIENT_ORIGIN'] = '(Add the URL of your client application)'
os.environ['CLOUDINARY_URL'] = '(Add your Cloudinary URL for storing and managing media)'
os.environ['DATABASE_URL'] = '(Add the URL for connecting to your database)'
os.environ['HEROKU_POSTGRESQL_AQUA_URL'] = '(Add the URL for connecting to your Heroku PostgreSQL database)'
os.environ['NEWS_API_KEY'] = '(Add your API key for accessing news data)'
os.environ['SECRET_KEY'] = '(Add a secret key for securing your application)'
```

4. Make migrations

```
python3 manage.py makemigrations
python3 manage.py migrate

```

5. Go to the frontend folder

```
cd frontend
```

6. Install Frontend dependencies

```
npm install
```

7. Start the backend server:

```
python manage.py runserver
```

# If you desire to use the demo-users and the demo-meetings.

```
python create_demo_users.py
```

Make sure to make the users before the meetings, unless you already have more than 20 members in your database.

```
python create_demo_meetings.py
```

## Reusable Components

## Reusable Components

1. **FavoritesList.js**: This component displays a list of favorite meetings for a user. It can be reused across different parts of the application where a user's favorite meetings need to be displayed.

2. **MeetingEditForm.js**: This component provides a form for editing meeting details. It can be reused whenever users need to edit the details of a meeting.

3. **NavBar.js**: This component represents the navigation bar of the application. It can be reused across all pages to provide consistent navigation functionality.

4. **ProfileEditForm.js**: This component offers a form for editing user profile details such as username, email, phone number, and role at meetings. It can be reused wherever user profile editing functionality is required.

5. **UserPasswordForm.js**: This component presents a form for users to update their passwords. It can be reused across different parts of the application where password updating functionality is needed.

6. **MeetingDetails.js**: This component displays detailed information about a meeting. It can be reused wherever meeting details need to be shown, such as in a list of meetings or on a meeting details page.

7. **MeetingSearchForm.js**: This component provides a search form for users to search for meetings based on specific criteria. It can be reused wherever meeting search functionality is required.

8. **ProfileDetails.js**: This component displays detailed information about a user's profile, such as their username, email, phone number, and role at meetings. It can be reused wherever user profile details need to be shown.

9. **UserNameForm.js**: This component offers a form for users to update their usernames. It can be reused across different parts of the application where username updating functionality is needed.

### Manual Testing of User Stories

For each user story in my project, I have conducted thorough manual testing to ensure that the functionality meets the specified requirements. Here are the user stories and the results of my testing:

#### Epic

- **_User Story for Event Management_**
  - As a registered user, I want to be able to edit or delete the online meetings I have created, so that I can manage my events and keep the information up-to-date.

### Must-Have

- **User Story for Viewing Events**
  - As a registered user, I want to view all available meetings, so that I can browse and decide which events to attend.
- **User Story for Searching Events**
  - As a registered user, I want to use a search form to find specific meetings, so that I can quickly and efficiently find events that match my interests or availability.
- **User Story for Event Creation**
  - As a registered user, I want to add online meeting events, so that other users can view and join these meetings.
- **User Story for Profile Management**
  - As a registered user, I want to edit or delete my profile on the profile page, so that I can control my personal information and how I am represented on the platform.

### Good to Have

- _User Story for Favoriting Events_
  - As a registered user, I want to mark meetings as favorites on the meeting detail page, so that I can easily find them later and keep track of events I'm interested in.
- _User Story for Managing Favorites_
  - As a registered user, I want to have a favorites page where I can view my collection of favorite meetings, so that I can easily revisit and manage the events I am most interested in.
- _User Story for Volunteering Application_
  - As a registered user, I want to apply to volunteer, so that I can contribute to the community and participate in organizing or supporting events.

### Validation of JavaScript Code

To ensure the quality and reliability of the JavaScript code in my project, I have used appropriate validation tools, such as linting tools. Here's an overview of the validation process:

1. **Linting**:
   - I utilized a linting tool to analyze my JavaScript code for potential errors, code style violations, and best practice adherence.
   - Final result: No errors.

### Event Management System Database Overview:

This database diagram represents the underlying structure of our event management system built using Django and React. It facilitates the organization and participation in meetings and volunteer activities. Let's break down the key components:

1. **User_Profile:**

   - Stores user authentication and profile information.
   - Includes fields for username, email, password, and more.

2. **Meeting:**

   - Tracks details of scheduled meetings.
   - Attributes include name, start/end times, location, description, and more.
   - Linked to user profiles for ownership and management.

3. **Favorite:**

   - Manages user-selected favorite meetings.
   - Records the relationship between users and their favorite meetings.

4. **VolunteerApplication:**
   - Captures volunteer interest through a simple form.
   - Contains fields for name, email, motivation, etc.

**Relationships:**

- Meetings are owned and managed by users, facilitating authentication-based features like adding, editing, and favoriting meetings.
- Favorite meetings are associated with users, enabling personalized meeting preferences.
- Volunteer applications are not directly tied to meetings but serve as a separate entity for expressing interest in volunteering.

This database structure forms the backbone of our event management system, offering seamless user experiences and efficient organization of meetings and volunteer activities.

![Image Description](https://res.cloudinary.com/dgvipn16a/image/upload/v1715101195/databasediagram_vyhhhj.png)

### Implementation Considerations

- **Privacy and Security**: The design considers privacy and security, particularly in user-related relationships, with editing and deletion permissions restricted to the creator of a meeting.

- **Scalability**: By segregating functionalities into distinct apps (profiles, meetings, favorites), the system is modular and easier to scale.

- **Extensibility**: The explicit definition of relationships, especially the many-to-many through models, adds flexibility for future feature enhancements without significant schema changes.

## Wireframes

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088486/Wireframes/Landing_Page_nrmmj8.png" width="60%"><br>
First in labtop size.<br><br>

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088483/Wireframes/Phone_-_Landing_page._m0ufyt.png" width="20%"><br>
And here, how it looks on phone<br><br>

### About Us

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088484/Wireframes/About_Us_jrv57k.png" width="60%"><br>
Labtop size.<br><br>

### Meetings

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088484/Wireframes/Meetings_whzuus.png" width="60%"><br>
Labtop size.<br><br>

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088483/Wireframes/Phone_-_Meetings_igjcmp.png" width="20%"><br>
Phone size.<br><br>

### Volunteer

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088485/Wireframes/Volunteer_qjpgu8.png" width="60%"><br>
And lastly, the volunteer page on labtop size.<br>

## Attributions

The hero image used on this site was created with the assistance of OpenAI. We extend our gratitude to OpenAI for their support in enhancing the visual appeal of our platform.

## Licensing

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). This license permits the use, copy, modification, merge, publication, distribution, sublicense, and/or sale of copies of the software, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
