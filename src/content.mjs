// Personal facts and links are retained from the original portfolio (f85785b).
export const person = {
  name: "Himanshu Raturi",
  role: "AI & Full Stack Developer | LLM Engineer",
  email: "raturihimanshu077@gmail.com",
  github: "https://github.com/Himanshu0508Raturi",
  linkedin: "https://www.linkedin.com/in/himanshu-raturi/",
  x: "https://x.com/HimanshuR13959",
  phone: "+91 7906819386",
  location: "Dehradun, Uttarakhand",
  // Add the actual PDF under public/ and set e.g. '/resume.pdf' when available.
  resume: null,
};

export const projects = [
  {
    id: "rag",
    number: "01",
    category: "Language & retrieval",
    title: "Knowledge, connected.",
    name: "Agentic RAG Knowledge Assistant",
    image: "rag",
    repo: "RAG-Learning",
    short:
      "Turning scattered documentation into grounded, context-aware answers.",
    description:
      "Built an agentic Retrieval-Augmented Generation (RAG) system that intelligently retrieves and reasons over custom project data including READMEs and technical documentation. Implemented LLM-powered workflows to deliver grounded, context-aware responses while reducing hallucinations. Designed with FastAPI and vector search to simulate a production-ready AI knowledge assistant.",
    tags: ["Agentic RAG", "FastAPI", "Vector DB", "Python", "LLMs"],
    features: [
      "Retrieval over READMEs and technical documentation",
      "LLM-powered reasoning workflows",
      "Grounded, context-aware question answering",
    ],
    flow: [
      "Documentation",
      "Vector search",
      "LLM reasoning",
      "Grounded response",
    ],
  },
  {
    id: "llm",
    number: "02",
    category: "Language & retrieval",
    title: "Less compute. More context.",
    name: "Fine-Tuned LLaMA 3.2",
    image: "llm",
    repo: "Fine_Tuning-LLM",
    short:
      "Adapting a language model for domain-specific intelligence with parameter-efficient fine-tuning.",
    description:
      "Fine-tuned the LLaMA 3.2 large language model on custom datasets to improve domain-specific reasoning and response accuracy. Implemented an optimized training pipeline with parameter-efficient techniques, reducing compute requirements while enhancing model performance. Designed for real-world deployment with a focus on reliability, contextual understanding, and scalable inference.",
    tags: ["LLaMA 3.2", "QLoRA", "PEFT", "PyTorch", "Hugging Face", "Python"],
    features: [
      "Domain-specific custom datasets",
      "Parameter-efficient model adaptation",
      "Optimized training pipeline",
    ],
    flow: ["Custom datasets", "QLoRA / PEFT", "LLaMA 3.2", "Domain responses"],
  },
  {
    id: "deepfake",
    number: "03",
    category: "Computer vision",
    title: "Question what you see.",
    name: "Deepfake Image Detection",
    image: "dl",
    repo: "DeepFake_Image_Detection",
    short:
      "Applying deep learning to the problem of manipulated images and digital authenticity.",
    description:
      "Developed an AI-powered deepfake detection system capable of identifying manipulated images using deep learning techniques. Built a high-performance FastAPI backend to handle real-time inference, enabling secure and scalable image verification. Designed to support AI safety initiatives by improving digital content authenticity and reducing misinformation risks.",
    tags: [
      "ResNet-50",
      "Computer Vision",
      "FastAPI",
      "Deep Learning",
      "Python",
    ],
    features: [
      "Deep learning-based image verification",
      "Real-time inference through FastAPI",
      "A focus on digital content authenticity",
    ],
    flow: ["Image input", "ResNet-50", "FastAPI inference", "Classification"],
  },
  {
    id: "campus",
    number: "04",
    category: "Language & retrieval",
    title: "A campus that answers.",
    name: "Campus AI",
    image: "campusAI",
    repo: "CampusAI",
    status: "In progress",
    short:
      "An agentic university assistant connecting students with institutional knowledge.",
    description:
      "Building an agentic Retrieval-Augmented Generation (RAG) system designed to function as an intelligent university assistant. The system retrieves and reasons over institutional data including websites, academic resources, and policy documents to deliver accurate, context-aware responses. Architected with scalable AI pipelines to support multi-step reasoning, reduce hallucinations, and enhance student support through reliable knowledge retrieval.",
    tags: [
      "Agentic RAG",
      "LLM API Integration",
      "Vector Search",
      "FastAPI",
      "Python",
    ],
    features: [
      "Institutional websites and policy documents",
      "Multi-step reasoning pipelines",
      "Context-aware student support",
    ],
    flow: [
      "Campus resources",
      "Vector search",
      "Agentic reasoning",
      "Student answers",
    ],
  },
  {
    id: "plants",
    number: "05",
    category: "Computer vision",
    title: "Learning from every leaf.",
    name: "Plant Disease Detection",
    image: "pd",
    repo: "plant_disease_project",
    short:
      "Computer vision for early plant disease detection and crop health monitoring.",
    description:
      "Developed a deep learning-based computer vision system capable of performing multiclass classification to identify plant diseases from leaf images. Designed and trained a Convolutional Neural Network (CNN) to extract complex visual patterns, enabling accurate and scalable disease prediction. Built with a focus on real-world agricultural support, demonstrating applied AI for early detection and crop health monitoring.",
    tags: [
      "CNN",
      "Computer Vision",
      "TensorFlow / PyTorch",
      "Deep Learning",
      "Python",
    ],
    features: [
      "Multiclass leaf image classification",
      "Convolutional visual feature extraction",
      "Applied AI for agricultural support",
    ],
    flow: ["Leaf images", "CNN", "Visual features", "Disease classification"],
  },
];

export const expertise = [
  {
    number: "01",
    name: "Language & intelligence",
    description:
      "From a model’s foundations to the context that makes its answers useful.",
    skills: [
      "Large Language Models",
      "Generative AI",
      "LLaMA 3.2",
      "QLoRA & PEFT",
      "Hugging Face Transformers",
    ],
  },
  {
    number: "02",
    name: "Retrieval & agents",
    description:
      "Connecting information retrieval with reasoning over real documents.",
    skills: [
      "Retrieval-Augmented Generation",
      "Agentic workflows",
      "Semantic search",
      "Vector databases",
      "Context-aware question answering",
    ],
  },
  {
    number: "03",
    name: "Vision & learning",
    description:
      "Understanding visual patterns with strong machine learning foundations.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "CNNs & ResNet-50",
      "Transfer learning",
      "Machine Learning & Deep Learning",
    ],
  },
  {
    number: "04",
    name: "Systems & delivery",
    description:
      "Bringing intelligent applications together with APIs, data, and deployment.",
    skills: [
      "Python",
      "FastAPI",
      "AI API integration",
      "AWS",
      "MLOps",
      "MongoDB",
      "Postman",
    ],
  },
];

export const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2025",
    description:
      "Cloud fundamentals, deployment, security, and scalable architectures.",
    url: "https://www.credly.com/badges/c2ab8723-2dcf-4f9b-8e1a-49c2a745e574/public_url",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman Education",
    date: "Apr 2025",
    description:
      "REST APIs, HTTP methods, status codes, and API testing workflows.",
    url: "https://badges.parchment.com/public/assertions/X4V8ocnUSU2XesyrARaeGw?identity__email=raturihimanshu077@gmail.com",
  },
  {
    title: "MongoDB Developer Toolkit",
    issuer: "GeeksforGeeks",
    date: "Mar 2025",
    description:
      "CRUD operations, schema design, indexing, and aggregation pipelines.",
    url: "https://www.geeksforgeeks.org/certificate/49b37e30358c01b28bd9f224923e7068?utm_source=socials&utm_medium=cc_link",
  },
  {
    title: "What Is Generative AI",
    issuer: "LinkedIn Learning",
    date: "Jul 2024",
    description:
      "Generative AI, Artificial Intelligence, and Large Language Models fundamentals.",
    url: "https://www.linkedin.com/learning/certificates/4cf1347ab85ecf983a96e616e0323dbc3150c6bb879e5516b15c80b7183489ea?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQcZymWmXSg6fKKfMupim%2Fw%3D%3D",
  },
  {
    title: "Learning Microsoft 365 Copilot",
    issuer: "LinkedIn Learning",
    date: "Dec 2023",
    description:
      "AI-powered productivity tools and integration with Microsoft applications.",
    url: "https://www.linkedin.com/learning/certificates/36b7902ecb294a534320c6a81832dcfdfa3c33dedce214c2f1a86925c88b4390?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BQcZymWmXSg6fKKfMupim%2Fw%3D%3D",
  },
  {
    title: "MariTHON 2025: Hack the Future of Maritime",
    issuer: "Graphic Era University",
    date: "Aug 2025",
    description:
      "Certificate of participation. Maritime technology, innovation, team collaboration, and problem-solving.",
    url: "https://drive.google.com/file/d/1qcaJNNkapJCZDKCNLXHnFuxr7xiXcL7M/view?usp=sharing",
  },
];

export const legacyRoutes = {
  "about.html": "about",
  "projects.html": "work",
  "academics.html": "journey",
  "certificates.html": "credentials",
  "contact.html": "contact",
};
