export const projects = [
  {
    title: 'DBS Marketplace',
    description: "Built an Extract Transform Load back end architecture from scratch for the Digital Bank of Singapore's marketplace. We needed to fetch big volumes of data from third parties APIs and serialize them before storing them. The middleware would then get the formatted data and cache it preemptively.",
      image: '/images/dbsmarketplace.png',
      tags: ['AWS', 'DynamoDB', 'Node.js', 'Serverless', 'Redis'],
    source: 'https://www.dbs.com.sg/personal/marketplace/',
    id: 0,
  },
  {
    title: 'NTUC Income portal',
    description:"Worked as a full-stack developer on the insurance portal of NTUC Income. I was in charge of handling the customer data transiting through the Node.js middleware, maintaining and testing the code. I was also sometimes building or improving the application's react components.",
    image: '/images/ntucincome.png',
    tags: ['React', 'TypeScript', 'Node.js'],
    source: 'https://www.income.com.sg/life-insurance/luv',
    id: 1,
  },
  {
    title: 'Esens',
    description: "Worked on a 'lab' project in which we would build innovative projects for either business or learning purposes. I worked on an AI project in which I would train a neural network to recognize images from satellite maps fed via a web application.",
      image: '/images/esens.png',
      tags: ['Python', 'Keras', 'Node.js', 'React'],
    source: 'https://www.esensconsulting.com/le-lab',
    id: 2,
  },
  {
    title: 'Mediarithmics',
    description: "Worked on the enhancement of mediarithmics, a Data Marketing Platform as Node.js developer. Developed and maintained REST APIs to process the customer's marketing campaign. Every new customer would require a specific endpoint. This project was my introduction to Node.js with Express.",
      image: '/images/mediarithmics.png',
      tags: ['Node.js', 'Express.js'],
    source: 'https://www.mediarithmics.com/',
    id: 3,
  },
  {
    title: 'Wild Palms Digital',
    description: "I was the first developer hired by wild palms digital, previously hiring consultants to build their applications. I set up the internal continuous integration pipeline, fixed and maintained two web applications after three weeks handover from the previous developers.",
    image: '/images/wildpalms.png',
    tags: ['AWS', 'Javascript'],
    source: 'https://wildpalms.com.au/',
    id: 4,
  },
  {
    title: 'Jobteaser',
    description: "Worked on improving the application posting and fetching job offers using Ruby on Rails for Jobteaser, a career platform. I also worked on the automation of the development workflow using cron jobs and software's (JIRA, GitHub, Slack and Toggl) APIs and webhooks.",
    image: '/images/jobteaser.png',
    tags: ['Ruby', 'Ruby on Rails'],
    source: 'https://www.jobteaser.com/en',
    id: 5,
  },
];          

export const personal = [
  {
    title: 'Rust',
    description: "I am working on solo projects to learn Rust, building multi-threaded web servers or smart contracts interacting with the NEAR blockchain.",
      image: '/images/rust.png',
      tags: ['Wasm', 'Cargo'],
    id: 0,
  },
  {
    title: 'Solidity',
    description:"I am working on solo projects to learn Solidity, building a wallet, a decentralised exchange, issuing ERC20 tokens, interactions with the EVM.",
    image: '/images/solidity.png',
    tags: ['Metamask', 'EVM', 'Truffle', 'Hardhat'],
    id: 1,
  },
  {
    title: 'Community events',
    description: "I got involved in several communities and attended live events like the Lisbon blockchain week and online events such as the Near academy and MetaBuild hackaton, or Harmony One's ZK university who provided courses about zero-knowledge proofs.",
      image: '/images/community.png',
      tags: ['E-learning', 'Networking', 'ZK proof'],
    id: 2,
  },
  {
    title: 'Information',
    description: "I am always staying up to date with what is happening in this field, technically or not. Debates around web3, regulations, interviews, metaverse, NFTs... I am always on the lookout for any news regarding these topics.",
      image: '/images/information.png',
      tags: ['Cryptocurrencies', 'DeFi', 'Law'],
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Finished my first year of Master at Tongji University, Shanghai', },
  { year: 2017, text: 'Graduated from Epitech - European Institute of Technology, Paris', },
  { year: 2018, text: 'Full-time job at Palo-IT, Singapore', },
  { year: 2019, text: 'Tech lead at Wild Palms Digital, Sydney', },
  { year: 2020, text: 'First work experience in deep learning at Esens, Paris', },
  { year: 2021, text: 'Got into blockchain as a self-taught, in Paris and Lisbon', },
];