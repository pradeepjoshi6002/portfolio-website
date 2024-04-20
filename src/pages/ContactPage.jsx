import React from "react";
import bioImg from "../../public/images/bioImg.jpg";
import ContactLink from "../components/ContactLink";

const ContactPage = () => {
  const details = [
    { gmail: "mailto:pradeepjoshi@gmail.com" },
    { linkedin: "https://www.linkedin.com/in/pradeep-joshi6002/" },
    { github: "https://github.com/pradeepjoshi6002" },
    { twitter: "https://twitter.com/iampradeepjoshi" },
    { instagram: "https://www.instagram.com/realpradeepjoshi/" },
  ];
  return (
    <div className="bg-[#ECF39E] min-h-[100vh]">
      <div className="text-center text-5xl font-semibold py-4 uppercase">
        contact
      </div>
      <div className="flex flex-col items-center pt-[5vh] gap-3">
        <div>
          <img
            src={bioImg}
            className="rounded-full bg-black aspect-square h-[15rem] "
            alt="my_image"
          />
        </div>
        {details.map((detail, index) => {
          const platform = Object.keys(detail)[0];
          const link = detail[platform];
          return (
            <ContactLink key={index} toLink={link}>
              {platform}
            </ContactLink>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;
