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

# User Stories

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


# Development



### Security Vulnerabilities

#### `nth-check` Vulnerability
- **Severity**: High
- **Version Affected**: < 2.0.1
- **Details**: The vulnerability in `nth-check` can lead to inefficient regular expression complexity, potentially causing performance issues. 
- **Fix**: Update to version > 2.0.1. May require updating `react-scripts` to v3.0.1, introducing potential breaking changes.
- **Reference**: [GHSA-rp65-9cf3-cjxr](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)

#### `postcss` Vulnerability
- **Severity**: Moderate
- **Version Affected**: < 8.4.31
- **Details**: A parsing error in `postcss` can lead to potential security risks.
- **Fix**: Update to a version higher than 8.4.31. This update might also require changing `react-scripts`, which could lead to breaking changes.
- **Reference**: [GHSA-7fh5-64p2-3v2j](https://github.com/advisories/GHSA-7fh5-64p2-3v2j)

#### Steps taken
I chose not to update theese to avoid breaking changes at this point. 

## Website Color Scheme

The color scheme for the website is inspired by the hero image and consists of the following colors:

<p>
  <span style="background-color: rgb(206, 196, 163); padding: 10px; display: inline-block; margin-right: 10px;">Light Beige<br>RGB(206, 196, 163)</span>
  <span style="background-color: rgb(28, 38, 47); padding: 10px; display: inline-block; margin-right: 10px;">Dark Slate Gray<br>RGB(28, 38, 47)</span>
  <span style="background-color: rgb(81, 111, 119); padding: 10px; display: inline-block; margin-right: 10px;">Dim Gray<br>RGB(81, 111, 119)</span>
  <span style="background-color: rgb(189, 134, 92); padding: 10px; display: inline-block; margin-right: 10px;">Pale Taupe<br>RGB(189, 134, 92)</span>
  <span style="background-color: rgb(121, 70, 56); padding: 10px; display: inline-block; margin-right: 10px;">Sienna<br>RGB(121, 70, 56)</span>
</p>

