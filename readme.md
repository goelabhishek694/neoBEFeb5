https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

https://github.com/nodemailer/nodemailer/blob/master/examples/full.js


HW
Project
Create a project to scan the files in the downloads folder and categorize them as compressed (for rar, zip, 7zip files), documents (txt, xlsx, pdf, etc.), audio and video files.

Steps:

Read the Downloads Directory: Use fs.readdir or fs.readdirSync to list all files in the downloads directory.
Categorize Files: Loop through the files, use the path module to extract file extensions, and categorize files based on their extension (path.extname() method).
Move Files: Create separate folders for each category and move files into the appropriate folder using fs.rename or fs.copyFile.


Node.js Child Processes: Everything You Need to Know 
https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

Event Loop Timers and process.nextTick
https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

libuv
https://libuv.org/

MIME Types
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types

Node.js: Don't Block the Event Loop
https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop



IQ 


1️⃣ High-Level Node.js Architecture & Design
✅ General Node.js Questions
Why did Node.js choose a single-threaded event loop model, and how does it handle concurrency?
Explain the event loop and its phases. How does it impact performance?
What is the difference between microservices and monoliths in a Node.js system?
How does Node.js handle CPU-bound tasks? What strategies can we use to optimize performance?
Can you explain the differences between synchronous, asynchronous, and non-blocking operations in Node.js?
✅ System Design & Scalability
How would you design a highly scalable Node.js application that handles millions of concurrent users?
How can you use caching (Redis, Memcached) to improve performance in a Node.js application?
What strategies do you use to scale a Node.js application horizontally?
How do you manage API rate limiting in a Node.js-based microservices system?
How would you design a logging and monitoring system for a Node.js application?
2️⃣ Node.js Performance Optimization
✅ Performance & Optimization Strategies
What are some best practices for optimizing performance in a Node.js application?
How would you identify and fix memory leaks in a Node.js application?
What tools do you use to monitor and profile Node.js applications in production?
Explain the role of clustering and worker threads in Node.js. When would you use them?
How do you optimize database queries for performance in a Node.js application?
3️⃣ Security & Best Practices
✅ Security & Compliance
What are some common security vulnerabilities in Node.js applications, and how do you mitigate them?
How do you handle authentication and authorization in a Node.js microservices architecture?
What measures would you take to prevent DDoS attacks on a Node.js application?
How do you manage secrets and environment variables securely in Node.js applications?
What strategies do you follow to ensure compliance with security standards like GDPR and HIPAA in a Node.js application?
4️⃣ Node.js in a Microservices Ecosystem
✅ Microservices & Distributed Systems
How do you implement inter-service communication in a Node.js microservices architecture?
What are the advantages and challenges of using message queues (RabbitMQ, Kafka) in a Node.js application?
How do you ensure fault tolerance and resilience in a distributed Node.js system?
How do you manage API gateways in a microservices environment with Node.js?
How do you handle distributed transactions in a Node.js microservices system?
5️⃣ Team & Project Management
✅ Engineering Leadership
How do you ensure code quality and best practices across a Node.js development team?
What processes do you use for continuous integration and deployment (CI/CD) in Node.js projects?
How do you handle technical debt in a fast-moving Node.js project?
How do you mentor and grow junior developers in Node.js?
What strategies do you use to manage cross-functional teams working on a Node.js-based platform?
6️⃣ DevOps & Cloud-Native Node.js
✅ Cloud & DevOps Considerations
How do you deploy and manage a large-scale Node.js application on AWS/GCP/Azure?
How do you containerize a Node.js application using Docker and Kubernetes?
What role does serverless computing (AWS Lambda, Google Cloud Functions) play in Node.js development?
How do you handle zero-downtime deployments in a Node.js application?
How do you optimize cloud costs while running a Node.js application at scale?