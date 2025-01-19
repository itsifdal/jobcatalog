'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jobs', [
      {
        "title": "Software Engineer",
        "description": "Developing and maintaining software applications",
        "company": "Tech Solutions Inc.",
        "location": "San Francisco",
        "type": "Hybrid",
        "userId": 1
      },
      {
        "title": "Financial Analyst",
        "description": "Analyzing financial data and providing investment recommendations",
        "company": "Global Finance Corp",
        "location": "New York",
        "type": "On-site",
        "userId": 2
      },
      {
        "title": "Marketing Manager",
        "description": "Developing and executing marketing strategies",
        "company": "Brand Boost Marketing",
        "location": "London",
        "type": "Remote",
        "userId": 3
      },
      {
        "title": "Data Scientist",
        "description": "Analyzing large datasets and developing machine learning models",
        "company": "Data Insights Analytics",
        "location": "Seattle",
        "type": "Hybrid",
        "userId": 1
      },
        {
        "title": "Registered Nurse",
        "description": "Providing patient care in a hospital setting",
        "company": "City General Hospital",
        "location": "Los Angeles",
        "type": "On-site",
        "userId": 2
      },
      {
        "title": "Project Manager",
        "description": "Managing projects and ensuring they are completed on time and within budget",
        "company": "Project Management Pros",
        "location": "Chicago",
        "type": "Hybrid",
        "userId": 3
      },
      {
        "title": "Web Developer",
        "description": "Designing and developing websites and web applications",
        "company": "Web Design Studios",
        "location": "Austin",
        "type": "Remote",
        "userId": 1
      },
      {
        "title": "Human Resources Manager",
        "description": "Managing employee relations and HR functions",
        "company": "HR Solutions Group",
        "location": "Atlanta",
        "type": "On-site",
        "userId": 2
      },
      {
        "title": "Cybersecurity Analyst",
        "description": "Protecting computer systems and networks from cyber threats",
        "company": "Cybersecurity Defense",
        "location": "Washington D.C.",
        "type": "Remote",
        "userId": 3
      },
      {
        "title": "Sales Representative",
        "description": "Selling products or services to clients",
        "company": "Sales Force Inc.",
        "location": "Dallas",
        "type": "On-site",
        "userId": 1
      },
      {
        "title": "Business Analyst",
        "description": "Analyzing business processes and identifying areas for improvement",
        "company": "Business Consulting Group",
        "location": "Boston",
        "type": "Hybrid",
        "userId": 2
      },
      {
        "title": "Accountant",
        "description": "Managing financial records and preparing financial statements",
        "company": "Accounting Professionals",
        "location": "Miami",
        "type": "On-site",
        "userId": 3
      },
      {
        "title": "Graphic Designer",
        "description": "Creating visual designs for various media",
        "company": "Creative Design Agency",
        "location": "Denver",
        "type": "Remote",
        "userId": 1
      },
      {
        "title": "Operations Manager",
        "description": "Overseeing daily operations and ensuring efficiency",
        "company": "Operations Management Solutions",
        "location": "Phoenix",
        "type": "On-site",
        "userId": 2
      },
      {
        "title": "Network Administrator",
        "description": "Managing and maintaining computer networks",
        "company": "Network Solutions Inc.",
        "location": "Minneapolis",
        "type": "Hybrid",
        "userId": 3
      },
      {
        "title": "Teacher",
        "description": "Educating students in a classroom setting",
        "company": "Public School System",
        "location": "St. Louis",
        "type": "On-site",
        "userId": 1
      },
      {
        "title": "Software Tester",
        "description": "Testing software applications to ensure quality",
        "company": "Quality Assurance Testing",
        "location": "San Diego",
        "type": "Remote",
        "userId": 2
      },
      {
        "title": "Customer Service Representative",
        "description": "Providing customer support and resolving issues",
        "company": "Customer Care Center",
        "location": "Tampa",
        "type": "On-site",
        "userId": 3
      },
      {
        "title": "IT Support Specialist",
        "description": "Providing technical support to end-users",
        "company": "Tech Support Now",
        "location": "Detroit",
        "type": "Hybrid",
        "userId": 1
      },
      {
        "title": "Recruiter",
        "description": "Finding and hiring qualified candidates for open positions",
        "company": "Talent Acquisition Group",
        "location": "Orlando",
        "type": "Remote",
        "userId": 2
      },
      {
        "title": "Medical Assistant",
        "description": "Assisting physicians with patient care",
        "company": "Medical Clinic",
        "location": "Houston",
        "type": "On-site",
        "userId": 3
      },
      {
        "title": "Data Analyst",
        "description": "Analyzing data to identify trends and insights",
        "company": "DataWise Analytics",
        "location": "Portland",
        "type": "Hybrid",
        "userId": 1
      },
      {
        "title": "Logistics Coordinator",
        "description": "Managing the flow of goods and materials",
        "company": "Logistics Solutions",
        "location": "Charlotte",
        "type": "On-site",
        "userId": 2
      },
      {
        "title": "Content Writer",
        "description": "Creating written content for websites and marketing materials",
        "company": "Content Creation Agency",
        "location": "Nashville",
        "type": "Remote",
        "userId": 3
      },
      {
        "title": "Financial Advisor",
        "description": "Providing financial advice and planning to clients",
        "company": "Financial Planning Group",
        "location": "New Orleans",
        "type": "On-site",
        "userId": 1
      },
      {
        "title": "Administrative Assistant",
        "description": "Providing administrative support to executives and staff",
        "company": "Administrative Support Services",
        "location": "Salt Lake City",
        "type": "Hybrid",
        "userId": 2
      },
      {
        "title": "Electrician",
        "description": "Installing and maintaining electrical systems",
        "company": "Sparky's Electrical Services",
        "location": "Indianapolis",
        "type": "On-site",
        "userId": 3
      },
      {
        "title": "Mechanic",
        "description": "Repairing and maintaining vehicles",
        "company": "Auto Repair Experts",
        "location": "Milwaukee",
        "type": "On-site",
        "userId": 1
      },
      {
        "title": "Pharmacist",
        "description": "Dispensing medications and providing pharmaceutical advice",
        "company": "Community Pharmacy",
        "location": "Oklahoma City",
        "type": "On-site",
        "userId": 2
      },                    
      {
        "title": "Lawyer",
        "description": "Providing legal advice and representation to clients",
        "company": "Justice Law Firm",
        "location": "Hartford",
        "type": "On-site",
        "userId": 3
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('jobs', null, {});

  }
};
