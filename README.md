**Project overview**
The NHPC Manuals Directory is a centralized, web-based platform developed to enhance the 
accessibility and management of technical manuals across various departments within NHPC Ltd. 
Traditionally, retrieving manuals involved navigating through unstructured folders or relying on 
physical copies, which often led to delays and inefficiencies. This project addresses these 
challenges by introducing a structured and user-friendly digital interface where users can browse 
categorized manuals, perform keyword searches, and download relevant documents in PDF 
format.
The system is built using a full-stack development approach. The frontend, developed with HTML, 
CSS, JavaScript, and Bootstrap, ensures a responsive and intuitive user experience. The backend, 
powered by Node.js and Express, handles API requests and communicates with a MySQL database 
that stores metadata for each category and manual. Manuals are securely stored in a static folder 
and served directly upon user request. Features like search filtering, organized category views, and 
clean navigation further improve usability.
This project not only simplifies documentation access but also lays the groundwork for scalable 
document management in the future. By digitizing manual storage, it significantly reduces time 
spent locating technical documents, supports efficient operations, and contributes to the broader 
goal of digital transformation within NHPC.


**Implementation**
 *(Interface Previews)*
MANUALS CATEGORIES
This page interface represents the main category selection page of the NHPC Manuals Directory 
system. Allows users to browse manuals by various categories such as Electrical, Mechanical etc. 
The page features a dynamic search bar to quickly filter categories and is styled with a blue gradient background 
that aligns with NHPC’s official branding. Clicking on any category navigates the user to a new page where
they can access and download manuals relevant to that category in PDF format.

CATEGORIES FILES
This page displays all available manuals under a selected category from the NHPC Manuals 
Directory. After clicking on a category, they are redirected to view specific manuals such 
as the Turbine Manual, Pump Manual etc. Each manual name functions as a clickable link, 
enabling users to easily download the corresponding PDF file. A "Back to Categories" button 
is provided for smooth navigation, ensuring users can return to the main category page without 
refreshing or restarting their session. 

FILES DOWNLOAD
This page highlights the successful download capability of the NHPC Manuals Directory. 
After clicking on any manual link, such as Valve Manual or Turbine Manual, the corresponding 
PDF file is instantly downloaded to the user’s system, as seen in the browser’s recent download 
history. 

**Tools and Techniques Applied**
• HTML,CSS,JavaScript,Bootstrap(CDN):
Used to build the frontend interface of the NHPC Manuals Directory. HTML structured 
the content, CSS handled styling, and JavaScript enabled interactivity. Bootstrap via CDN 
was utilized for responsive design and consistent UI components across devices.
• Node.jsandExpress.js:
Formed the core backend framework for handling HTTP requests, serving APIs, and 
managing routing logic. Express.js enabled efficient development of RESTful API 
endpoints for fetching and displaying manuals by category.
• jQuery and AJAX:
jQuery simplified DOM manipulation and event handling, while AJAX was used to make 
real-time API calls without reloading the page. This allowed a seamless user experience 
when browsing and viewing manual categories.
• JSON-based Data Handling:
Manual information was structured using JSON, allowing dynamic updates and retrieval 
of manuals through the backend with minimal overhead. This format ensured easy parsing 
and integration with frontend scripts.
• Git(Version Control):
Git was used to manage and track changes in the project’s codebase. It enabled version 
control, collaboration, and rollback functionality during development and testing phases.
• Communication and Collaboration:
Actively engaged with teammates and stakeholders to gather functional requirements, 
discuss design ideas, and present progress updates. Clear communication ensured the 
project stayed aligned with NHPC’s internal needs and usability expectations
