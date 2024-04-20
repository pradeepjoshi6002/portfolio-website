import React from "react";
import Project from "../components/Project";

const ProjectPage = () => {
  const projects = [
    {
      title: "Open Board - Real-Time Collaborative Sketch App",
      description:
        "Developed an online sketch board with real-time collaboration using JavaScript and Socket.io, allowing multiple users to draw synchronously. Implemented canvas functionality, integrated Socket.io for real-time sync, and ensured multi-user support.",
      liveLink: "https://open-board-tau.vercel.app/",
      githubLink: "https://github.com/pradeepjoshi6002/Open-Board",
      techStack: ["js", "node", "html", "css"],
      timeLine: "Dec-2023",
    },
    {
      title: "Movies App with React",
      description:
        "Created a React-based movie application, emphasizing functional components and utilizing a movie API for data retrieval. Designed and implemented React components, integrated with the movie API, and ensured a responsive UI.",
      liveLink: "https://pradeepjoshi6002.github.io/Movies-app/",
      githubLink: "https://github.com/pradeepjoshi6002/Movies-app",
      techStack: ["react", "js", "css"],
      timeLine: "2023",
    },
    {
      title: "Jira Ticket System Clone",
      description:
        "Developed a simplified clone of Jira for task tracking using JavaScript. Built core functionality, implemented task tracking features, and ensured a seamless user experience.",
      liveLink: "https://pradeepjoshi6002.github.io/jira-ticket-clone/",
      githubLink: "https://github.com/pradeepjoshi6002/jira-ticket-clone",
      techStack: ["react", "css", "js"],
      timeLine: "2023",
    },
  ];

  return (
    <div className="bg-[#ECF39E] min-h-[100vh]">
      <div className="text-center text-[#31572C] pt-6 text-5xl font-bold">
        Projects
      </div>
      <div className="p-[1rem] md:p-[4rem] flex flex-col gap-[3rem]">
        {projects.map((val, indx) => (
          <Project
            key={indx}
            title={val.title}
            description={val.description}
            liveLink={val.liveLink}
            githubLink={val.githubLink}
            techStack={val.techStack}
            timeLine={val.timeLine}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
