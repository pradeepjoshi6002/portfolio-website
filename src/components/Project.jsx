import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../utils/iconImport";

const Project = ({
  title,
  description,
  liveLink,
  githubLink,
  techStack,
  timeLine,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="flex-1 flex justify-between font-semibold">
        <div className="text-3xl">{title}</div>
        <div>{timeLine}</div>
      </div>
      <div className="w-[90%] text-lg pt-4  break-keep">{description}</div>
      <div className="flex justify-evenly text-lg font-semibold py-2">
        <Link to={liveLink} target="_blank" className="text-purple-600">
          🔗liveLink
        </Link>
        <Link to={githubLink} target="_blank" className="text-orange-500">
          🔗githubLink
        </Link>
      </div>
      <div className="flex justify-evenly pt-2">
        {techStack.map((tech, indx) => (
          <div
            key={indx}
            className="font-semibold flex flex-col items-center justify-center"
          >
            <img src={icons[tech]} alt={tech} className="h-9" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
