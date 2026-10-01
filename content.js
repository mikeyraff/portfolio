/* Michael Raffanti — portfolio content, prepared October 1, 2026.
   Compatible with the existing index.html and script.js; no layout changes required.
   Sources: supplied résumé, assignment plans, SMART goals, public LinkedIn
   details, previous portfolio, and GitHub repository descriptions.

   Editorial notes (not displayed on the site):
   - Completed rotation status describes the placement, not completion of every goal.
   - Rotation bullets describe scope/focus until actual deliverables are confirmed.
   - Athletics dashboard count is omitted: SMART goals conflict between 3 and 5.
     Usage, performance, certification and learning-hour targets are not claimed.
   - DAPIR's formal title and truncated end year are unconfirmed; the title below
     describes the focus and dates use August 2026–Present.
   - No unconfirmed Snowflake/AWS architecture is presented as implemented.
   - Navitus end date corrected to July 2025 per Michael.
   - Education uses the résumé's BA with two majors, not two separate degrees.
   - Job-posting project dates/tools differ between résumé and LinkedIn. Dates
     are omitted; its exact repository is still unknown.
   - LinkedIn credentials came from a publicly indexed profile and should be
     checked for currency. They are presented as course/learning credentials.
   - Development includes learning across the career, not only during rotations.
     The existing template displays these under Professional Development on JRP.
   - GitHub course links point to collections, not verified individual notebooks.
   - Résumé download stays hidden until an updated public résumé is supplied.
   - Home address, phone, and unrelated personal information are omitted.
   - The About-program placeholder in index.html requires a separate edit.
*/
window.portfolio = {
  "name": "Michael Raffanti",
  "github": "https://github.com/mikeyraff",
  "linkedin": "https://www.linkedin.com/in/michael-raffanti-099a69231/",
  "email": "mraffanti11@gmail.com",
  "resume": "",
  "rotationIntro": "Exploring how technology and data support a university through four six-month rotations at UW–Madison. My interests span data analytics, data engineering, business analysis, and practical solutions to everyday problems.",
  "experienceIntro": "My background combines business intelligence, application development, and an academic foundation in Data Science and Economics. I enjoy turning complex data and business requirements into clear, useful solutions.",
  "rotations": [
    {
      "title": "Solutions Engineer",
      "team": "School of Medicine and Public Health — Enterprise Applications & Solutions",
      "dates": "August 2025 – January 2026",
      "status": "Complete",
      "summary": "A rotation focused on enterprise applications, low-code development, and process improvement within SMPH Informatics and Information Technology.",
      "highlights": [
        "Project focus: low-code application builds using platforms such as Betty Blocks, Smartsheet, Kuali, and Fluxx, alongside a secure SharePoint communication space.",
        "Application catalog initiative: organizing EAS application information to support knowledge sharing and team decision-making.",
        "Process improvement focus: refining intake and documentation using Jira and Confluence, from initial business needs through solution delivery.",
        "Development goals included enterprise application support, cross-functional collaboration, and learning how IIT supports administrative, research, and clinical needs."
      ],
      "skills": [
        "Low-code Development",
        "SharePoint",
        "Jira",
        "Confluence",
        "Requirements Gathering",
        "Process Improvement"
      ]
    },
    {
      "title": "IT Support Professional",
      "team": "Wisconsin Athletics — Technical Services and Data Management & System Solutions",
      "dates": "February 2026 – August 2026",
      "status": "Complete",
      "summary": "A rotation combining end-user technology support with SQL, Tableau, documentation, and web project planning across Athletics.",
      "highlights": [
        "Analytics project focus: sourcing, cleaning, and modeling data with SQL to develop Tableau dashboards for Athletics stakeholders, with peer review and stakeholder feedback.",
        "Device support focus: setup, configuration, troubleshooting, and lifecycle management within an Athletics technology environment supporting approximately 2,000 devices and over 400 staff.",
        "Documentation goals included a device lifecycle map, a support page, and knowledge-base articles for onboarding, troubleshooting, and event-day procedures.",
        "Web project scope included defining user needs, organizing a backlog, iterating on designs, and coordinating user acceptance testing with project management guidance.",
        "Career development goals included structured analytics learning and exposure to data, infrastructure, telecommunications, and event technology roles."
      ],
      "skills": [
        "SQL",
        "Tableau",
        "IT Support",
        "Technical Documentation",
        "Web Development",
        "User Acceptance Testing"
      ]
    },
    {
      "title": "Data Engineering & Business Analysis Rotation",
      "team": "Data, Academic Planning and Institutional Research — Enterprise Data Management",
      "dates": "August 2026 – Present",
      "status": "In progress",
      "summary": "Focused on the 12Twenty pilot integration and connecting career-related data to the Badger Data Platform through requirements gathering, data integration, and governance.",
      "highlights": [
        "Project scope: identify stakeholder use cases and translate reporting needs into documented technical requirements for 12Twenty data.",
        "Denodo development goals include source connections, modeled data views, and a reporting view or proof of concept, with consideration of caching and extraction needs.",
        "Integration analysis includes examining the 12Twenty API, documenting endpoints and data flows, and mapping business requirements to source data.",
        "Governance and documentation focus: view and column metadata, data classifications, data quality checks, and collaboration with data stewards.",
        "Stakeholder engagement goals include facilitating requirements discussions and communicating project updates with DAPIR, Career Services, and DoIT."
      ],
      "skills": [
        "SQL",
        "Denodo",
        "Data Integration",
        "API Analysis",
        "Data Governance",
        "Metadata",
        "Business Analysis"
      ]
    },
    {
      "title": "Fourth Rotation — To Be Determined",
      "team": "UW–Madison Job Rotation Program",
      "dates": "Starting February 2027",
      "status": "Upcoming",
      "summary": "My final rotation will build on the technical, analytical, and collaborative experience gained across my first three placements. Department and project details will be added once confirmed.",
      "highlights": [],
      "skills": []
    }
  ],
  "development": [
    {
      "type": "Course credential · March 2025",
      "title": "Data Analytics in Sports Law and Team Management",
      "description": "University at Buffalo and The State University of New York, through Coursera. Listed among my LinkedIn learning credentials."
    },
    {
      "type": "Course credential · March 2025",
      "title": "Introduction to Networking",
      "description": "NVIDIA. Foundational networking learning listed on my LinkedIn profile."
    },
    {
      "type": "Learning certificate · September 2024",
      "title": "Career Essentials in Data Analysis",
      "description": "Microsoft and LinkedIn. Professional learning focused on data analysis."
    },
    {
      "type": "Course certificate · January 2024",
      "title": "Power BI: Dashboards for Beginners",
      "description": "LinkedIn Learning. Introductory learning in Power BI dashboard development."
    },
    {
      "type": "Course certificate · December 2023",
      "title": "SQL Essential Training",
      "description": "LinkedIn Learning. Training in SQL and working with relational data."
    },
    {
      "type": "Course credential",
      "title": "Excel Essential Training (Microsoft 365)",
      "description": "Listed on my LinkedIn profile. Issuer and completion date to be confirmed."
    },
    {
      "type": "Bootcamp · Fall 2023",
      "title": "Foundations of Sports Analytics: Data, Representation, and Models in Sports",
      "description": "University of Michigan. An eight-week sports analytics learning experience that connected my interests in sports and data."
    },
    {
      "type": "Rotation learning goals",
      "title": "Denodo, Data Governance & Stakeholder Communication",
      "description": "Current DAPIR learning priorities include Denodo training, integration documentation, data governance practices, and facilitating requirements conversations."
    }
  ],
  "experience": [
    {
      "title": "BI Specialist in Analytics",
      "organization": "Navitus Health Solutions · Madison, WI",
      "dates": "December 2024 – July 2025",
      "description": "Supported business intelligence modernization, reporting, and data quality through Qlik applications and SQL-based analysis.",
      "highlights": [
        "Used QlikView and Qlik Sense to migrate and modernize analytics applications and develop interactive dashboards tailored to business users.",
        "Performed ad hoc data pulls and developed reporting solutions using SQL Server Management Studio and Oracle SQL Developer.",
        "Created user-friendly visualizations and conducted data validation to support accurate, reliable reporting.",
        "Collaborated with cross-functional teams to gather requirements, present solutions, and conduct user testing."
      ],
      "skills": [
        "QlikView",
        "Qlik Sense",
        "SQL",
        "SQL Server Management Studio",
        "Oracle SQL Developer",
        "Data Quality",
        "Business Intelligence"
      ]
    },
    {
      "title": "Software Engineering Fellow",
      "organization": "Headstarter AI",
      "dates": "May 2024 – August 2024",
      "description": "Collaborated on websites and applications while developing software engineering, analytics, and machine learning skills.",
      "highlights": [
        "Built collaborative projects using HTML, CSS, JavaScript, and Python.",
        "Co-led a data-focused project with a goal of growing a product waitlist through metrics-informed decisions.",
        "Worked on projects supporting technical interview preparation and further development of skills for data-focused roles."
      ],
      "skills": [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "Machine Learning",
        "Collaboration"
      ]
    },
    {
      "title": "IT Business Solutions Analyst Intern",
      "organization": "Exact Sciences · Madison, WI",
      "dates": "May 2023 – December 2023",
      "description": "Supported the IT Business Solutions team through data preparation, software assessment, and stakeholder reporting.",
      "highlights": [
        "Managed and prepared Excel data for SAP query implementation.",
        "Assisted with software assessments to identify financial planning tools for the FP&A team.",
        "Developed interactive Tableau dashboards and communicated insights to technical and non-technical stakeholders.",
        "Designed SQL queries to analyze datasets and support process improvement and business decisions."
      ],
      "skills": [
        "SQL",
        "Tableau",
        "Excel",
        "SAP",
        "Business Analysis",
        "Stakeholder Communication"
      ]
    },
    {
      "title": "Manager of Kitchen and Service",
      "organization": "Chipotle Mexican Grill · Madison, WI",
      "dates": "September 2021 – May 2023",
      "description": "Managed opening and closing operations and supported team performance at a high-traffic restaurant near campus.",
      "highlights": [
        "Supervised and trained a team of eight, balancing customer service, operational needs, and day-to-day problem solving.",
        "Completed coursework to become a Certified Trainer across store operations and roles."
      ],
      "skills": [
        "Team Leadership",
        "Training",
        "Operations",
        "Customer Service"
      ]
    }
  ],
  "education": {
    "school": "University of Wisconsin–Madison",
    "degree": "Bachelor of Arts — Data Science and Economics with a Math Emphasis",
    "dates": "Graduated May 2024",
    "description": "GPA: 3.4/4.0; Dean’s List for five semesters. Coursework included machine learning, Python data programming, statistical analysis in R, econometrics, linear algebra, big data, and geocomputing. Campus involvement included College of Letters & Science peer advising and the Economics Department Mentorship Program. I am interested in pursuing graduate study in the future."
  },
  "projects": [
    {
      "type": "Academic project",
      "title": "Predicting S&P 500 Stock Prices",
      "description": "A group machine learning project exploring stock-price prediction from prior closing prices. Work included preparing data, comparing predictive models, and analyzing results in Python. The linked repository contains my machine learning coursework.",
      "skills": [
        "Python",
        "scikit-learn",
        "Machine Learning"
      ],
      "url": "https://github.com/mikeyraff/Machine-Learning"
    },
    {
      "type": "Academic project",
      "title": "Job Posting Data Analysis",
      "description": "Explored a real-world job-posting dataset to identify trends using SQL queries and statistical analysis and visualization. My résumé describes R-based analysis; the exact project repository will be linked once identified.",
      "skills": [
        "SQL",
        "R",
        "Data Visualization"
      ],
      "url": ""
    },
    {
      "type": "Coursework collection",
      "title": "Advanced Python Data Programming",
      "description": "Projects from my advanced data programming coursework, extending my experience with Python and data analysis.",
      "skills": [
        "Python",
        "Data Programming"
      ],
      "url": "https://github.com/mikeyraff/Data-Programming-2"
    },
    {
      "type": "Coursework collection",
      "title": "Python Programming Foundations",
      "description": "Introductory Python programming and analysis coursework that helped establish my foundation in working with data.",
      "skills": [
        "Python",
        "Data Analysis"
      ],
      "url": "https://github.com/mikeyraff/Data-Programming-1"
    },
    {
      "type": "Coursework collection",
      "title": "Big Data Analysis",
      "description": "Upper-level computer science coursework focused on big data analysis. The course introduced tools and approaches including Linux, Docker, and PyTorch.",
      "skills": [
        "Big Data",
        "Linux",
        "Docker",
        "PyTorch"
      ],
      "url": "https://github.com/mikeyraff/Big-Data"
    },
    {
      "type": "Coursework collection",
      "title": "Data Analysis in Econometrics",
      "description": "Econometrics coursework applying data analysis in R to economic and statistical questions.",
      "skills": [
        "R",
        "Econometrics",
        "Statistical Modeling"
      ],
      "url": "https://github.com/mikeyraff/Data-Analysis-in-Econometrics"
    },
    {
      "type": "Coursework collection",
      "title": "Geocomputing",
      "description": "Lab projects combining Python programming with geographical information and spatial analysis.",
      "skills": [
        "Python",
        "Geospatial Data"
      ],
      "url": "https://github.com/mikeyraff/Geocomputing"
    },
    {
      "type": "Coursework collection",
      "title": "Advanced Statistical Analysis",
      "description": "Upper-level statistical analysis coursework in R using advanced packages and visualizations.",
      "skills": [
        "R",
        "Statistics",
        "Data Visualization"
      ],
      "url": "https://github.com/mikeyraff/Statistical-Analysis-2"
    },
    {
      "type": "Coursework collection",
      "title": "Statistical Analysis Foundations",
      "description": "Introductory coursework using R statistical analysis packages and dataset manipulation.",
      "skills": [
        "R",
        "Statistics",
        "Data Preparation"
      ],
      "url": "https://github.com/mikeyraff/Statistical-Analysis-1"
    },
    {
      "type": "Personal website",
      "title": "Original Portfolio",
      "description": "My earlier portfolio, built with HTML, CSS, and JavaScript using an HTML5 UP template. It documents my academic background, coursework, and early career interests; some plans and dates reflect an earlier stage of my career.",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "url": "https://mraffanti.com"
    }
  ]
};
