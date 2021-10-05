import React from "react";
import TeamCard from "./TeamCard";
import "./team21layout.css";

import CC from "./../../../../images/team/profasish.jpg";
import ph from "./../../../../images/team/ph.png";
import cl from "./../../../../images/team/eb21/Vijay_CommunityLead.PNG";
import cp from "./../../../../images/team/eb21/Adithya_President.JPG";
import vp from "./../../../../images/team/eb21/Bhargavi_VicePresident.jpeg";
import dr from "./../../../../images/team/harsha.png";
import pr from "./../../../../images/team/eb21/Tarini_HeadOfPublicRelations.jpg";
import sc from "./../../../../images/team/eb21/Ojasva_Secretary.jpeg";
import tl1 from "./../../../../images/team/eb21/Krishna Raj_TechLead.jpg";
import tl2 from "./../../../../images/team/eb21/Madhav_TechLead.jpg";
import trl from "./../../../../images/team/eb21/SaiPranay_TrackLead.jpg";
import md from "./../../../../images/team/eb21/MaheshDasika_TechDepartment.jpg";
import bmd from "./../../../../images/team/eb21/BindhuMadhav_TechDepartment.jpg";
import el2 from "./../../../../images/team/eb21/Chethan_EventLead.jpg";
import eo from "./../../../../images/team/eb21/Abhiram_HeadOfVideographyAndEventOrg.jpg";
import om from "./../../../../images/team/eb21/Sabareesh_SocialMediaLead.jpg";
import ce from "./../../../../images/team/eb21/chirag_ChiefEditor.jpg";
import mel from "./../../../../images/team/eb21/maruti.png";
import kc from "./../../../../images/team/eb21/KAARTHIK SAI.jpeg";


function Team21_layout() {
  const core = [
    {
      image: cp,
      name: "name",
      role:"presedent",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "I build things for Web",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum quia",
    },
  ];

  const tech = [
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
  ];

  const events = [
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    }
  ];


  const design = [
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    },
    {
      image: "https://bindhumadhav.in/temp/images/1.jpg",
      name: "name",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description: "hi",
    }
  ];

  return (
    <React.Fragment>
      <section>
        <div className="board-category1">
          <div className="category-title">Core.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {core.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role = {i.role}
                mail={i.mail}
                linkedin={i.linkedin}
                github={i.github}
                description={i.description}
              />
            ))}
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="board-category2">
          <div className="category-title">Tech.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {tech.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role = {i.role}
                mail={i.mail}
                linkedin={i.linkedin}
                github={i.github}
                description={i.description}
              />
            ))}
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="board-category3">
          <div className="category-title">Events.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {design.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role = {i.role}
                mail={i.mail}
                linkedin={i.linkedin}
                github={i.github}
                description={i.description}
              />
            ))}
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="board-category4">
          <div className="category-title">Design.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {events.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role = {i.role}
                mail={i.mail}
                linkedin={i.linkedin}
                github={i.github}
                description={i.description}
              />
            ))}
          </div>
        </div>


      </section>
    </React.Fragment>
  );
}

export default Team21_layout;
