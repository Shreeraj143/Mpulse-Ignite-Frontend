const data = [
  {
    id: 1,
    title: "I2E Hackathon",
    image: "/events/I2E-Hackathon-Resized.png",
    data: [
      {
        intro: [
          "I2E Hackathon: Innovator to Entrepreneur",
          "Innovator to Entrepreneur: Hackathon, a two-day event offers participants a unique opportunity to showcase their problem-solving prowess and innovative thinking. With the freedom to choose their domain, attendees will tackle real-world challenges, developing comprehensive solutions and crafting viable business models. Through hands-on experience and collaborative teamwork, participants will sharpen their technical skills, critical thinking abilities, and presentation expertise.",
          "Date- 23 & 24 Feb 2024.",
          "Entry Fees- 50/- per TEAM",
          // "<-----------------------------Scroll below for Problem Statements----------------------------->",

          // "Judging criteria-",
          // "● Idea/Solution",
          // "● Product",
          // "● Business potential",
          // "● Presentation",

          "● Problem Statements:",
          "Level 1: ",
          "1] Develop an advanced app-based solution aimed at providing market access to micro and small enterprises through a comprehensive platform. The solution will feature detailed business profiles with analytics, customizable product listings with multimedia support, advanced order management systems with inventory tracking, interactive promotional features including targeted marketing campaigns, and integrated customer feedback mechanisms. Implement robust search algorithms and smart filtering options to enhance user experience and facilitate seamless interaction between buyers and sellers.",

          "2] Develop a solution to empower farmers in efficiently managing government-aided schemes and accessing crucial crop information, including weather forecasts, market prices, and more. The solution will incorporate features like weed detection, area-specific weather forecasts, and facilitate farmer-buyer connections to enhance market accessibility. Optionally, integrate disease detection using machine learning for comprehensive crop health monitoring.",

          "3] Develop an advanced web/app-based healthcare solution to empower patients in direct communication with pharmacists, seamless ordering of medicines, and effortless management of prescriptions. The solution will feature a user-friendly interface for real-time chat with pharmacists, secure prescription uploads, medication delivery tracking, medication reminders, dosage instructions, and secure payment options, offering patients a comprehensive platform for streamlined medication management.",

          "4] Develop a comprehensive web platform to empower event organizers in streamlining collaboration and management tasks for seamless event execution. The platform will offer features including shared calendars, task assignment, budget management, attendee RSVP tracking, vendor management, collaborative document sharing, communication tools, and analytics/reporting. This user-friendly platform will enable event organizers to efficiently plan, coordinate, and evaluate events, enhancing productivity and success rates.",

          "5] Student Innovation : Develop an innovative solution in the field of travel and tourism to reimagine the way travelers explore destinations, book accommodations, and engage in activities while prioritizing safety, supporting local communities, and promoting environmental sustainability.",

          "Level: 2",
          "1] Computer Vision-Based Retail Optimization : Develop a computer vision solution aimed at streamlining retail operations. Create a system capable of automatically tracking inventory, monitoring shelf organization, and analyzing customer behavior. This solution should enable better product placement strategies, ultimately enhancing store efficiency and customer experience.",

          "2] ML-Powered Mental Health Companion : Craft a web application leveraging ML algorithms to offer personalized mental health assistance and resources. Incorporate mood tracking, sentiment analysis, and predictive modeling to provide tailored recommendations for coping mechanisms, therapy options, and self-care activities. Utilize readily available models from Hugging Face for mood and sentiment tracking to enhance user experience and accessibility.",

          "3] Communication Skills Enhancement Tool : Create a versatile web or mobile application designed to bolster the communication skills of students and professionals. Utilize state-of-the-art models from Hugging Face for grammar checking, summarization, and paraphrasing. The platform should offer users the ability to refine their written communication by providing instant feedback on grammar errors, condensing lengthy texts into concise summaries, and offering alternative phrasing suggestions to enhance clarity and coherence.",

          "4] Develop an innovative attendance system using facial recognition technology to streamline and automate the attendance tracking process in educational institutions or workplaces. The system should accurately identify individuals based on facial features captured through a camera and maintain a secure, reliable record of attendance. It should also have User Enrollment and Management, Attendance Reporting and Analytics",

          "5] Developing an accessible and user-friendly sign language to text and text to speech system to facilitate communication for individuals who are deaf or hard of hearing, as well as those who are blind or visually impaired. The system should accurately translate sign language gestures into written text and convert written text into spoken language, enabling seamless interaction and information exchange between users.",
        ],
        rules: [
          "Team size should be restricted to 1-4 team members only.",
          "All code must be original and developed during the hackathon.",
          "Each team will be given a specific time slot for a presentation (e.g., 5 minutes). Presentations should cover the problem statement, solution, business model, and potential impact.",
          "Teams are required to maintain a public repository on platforms like GitHub to store the code of the first day and is not allowed to access it outside the event venue until 2nd day.",
          "Violation of any rules or code of conduct may lead to immediate disqualification.",
          "Final decision will rest with the organisers.",
          "College devices will be provided and personal devices are allowed as well.",
        ],
        rounds: [
          {
            roundNo: 1,
            roundName: "Day 1",
            roundDesc: [
              "The hackathon kicks off with an opening ceremony, where participants are introduced to the event theme, goals, and challenge statements.Teams are formed or pre- established, and they quickly dive into brainstorming sessions to generate ideas and outline their project concepts.",
              ,
            ],
          },
          {
            roundNo: 2,
            roundName: "Day 2",
            roundDesc: [
              "The second day of the hackathon is marked by intensified focus and determination as teams enter the final stretch of development. The hackathon concludes with a grand finale, where each team presents their projects to a panel of judges. Teams have a limited time to pitch their solutions, highlighting key features, technical achievements, business potential, and impact. Judges evaluate projects based on criteria such as creativity, technical complexity, usability, scalability, business potential, and presentation.",
              "We hope this brief provides a clear understanding of the rules, expectations, and goals of the hackathon. We wish all the participants good luck and look forward to seeing the innovative solutions they will create!",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Mock Placement",
    image: "/events/Mock-Placement-Resized.png",
    data: [
      {
        intro: [
          "Mock Placement: Where Opportunity Meets Preparation!",
          "The mock placement is a simulated exercise designed to prepare participants for real-world job placement interviews in a corporate or professional setting. This event replicates the structure and atmosphere of actual job interviews, providing participants with invaluable experience, feedback, and confidence to excel in their future career endeavours.",
          "Date-24th Feb, 2024",
          "Entry fees - 30/-",
        ],
        rules: [
          "No internet access for any rounds.",
          "No electronic devices are allowed during the test.",
          "Carry a copy of your resume.",
          "Violation of any rules or code of conduct may lead to immediate disqualification.",
          "Final decision will rest with the organisers.",
        ],
        rounds: [
          {
            roundNo: 1,
            roundName: "Aptitude test",
            roundDesc: [
              "The first round is an aptitude test. There is a MCQ test which is to be solved in a given specific time. Participants with the maximum score will be selected for the next round",
            ],
          },
          {
            roundNo: 2,
            roundName: "Group discussion",
            roundDesc: [
              "One topic will be given to group of 3-5 candidates.",
              "The participants will be given 3 minutes to prepare.",
              "According to performance top 2 candidates from each group will be selected for the next round.",
            ],
          },
          {
            roundNo: 3,
            roundName: "Interview",
            roundDesc: [
              "This will be the final round. Participants will have a formal conversation with the judges. Technical and non technical questions will be asked to the participants.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Binary Breakout",
    image: "/events/Binary-Breakout-Resized.png",
    data: [
      {
        intro: [
          "Binary Breakout: Crack the code to freedom!",
          "Escape Room 2.0",
          `Participants are presented with a series of binary-encoded challenges, ranging from deciphering encrypted messages to navigating through complex logic gates. To succeed, participants must employ their knowledge of binary code, Boolean algebra, and algorithmic thinking to unlock clues, solve puzzles, and ultimately "break out" of each stage.`,

          "Date- 23rd & 24th Feb, 2024",
          "Entry Fees- 30/-",
        ],
        rules: [
          "Team size should be restricted to 3-4 team members only.",
          "Round 1 will be conducted on Day 1 (23rd Feb), Final Round on Day 2 (24th Feb).",
          "Team that takes the least amount of time to complete the tasks will be declared as the winner.",
          "Violation of any rules or code of conduct may lead to immediate disqualification.",
          "Final decision will rest with the organisers.",
        ],
        rounds: [
          {
            roundNo: 1,
            roundName: "Day 1",
            roundDesc: [
              "The event kicks off with Round 1, where teams are introduced to the first set of challenges awaiting them in themed rooms. As teams enter the room, they are presented with a series of puzzles, clues, and challenges that they must solve within the allocated time of 10 minutes. ",
            ],
          },
          {
            roundNo: 2,
            roundName: "Day 2: Final Round",
            roundDesc: [
              "The excitement continues on Day 2 with the Final Round, where top-performing teams from Round 1 advance to face even more formidable challenges in themed room that ramp up the complexity and intensity.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Algo Mania",
    image: "/events/AlgoMania-Resized.png",
    data: [
      {
        intro: [
          "AlgoMania: Algorithm Adventure Awaits",
          "Algomania is an electrifying competition designed to ignite the passion for algorithms and problem-solving among participants. This event serves as a platform for individuals to showcase their prowess in algorithmic thinking, data structures, and computational efficiency but in a fun way. In Algomania, participants are presented with a series of algorithmic challenges of varying difficulty levels.",

          "Date- 23rd Feb, 2024",
          "Entry Fees - 30/-",
        ],
        rules: [
          "Team size should be restricted to 1-2 team members only.",
          "Violation of any rules or code of conduct may lead to immediate disqualification.",
          "Final decision will rest with the organizers.",
        ],
        rounds: [
          {
            roundNo: 1,
            roundName: "Coders Clash",
            roundDesc: [
              "Participants have to solve interesting & intellectual puzzles based on their knowledge of basic coding concepts.",
            ],
          },
          {
            roundNo: 2,
            roundName: "Tech Tussle",
            roundDesc: [
              "Participants solve a series of coding challenges within a specified time frame. The avg of both players will be considered as the final score.",
            ],
          },
        ],
        problemStatement: [
          {
            levelNo: 1,
            levelDesc: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "DesignX 2.0",
    image: "/events/DesignX-2.0-Resized.png",
    data: [
      {
        intro: [
          "DesignX: Where Ideas Become Interfaces",
          "DesignX is a unique opportunity for participants to showcase their creative prowess in UI design. Participants will be engaging in a hands-on experience where you'll craft visually appealing interfaces using tools like Canva, Figma, or Photoshop. There will be an opportunity to elevate the design skills, tackle real-world problem statements, and gain valuable insights into the dynamics of user-centric design.",
          "Date- 24th February,2024",

          "Entry fees- 30/- per team",
        ],
        rules: [
          "Team size should be restricted to 1-2 team members on",
          "College devices will be provided and personal devices are allowed as well.",
          "Use of platforms like Figma, Canva and Photoshop is allowed.",
          "Participants must adhere to the specified theme and address the provided problem statement in their UI design.",
          "Designs must be original and created solely by the participant.",
          "Designs will be evaluated based on creativity, usability, adherence to the theme, and overall visual appeal.",
          "Violation of any rules or code of conduct may lead to immediate disqualification.",
          "Final decision will rest with the organizers.",
        ],
        rounds: [
          {
            roundNo: 1,
            roundName: "Design X",
            roundDesc: [
              "The event begins with an energizing kickoff, where participants are briefed on the problem statement they will be addressing. Once the problem statement is revealed, participants have two hours to ideate, design, and prototype their UI solutions. As the deadline approaches, participants put the finishing touches on their designs, ensuring every element is polished and cohesive. With just minutes to spare, teams prepare to present their UI prototypes to a panel of judges and fellow participants. Judges evaluate projects based on criteria such as visual appeal, user experience, functionality, and alignment with the problem statement.",
            ],
          },
        ],
      },
    ],
  },
];

export default data;
