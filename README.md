# Guidance Counsellor's Communication Logs
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<!-- ![admin demo](client/src/components/images/heart.jpg) -->
<br />
<p align="center">
  <img src="client/src/components/images/heart.jpg" alt="Logo"> 
  <h3 align="center">School Counsellor's Communication Logs</h3>
  <p align="center">
    During the pandemic, school counselors needed to keep track of their students, communication and stats. I volunteered to create an app for the counselors at the Ministry of Education. I created a CRUD application, with non-tech-savvy users in mind, simple UX, no risk for inaccurate data and no bloat. There is a user area for keeping track of individual communication logs and an admin area, where the lead counselor has access to all of the user's communication logs. Not only does the admin have full access but there is an analytics dashboard for all users and a dashboard that breaks down the stats of each user. The counselors have continued to use the app throughout the 2020-2021 school year and an inquiry for adding additional departments has been made. I had scaling in mind which could easily be expanded for speech therapists, occupational therapists, educational psychologists and administration.
    <br />
<!--     <a href="https://github.com/giterdun345/guidance_counsellors"><strong>Explore the docs »</strong></a> -->
<!--     <br /> -->
    <br />
    <a href="https://comlogs-demo.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/giterdun345/guidance_counsellors/issues">Report Bug</a>
    ·
    <a href="https://github.com/giterdun345/guidance_counsellors/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Usage</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a CRUD application with JWT authorization and an analytics dashboard for easy referencing of stats. Think of it as a to do app on steroids. 
On the backend, express.js is used with PostgreSQL for acquiring the data and JWT for authorization. I particularly prefer PostgreSQL and JWT over others because it is what I started learning with and is used by a majority of developers. So researching a particular idea is quick and easy. I also kept in mind scaling for the app to be used with other departments within the Ministry of Education.
On the frontend, I stuck with React, which is my go to for any web development. I often use Sass but, to get a quicker deployment, I went with Bootstrap. This came in handy particularly when it came to the tables and pagination. I found a library called e-charts which has some great visualizations. It was hard to find resources, especially in English, but it is relatively straight foward and have a load of great examples in their gallery. React Toastify was another library to try, it is simple and easy to use to allow alert messages to pop up for logging in and out. In all of my projects, I try to use one library that I have not used before to get a better understanding of how to work with different libraries and if I like using it, I always have a resource to handy. 

### Built With

* React-Bootstrap
* E-Charts
* React Toastify
* Express.js
* BCrypt
* JSON Web Token
* PostgreSQL
* Heroku 

<!-- USAGE EXAMPLES -->
## Usage
#User
The user dashboard is straight forward and is designed to mininize bad data input. The visualizations on the admin page depend on accurate data and it is key to keep the analytics running smoothly. Below the input section, a table is shown with options for pagination, searching records and editing or deleting each observation. Clicking on the row will also bring up the notes associated to that observation, hidden to keep the table visually minimized. All elementary and middle school students do not have a student ID. Therefore, on request, the names of the students are also allowed as input as the student ID and hashed for security. Many automations were loaded into the input table to reduce the number of clicks needed to input a communication log. For example, the schools, date and year/group have default values based on the user's name. The search option allows you to look up past records by date or student ID. Pagination allows you to display as little as 5 observations to displaying all of the visualizations. A user can use the search option to divide all of their communications by week, month, and day.

## Admin
The admin dashboard begins with an initial dashboard displaying the statistics for all of the counselors combined. The amount "Engaged" is based on the amount of students that the counsellor's have interacted with based on the total public school population. The amount "Engaged" was requested for each counselor but I thought having a bigger picture would benefit the lead school counselor, especially when comparing the monthly engagement. The total number of logs and public school population was also provided in a quick metric. The production version also adds a metric to show the percentge of students engaged by gender. The visualization for school output is based on an observation falling under a defined criteria. Learning the output of the schools and individual counsellors was the driving force for the creation of this application. The administration wanted to know how much output was seen each month from each counselor. Schools in Cayman have a varying population in each school ranging from 15 total students to 2,000. It was important to provide a metric for student engagement to provide a relative metric based on school population. For a quick glance, a card is available showing those two metrics for each individual counselor, engagement (how many students relative to the population were contacted) as well as output (how many observations fell under the key criteria given). The card moves to the left and the right, by request to help the lead counsellor distinguish who has been counted. A link is given in the card as well as a list of counsellors in the sidenav bar to enter the page with the individual counsellor's statistics. The bar chart shows what the counselor has done during the current month and is broken down into each component. The sunburst chart allows the lead counsellor 
to review the whole year's stats. It was an efficent and informative visualization that provided, yearly and monthly values for every observation by school. It should be noted that many of the counsellors on island work at multiple schools. Lastly, the referral, continuation and discharge values were displayed upon request.
 
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, 
inspire, and create. Any contributions you make are **greatly appreciated**. Also you are welcome to use and adapt this as needed.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/updatedFeature`)
3. Commit your Changes (`git commit -m 'Add some updatedFeature'`)
4. Push to the Branch (`git push origin feature/updatedFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

John Ketterer - email: johnmketterer@gmail.com

Project Demo: [https://comlogs-demo.netlify.app](https://comlogs-demo.netlify.app)

Project Link: [https://github.com/giterdun345/guidance_counsellors](https://github.com/giterdun345/guidance_counsellors)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/giterdun345/guidance_counsellors.svg?style=for-the-badge
[issues-url]: https://github.com/giterdun345/guidance_counsellors/issues
[license-shield]: https://img.shields.io/github/license/giterdun345/guidance_counsellors.svg?style=for-the-badge
[license-url]: https://github.com/giterdun345/guidance_counsellors/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jm-ketterer



