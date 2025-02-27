import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web, mobile and windows applications. I have honed my skills in front-end technologies like React, Flutter and Next.js, as well as back-end technologies like Node.js, PHP, SpringBoot, MySQL, PostgreSQL Firebase, and MongoDB. Additionally, I have developed and published games and apps with Google Admob ads integrated to the Google Play Store. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web, mobile and windows applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, Firebase and MongoDB. My journey in software development began with a deep curiosity for how things work, and it has evolved into a phase where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const PROJECTS = [
  {
    title: "CINEC Shuttle Services system",
    image: project1,
    description:
      "A system that allows users to track shuttles, get a digital shuttle pass and to verify their pass by scanning a QR code.",
    technologies: ["React", "SpringBoot", "Firebase"],
  },
  {
    title: "CRM system",
    image: project2,
    description:
      "A CRM system developed for a well known academy in Sri Lanka. The system allows role based login, management of lead statuses, and the ability to get an overview of perfomance of employees.",
    technologies: ["NextJS", "NodeJS", "PostgreSQL"],
  },
  {
    title: "Fullstack website for a Pastry business",
    image: project3,
    description:
      "A website for a well known pastry franchise in Sri Lanka. The website allows Oauth authorization, browse items and add to cart and order them. The admin can add, delete and edit items and view orders as well.",
    technologies: ["NextJS", "NodeJS", "PostgreSQL"],
  },
  {
    title: "EduCraft",
    image: project4,
    description:
      "A mobile application to manage tuituion classes. The student can view their class schedules and scan QR code to mark their attendances. The teacher can view, add, edit and delete students.",
    technologies: ["Flutter", "NodeJS", "Firebase"],
  },
  {
    title: "Portfolio website",
    image: project5,
    description:
      "A simple but appealing portfolio website",
    technologies: ["React"],
  },
];

export const CONTACT = {
  address: "Okanda, Ransegoda ",
  phoneNo: "+94 71 698 6818 ",
  email: "naveensandaru2@gmail.com",
};
