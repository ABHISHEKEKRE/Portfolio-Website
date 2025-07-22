export const myProjects = [
  {
    id: 1,
    title: "Betyg: A personalized movie rating and recommendation website",
    description:
      "Everybody's taste in movies are different — movies that are trash for certain someone, can actually be gold for others. So if everyone has a subjective taste, why should the movie ratings be objective? Thus our website https://www.betyg.in Eg:👤 User A rates 9 on mostly all Brad Pitt movies, so the new F1 movie starring Brad Pitt will get near 9 rating👤 User B hates Brad Pitt and rates all his movies 2, then the new F1 movie will have 2–3 ratingi.e. Same movie will have different rating for different people (based upon their taste)",
    subDescription: [
      
    ],
    href: "https://www.betyg.in/",
    logo: "",
    image: "/assets/projects/betyg.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 6,
        name: " Nginx",
        path: "/assets/logos/expressjs.svg",
      },
    ],
  },
  {
    id: 2,
    title: "ServeHive - Freelancing Platform for Freelancers and Companies",
    description:
      " Developed a full-stack web platform with chat features facilitating project-based collaboration between companies and freelancers/startups.",
    subDescription: [
      "Integrated JWT authentication and CSRF route protection.",
      " Developed a full-stack web platform facilitating project-based collaboration between companies and freelancers/startups. ",
      " Structured modular code with MVC architecture including configuration, routing, controllers, and EJS templates. ",
      " Deployed and tested all major flows for companies and freelancers, including bidding, posting, and rating.",
    ],
    href: "https://servehive.onrender.com/",
    logo: "",
    image: "/assets/projects/servehive.png",
    tags: [
      {
        id: 1,
        name: " HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
       {
        id: 4,
        name: " Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 5,
        name: " MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 6,
        name: " NodeJs",
        path: "/assets/logos/nodejs.svg",
      },
    
    ],
  },
  {
    id: 3,
    title: "Article Analyzer: NLP driven Processing Pipeline for Sentiment Analysis",
    description:
      "Developed a sentiment analysis pipeline that processes 100 articles from CSV links.",
    subDescription: [
      " Constructed a sentiment analysis pipeline that webscrapes 100 article links from the CSV files and analyzes linguistic features such as positivity score, polarity score etc.",
      " Implemented tokenization, stopword removal, and stemming/lemmatization to save these features in CSV file and the articles resulting in 100 text files for further processing.Extracted over 1,000+ feature records from 100 articles using this sentiment analysis pipeline. ",

    ],
    href: "https://github.com/ABHISHEKEKRE/Article-Analyzer",
    logo: "",
    image: "/assets/projects/lostfaces.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      
    ],
  },
  {
    id: 4,
    title: "Lost Faces: A Face Age Invariant Recognition Model",
    description:
      "Developed an age-invariant face recognition model using the HDA-SynChildFaces dataset. Adapted architecture from a research paper on cross-spectral face completion, combining ResNet with attention mechanisms to separate identity from age-related features.",
    subDescription: [
      " Created a multi task learning AI recognition model using the HDA-SynChildFaces dataset which consists of 31,464 images of Indian individuals (specific use case) across various age groups",
      "Adopted the architecture from the research paper Adversarial Cross-Spectral Face Completion for NIR-VIS Face Recognition.  ",
    ],
    href: "https://github.com/ABHISHEKEKRE/Lost-Faces-A-Face-Age-Invariant-Recognition-Model-",
    logo: "",
    image: "/assets/projects/lostfaces.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Tensorflow",
        path: "/assets/logos/tensorflow.svg",
      },
      
    ],
  },
  {
    id: 5,
    title: "Valorant Agent Detection Model (Instance Segmentation)",
    description:
      "Built an object detection model using YOLOv8 to accurately identify 8 Valorant agents. Curated and annotated 600 images with Roboflow, applying data preprocessing techniques like over- and under-sampling to optimize performance. Developed in Python.",
    subDescription: [
      " Curated and annotated a large dataset of 600 images using Roboflow, labeling 8 different agents: cypher, fade, jett, phoenix, raze, reyna, sage, and sova.  ",
      " Leveraged Roboflow for efficient data annotation, demonstrating expertise in data preprocessing techniques, including over-sampling,under-sampling.",
    ],
    href: "https://github.com/ABHISHEKEKRE/Valorant-Agent-Detection-Model",
    logo: "",
    image: "/assets/projects/valo.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Market Analysis: Tata Retail Time Series Analysis",
    description:
      "Performed comprehensive data analysis on a large-scale dataset of 500,000 row dataset of online customer orders for Tata Retail.",
    subDescription: [
      "Applied advanced data analysis techniques, including RFM analysis, customer segmentation, and churn prediction.  ",
    ],
    href: "https://github.com/ABHISHEKEKRE/Market-Analysis-Tata-Retail",
    logo: "",
    image: "/assets/projects/lostfaces.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    
    ],
  },
  {
    id: 7,
    title: "SHL Assesment Recommendation: Automatic assesment ",
    description:
      "Built an intelligent assessment recommendation API that scrapes and indexes SHL assessments. The system automatically suggests relevant tests based on job requirements using a RAG (Retrieval-Augmented Generation) pipeline",
    subDescription: [
      "Scraped and compiled SHL assessment links into a structured dataset for use by HR professionals. Integrated Gemini 1.5 Flash for metadata extraction and Pinecone for semantic retrieval of relevant assessments",
      "Used HuggingFace embeddings and LangChain's PineconeVectorStore to match user queries with the best assessments.",
    ],
    href: "https://github.com/ABHISHEKEKRE/SHL_Recommendation",
    logo: "",
    image: "/assets/projects/lostfaces.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
       {
        id: 2,
        name: "Hugging Face",
        path: "/assets/logos/huggingface.svg",
      },
        {
        id: 3,
        name: "Gemini",
        path: "/assets/logos/gemini.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "+91-7020910782",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/abhishek-ekre-8b5873267/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "S",
    date: "2021-2023",
    contents: [
      
    ],
  },

];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
