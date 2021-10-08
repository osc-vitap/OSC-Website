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
import ap from "./../../../../images/team/eb21/Ashutosh_Developer.jpg";
import dh from "./../../../../images/team/eb21/dhruv_Track lead.jfif";
import ar from "./../../../../images/team/eb21/Aryan_Developer.jpg";
import ra from "./../../../../images/team/eb21/RahulAllokan_Event Department.jpg";
import lt from "./../../../../images/team/eb21/LaxmiTeja_Treasurer.jpg";
import ss from "./../../../../images/team/eb21/shaket_documentation specialist.jpg";
import ni from "./../../../../images/team/eb21/Nishita_Event Department.jpeg";
import pm from "./../../../../images/team/eb21/MounikaPraseeda_CreativeDepart.jpg";
import lk from "./../../../../images/team/eb21/Loukya_Front-End designer.jpeg";


function Team21_layout() {
  const core = [
    {
      image: CC,
      name: "Prof. Asish K. Dalai",
      role:"Club Coordinator (Faculty)",
      mail: "mailto:asish.d@vitap.ac.in",
      // linkedin: "",
      // github: "",
      // description: "",
    },
    {
      image: cl,
      name: "S Vijay Balaji",
      mail: "mailto:vijaykumar.19bce75741@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/svijayb/",
      github: "https://github.com/SVijayB",
      description:"The more you sweat in peace, the less you bleed in war.",
    },
    {
      image: dr,
      name: "S.V. Harsha Vardhan",
      role:"Director",
      mail: "harshavardhan.19BCD7149@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/harsha-samudrala-3ba66a216/",
      github: "https://github.com/harsha0703",
      description:"Think different for a better future. ",
    },
    {
      image: cp,
      name: "Datta Adithya G V",
      role:"President",
      mail: "mailto:adithya.19bce7119@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/datta-adithya/",
      github: "https://github.com/dat-adi",
      description:"Kind of a pogchamp.",
    },
    {
      image: vp,
      name: "Bhargavi Chada",
      role:"Vice President",
      mail: "mailto:bhargavi.19bcn7021@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bhargavi-chada/",
      github: "https://github.com/BhargaviChada",
      description:"I like trains.",
    },
    {
      image: kc,
      name: "Kaarthik",
      role:"Chairman",
      mail: "mailto:Kaarthik.19bcd7142@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/kaarthik-patibandla-30017219a/",
      github: "https://github.com/tatiniG/",
      description:"That which does not kill us makes us stronger ",
    },
    {
      image: sc,
      name: "Ojasva",
      role:"Secretary",
      mail: "mailto:ojasva.20bcn7062@vitap.ac.in ",
      linkedin: "https://www.linkedin.com/in/ojasva-jain-9958071b2",
      github: "https://github.com/ojasva",
      description:"Windows user, but Open source supporter.",
    },
    {
      image: pr,
      name: "Tarini",
      role:"Head of public relations",
      mail: "mailto:tarini.19bce7758@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/tarinig/",
      github: "https://github.com/tatiniG/",
      description:"when day dreams become reality",
    },
    {
      image: lt,
      name: "Lakshmi Teja P",
      role:"Treasurer",
      mail: "mailto:lakshmi.19bcn7002@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/lakshmi-teja-bb45861a1/",
      github: "https://github.com/LakshmiTejaP",
      description:"I get really excited when the sky is in pretty colors.",
    },
    
    
    

  ];

  const tech = [
    {
      image: tl1,
      name: "Krishna Raj",
      role:"Technical Lead",
      mail: "mailto:krishna.19bce7357@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/n-krishna-raj/",
      github: "https://github.com/kode-logger",
      description:"Octocats never die, they only Evolve 😎.",
    },
    {
      image: tl2,
      name: "Madhav",
      role:"Technical Lead",
      mail: "mailto:surya.19bcn7228@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/gvssmadhav",
      github: "https://github.com/gvssaimadhav",
      description:"Soon, We Are Going to Live in the Era of AI.",
    },
    {
      image: trl,
      name: "Sai Pranay",
      role:"Track Lead",
      mail: "mailto:pranay.20bci7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/saipranay47/",
      github: "https://github.com/saipranay47",
      description:"I build things for the web",
    },
    {
      image: md,
      name: "Mahesh Dasika",
      role:"Developer",
      mail: "mailto:mahesh.20bci7075@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/mahesh-d-178b681b8/",
      github: "https://github.com/mahesh-11102",
      description:"Tech and Auto enthusiast",
    },
    {
      image: bmd,
      name: "Bindhu madhav",
      role:"Developer",
      mail: "mailto:bindhu.19bcd7116@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bindhu-madhav-varma-c-58140b1aa/",
      github: "https://github.com/BINDHUMADHAVAVARMA",
      description:"I think, fundamentally, open source does tend to be more stable software. It's the right way to do things.",
    },
    {
      image: ap,
      name: "Ashutosh Patel",
      role:"Developer",
      mail: "mailto:ashutosh.20bce7053@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/ashutosh-patel-a828a4221/",
      github: "https://github.com/ashu168",
      description:"Don't complain just work harder",
    },
    {
      image: dh,
      name: "Dhruv Jha",
      role:"Developer",
      mail: "mailto:dhruv.21bce7902@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/dhruv-jha-2002/",
      github: "https://github.com/fullmeteor172",
      description:"Not lazy, just on power saving mode ;-;",
    },
    {
      image: ar,
      name: "Aryan Mohanty",
      role:"Track Lead",
      mail: "mailto:aryan.21bce8377@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
      github: "https://GitHub.com/AryanVIT",
      description:"Better never means better for everyone it always means worse for some",
    },
    {
      image: lk,
      name: "Loukya",
      role:"Developer",
      mail: "mailto:loukya.21bce7404@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/adepu-loukya-67a345221/",
      github: "https://github.com/A-Loukya",
      description:"I love front-end designing",
    },
  ];

  const events = [
    {
      image: mel,
      name: "Maruti",
      role:"Event Lead",
      mail: "mailto:maruti.19bce7243@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/maruti-kameshwar-6b8846215/",
      github: "https://github.com/marutikameshwar",
      description:"For me, open source is a moral thing.",
    },
    {
      image: el2,
      name: "Chethan",
      role:"Event Lead",
      mail: "mailto:tirpati.19bce7427@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/chethan-tirupati-523251194",
      github: "https://github.com/chethantirupati",
      description:"I want to put culture on a track so that it becomes more inclusive, more open source.",
    },
    
    {
      image: om,
      name: "Sabareesh Reddy",
      role:"SocialMedia Lead",
      mail: "mailto:sabareesh.19bce7210@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/sabareesh-reddy-chowkacherla-6834a6196/",
      github: "https://github.com/Sabareesh000",
      description:"In real open source, you have the right to control your own destiny.",
    },
    {
      image: ra,
      name: "Rahul Alokkan",
      role:"Organizer",
      mail: "mailto:rahul.20bcn7006@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/rahul-alokkan-16384b196/",
      github: "https://github.com/Rahul-Alokkan",
      description:"Tech Entusiast ",
    },
    {
      image: ni,
      name: "Nishita Singh",
      role:"Organiser",
      mail: "mailto:nishita.21bce8684@vitapstudent.ac.in",
      linkedin: "",
      github: "",
      description:"The power of Open Source is the power of the people. The people rule.",
    },
  ];


  const design = [
    {
      image: ce,
      name: "Chirag",
      role:"Chief Editor",
      mail: "mailto:chirag.20bce7453@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/chirag-gupta-8a16161ba",
      github: "https://github.com/chiragg06",
      description:"I overthink the niche.",
    },
    {
      image: eo,
      name: "Abhiram",
      role:"Head of videography",
      mail: "mailto:kalyan.19bcd7118@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/abhiram-kalyan-883445190/",
      github: "https://github.com/abhiram-kalyan",
      description:"I have really become a huge believer in the power of open source.",
    },
    {
      image: ss,
      name: "Sai Shaket Kalivarapu",
      role:"Documentation team",
      mail: "mailto:shaket.19bce7547@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/sai-shaket-kalivarapu-51327618a/",
      github: "https://github.com/KilluaZ06",
      description:"I try to be the fun one",
    },
    {
      image: pm,
      name: "Praseeda kallakuri",
      role:"Designer",
      mail: "mailto:praseedha.21bce8649@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/praseeda-kallakuri-970334221",
      github: "https://github.com/praseedakallakuri",
      description:"creative soul!!",
    },
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

        <br />
        <br />
        <br />

        <div className="board-category4">
          <div className="category-title">Design.</div>
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


      </section>
    </React.Fragment>
  );
}

export default Team21_layout;
