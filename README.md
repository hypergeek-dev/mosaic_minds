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

## Features

### Responsive Web Design
- **Mobile-friendly layout**: Adaptive design for different screen sizes.
- **Viewport and Media Queries**: Uses viewport meta tags and CSS media queries for responsiveness.

### Navigation and Header
- **Navigation Bars**: Top and secondary navigation bars for easy access to different sections.
- **Branding**: Site branding and logo included in the header.

### Styling and Layout
- **External CSS**: For consistent and modern styling.
- **Layout**: Uses grid or flexbox layout for structured content.

### Lazy Loading of Images
- **Performance**: Images are loaded lazily for improved performance.
- **CSS Classes**: Control image visibility and loading behavior.

### Interactive Search Functionality
- **Advanced Search Form**: With filters like day, time, and meeting type.
- **Interactive Elements**: Dropdowns, checkboxes, and radio buttons for user-friendly filter options.

### Content Sections
- **Structure**: Well-structured content sections with clear headings.
- **Meeting Details**: Presented in a list or grid format.

### Footer
- **Additional Information**: Contains links, a copyright notice, and other essential information.
- **Links**: To related subdomains and important sections of the site.

### JavaScript Enhancements
- **Dynamic Content**: Elements like form submissions and interactive content.

### Accessibility
- **Navigation**: Keyboard navigation and screen reader compatibility.
- **Semantic HTML**: And ARIA roles for accessibility.

### Performance Optimization
- **Optimization**: Optimized assets for fast loading.
- **Efficiency**: Compressed CSS and JavaScript.

## Testing

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

## Event Management System Database Schema

As the full-stack developer behind this Django-React event management system, I've designed the database schema to efficiently handle the complex relationships between superusers, registered users, non-registered users, and the various entities such as profiles, meetings, and favorites. This schema ensures that the system can scale while maintaining the integrity and privacy of user data.

### Overview of Relationships

The system's database design encompasses three main Django apps: `profiles`, `meetings`, and `favorites`. Each app is responsible for managing different aspects of the system, from user profiles to event creation and user preferences. Here's how these relationships are structured:

#### Profiles App

- **User-Profile Relationship**: Implements a one-to-one relationship between Django's built-in User model and the custom Profile model. This design choice allows us to extend user information with additional fields like contact details and biographies without modifying the original User model.

## Event Management System Database Schema

As the full-stack developer behind this Django-React event management system, I've designed the database schema to efficiently handle the complex relationships between superusers, registered users, non-registered users, and the various entities such as profiles, meetings, and favorites. This schema ensures that the system can scale while maintaining the integrity and privacy of user data.

### Overview of Relationships

The system's database design encompasses three main Django apps: `profiles`, `meetings`, and `favorites`. Each app is responsible for managing different aspects of the system, from user profiles to event creation and user preferences. Here's how these relationships are structured:

#### Profiles App

- **User-Profile Relationship**: Implements a one-to-one relationship between Django's built-in User model and the custom Profile model. This design choice allows us to extend user information with additional fields like contact details and biographies without modifying the original User model.
  
#### Meetings App
User-Meeting Relationship: Facilitates a one-to-many relationship from users to meetings. A single user (creator) can create multiple meetings, crucial for enabling users to manage their events.

### Implementation Considerations

- **Privacy and Security**: The design considers privacy and security, particularly in user-related relationships, with editing and deletion permissions restricted to the creator of a meeting.

- **Scalability**: By segregating functionalities into distinct apps (profiles, meetings, favorites), the system is modular and easier to scale.

- **Extensibility**: The explicit definition of relationships, especially the many-to-many through models, adds flexibility for future feature enhancements without significant schema changes.

## Wireframes

### Landing Page
This is the first page you see when you arrive on the site.

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088486/Wireframes/Landing_Page_nrmmj8.png" width="60%">
First in labtop size.

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088483/Wireframes/Phone_-_Landing_page._m0ufyt.png" width="20%">
And here, how it looks on phone

### About Us

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088484/Wireframes/About_Us_jrv57k.png" width="60%">
Labtop size.

### Meetings

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088484/Wireframes/Meetings_whzuus.png" width="60%">
Labtop size.


<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088483/Wireframes/Phone_-_Meetings_igjcmp.png" width="20%">
Phone size.
### Volunteer

<img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1715088485/Wireframes/Volunteer_qjpgu8.png" width="60%">
And lastly, the volunteer page on labtop size. 

## Attributions

The hero image used on this site was created with the assistance of OpenAI. We extend our gratitude to OpenAI for their support in enhancing the visual appeal of our platform.

## Licensing

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). This license permits the use, copy, modification, merge, publication, distribution, sublicense, and/or sale of copies of the software, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.