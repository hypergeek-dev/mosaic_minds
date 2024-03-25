# Mosaic Mind
# Mosaic Mind: Embracing Neurodiversity Across the UK
[Agile Projectboard](https://github.com/users/hypergeek-dev/projects/9)

# Table of Contents

1. [Mosaic Mind](#mosaic-mind)
2. [About Mosaic Mind](#about-mosaic-mind)
3. [Features](#features)
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
4. [Testing](#testing)
    - [Manual Testing of User Stories](#manual-testing-of-user-stories)
    - [Validation of JavaScript Code](#validation-of-javascript-code)

# Mosaic Mind
# Mosaic Mind: Embracing Neurodiversity Across the UK
[Agile Projectboard](https://github.com/users/hypergeek-dev/projects/9)

Welcome to Mosaic Mind – A sanctuary for diversity, understanding, and support.

## About Mosaic Mind

Mosaic Mind is a compassionate association dedicated to nurturing an inclusive community for individuals with neurodiverse conditions. 
Our mission is to provide a platform where neurodiversity is not just accepted but celebrated. 

We run a network of support groups all over the UK, offering a safe space for sharing experiences, learning, and growing together.
This site provides access to online meetings in your local area through our event management system.

# Features

## Responsive Web Design
- **Mobile-friendly layout**: Adaptive design for different screen sizes.
- **Viewport and Media Queries**: Uses viewport meta tags and CSS media queries for responsiveness.

## Navigation and Header
- **Navigation Bars**: Top and secondary navigation bars for easy access to different sections.
- **Branding**: Site branding and logo included in the header.

## Styling and Layout
- **External CSS**: For consistent and modern styling.
- **Layout**: Uses grid or flexbox layout for structured content.

## Lazy Loading of Images
- **Performance**: Images are loaded lazily for improved performance.
- **CSS Classes**: Control image visibility and loading behavior.

## Interactive Search Functionality
- **Advanced Search Form**: With filters like day, time, and meeting type.
- **Interactive Elements**: Dropdowns, checkboxes, and radio buttons for user-friendly filter options.

## Content Sections
- **Structure**: Well-structured content sections with clear headings.
- **Meeting Details**: Presented in a list or grid format.

## Footer
- **Additional Information**: Contains links, a copyright notice, and other essential information.
- **Links**: To related subdomains and important sections of the site.

## JavaScript Enhancements
- **Dynamic Content**: Elements like form submissions and interactive content.

## Accessibility
- **Navigation**: Keyboard navigation and screen reader compatibility.
- **Semantic HTML**: And ARIA roles for accessibility.

## Performance Optimization
- **Optimization**: Optimized assets for fast loading.
- **Efficiency**: Compressed CSS and JavaScript.

# Testing

In this section, I will outline the testing activities I have undertaken for my project. This includes manual testing of user stories and validation of JavaScript code using appropriate tools.

## Table of Contents
1. [Manual Testing of User Stories](#manual-testing-of-user-stories)
2. [Validation of JavaScript Code](#validation-of-javascript-code)

---

## Manual Testing of User Stories

For each user story in my project, I have conducted thorough manual testing to ensure that the functionality meets the specified requirements. Here are the user stories and the results of my testing:

#### User Stories

### Epic
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

---

## Validation of JavaScript Code

To ensure the quality and reliability of the JavaScript code in my project, I have used appropriate validation tools, such as linting tools. Here's an overview of the validation process:

1. **Linting**:
   - I utilized a linting tool to analyze my JavaScript code for potential errors, code style violations, and best practice adherence.
   - Final result: No errors. 


Overall, by conducting thorough manual testing of user stories and validating my JavaScript code, I aimed to ensure that the project meets the desired standards and functions correctly.

# Event Management System Database Schema

As the full-stack developer behind this Django-React event management system, I've designed the database schema to efficiently handle the complex relationships between superusers, registered users, non-registered users, and the various entities such as profiles, meetings, and favorites. This schema ensures that the system can scale while maintaining the integrity and privacy of user data.

## Overview of Relationships

The system's database design encompasses three main Django apps: `profiles`, `meetings`, and `favorites`. Each app is responsible for managing different aspects of the system, from user profiles to event creation and user preferences. Here's how these relationships are structured:

### Profiles App

- **User-Profile Relationship**: Implements a one-to-one relationship between Django's built-in User model and the custom Profile model. This design choice allows us to extend user information with additional fields like contact details and biographies without modifying the original User model.
  
  **Schema Definition**:
  ```python
  class Profile(models.Model):
      user = models.OneToOneField(User, on_delete=models.CASCADE)
      # Additional fields...

Meetings App
User-Meeting Relationship: Facilitates a one-to-many relationship from users to meetings. Each meeting is created by a single user (creator), but a user can create multiple meetings. This relationship is crucial for enabling users to manage their own events.

Schema Definition:

class Meeting(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    # Meeting details...


Favorites App
User-Favorite Meeting Relationship: Represents a many-to-many relationship between users and meetings through favorites. Users can mark multiple meetings as favorites, and meetings can be favorited by multiple users. This relationship is explicitly managed through the Favorite model to allow for future enhancements such as tracking when a meeting was favorited.

Schema Definition:

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    # Potential additional fields...

Implementation Considerations
Privacy and Security: The schema design considers privacy and security, especially in relationships that involve user data. For instance, editing and deletion permissions are restricted to the creator of a meeting.
Scalability: By segregating functionalities into distinct apps (profiles, meetings, favorites), the system is modular, making it easier to scale and maintain.
Extensibility: The explicit definition of relationships, especially the many-to-many through models, provides flexibility to add more features in the future without significant schema changes.
