import React from "react";
import TeamCard from "./TeamCard";
import "./Team22_layout.css";

import CC from "./../../../../images/team/profasish.jpg";
import ph from "./../../../../images/team/ph.png";
import cl from "./../../../../images/team/eb22/RahulAllokan_Community_lead.jpg";
import pr from "./../../../../images/team/eb22/Ojasva_President.jpeg";
import dr from "./../../../../images/team/eb22/SaiPranay_director.jpg";
import sec from "./../../../../images/team/eb22/dhruv_Secretary.jfif";
import hpr from "./../../../../images/team/eb21/tba.webp";
import tl from "./../../../../images/team/eb21/tba.webp";
import trl from "./../../../../images/team/eb22/Aryan_TrackLead.jpg";
import d1 from "./../../../../images/team/eb22/Loukya_Developer.jpeg";
import dev from "./../../../../images/team/eb22/AVULA_chandra_kiran_devops.jpg";
import d2 from "./../../../../images/team/eb22/Jai_Developer.png";
import d3 from "./../../../../images/team/eb22/avinash_developer.jpg";
import d4 from "./../../../../images/team/eb21/tba.webp";
import d5 from "./../../../../images/team/eb21/tba.webp";
import crl from "./../../../../images/team/eb22/Pooja_Designer.jpg";
import ed from "./../../../../images/team/eb21/tba.webp";
import vid from "./../../../../images/team/eb22/Apoorva_Videography.jpeg";
import de1 from "./../../../../images/team/eb21/tba.webp";
import de2 from "./../../../../images/team/eb22/soumyadip_designer.jpeg";
import el from "./../../../../images/team/eb22/eeshwar_eventlead.jpg";
import or1 from "./../../../../images/team/eb22/anas_organizer.jpg";
import or2 from "./../../../../images/team/eb22/aleshita_organizer.jpeg";
import or3 from "./../../../../images/team/eb22/varshitha_organizer.jpg";
import or4 from "./../../../../images/team/eb22/nishita_organizer.jpeg";
import or5 from "./../../../../images/team/eb21/tba.webp";
import hm from "./../../../../images/team/eb22/Aditya_Marketing.jpg";

import tba from "./../../../../images/team/eb21/tba.webp";

function Team22_layout() {
  const core = [
    
    {
      image: pr,
      name: "Ojasva Jain",
      role: "President",
      mail: "mailto:ojasva.20bcn7062@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/ojasva-jain-9958071b2",
      github: "https://github.com/ojasva",
      description: "",
    },
     {
      image: dr,
      name: "Sai Pranay",
      role: "Director",
      mail: "mailto:pranay.20bci7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/saipranay47/",
      github: "https://github.com/saipranay47",
      description: "",
    },
    {
      image: sec,
      name: "Dhruv Jha",
      role: "Secretary",
      mail: "mailto:dhruv.21bce7902@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/dhruv-jha-2002/",
      github: "https://github.com/fullmeteor172",
      description: "",
    },
    {
      image: hpr,
      name: "Aashish",
      role: "Head of PR",
      mail: "mailto:aashis.20bcn7058@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/aashis-rout-382b25229",
      github: "https://github.com/Aashish-Rout",
      description: "",
    },
    {
      image: tba,
      name: "Sharath Harikumar",
      role: "Treasurer",
      mail: "mailto:harikumar.21bce8104@vitapstudent.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    
    
  ];

  const tech = [
    {
      image: tl,
      name: "Akhil ",
      role: "Technical Lead",
      mail: "mailto:akhilesh.20bce7602@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/akhilcodes",
      github: "https://github.com/officialakhil",
      description: "",
    },
    {
      image: trl,
      name: "Aryan Mohanty",
      role: "Track Lead",
      mail: "mailto:aryan.21bce8377@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
      github: "https://GitHub.com/AryanVIT",
      description: "",
    },
    {
      image: d1,
      name: "A. Loukya",
      role: "Developer",
      mail: "mailto:loukya.21bce7404@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/adepu-loukya-67a345221/",
      github: "https://github.com/A-Loukya",
      description: "",
    },
    {
      image: dev,
      name: "Chandra Kiran Reddy Avula",
      role: "DevOps Lead",
      mail: "mailto:chandrakiran.21bce7814@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
      github: "https://github.com/ackr-8",
      description: "",
    },
    {
      image: d2,
      name: "Jai Gaurav ",
      role: "Developer",
      mail: "mailto:gaurav.21bce7193@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/jai-gaurav-092656228/",
      github: "https://github.com/StormJay07",
      description: "",
    },
    {
      image: d3,
      name: "Avinash Kumar",
      role: "Developer",
      mail: "mailto:avinash.21bce7279@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/theavinash-kumar/",
      github: "https://github.com/TheAvinashK",
      description: "",
    },
    {
      image: d4,
      name: " R HARI CHANDANA ",
      role: "Developer",
      mail: "mailto:chandana.21bce8718@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/hari-chandana-5a6a621a8/",
      github: "https://github.com/RChandana",
      description: "",
    },
    {
      image: d5,
      name: "Vuppula saikrishna",
      role: "Developer",
      mail: "mailto:saikrishna.20bci7222@vitap.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    
  ];

  const creative = [
    {
      image: crl,
      name: "Pooja",
      role: "Creative Lead",
      mail: "mailto:pooja.20bce7630@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/pooja-chowdhary-15501022b/",
      github: "https://github.com/Poojachowdhary07",
      description:"",
    },
    {
      image: ed,
      name: "Vemu Namratha",
      role: "Editorial",
      mail: "mailto:namratha.20bes7002@vitap.ac.in",
      linkedin: "https://www.linkedin.com/mwlite/in/namratha-vemu-5650841b6",
      github: "https://github.com/Namratha-1221",
      description: "",
    },
    {
      image: vid,
      name: "Apoorva Parashar",
      role: "Head of videography",
      mail: "mailto:apoorva.21bce7574@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/apoorva-parashar-512bb722a/",
      github: "https://github.com/ApoorvaPa",
      description:"",
    },
    {
      image: de1,
      name: "M Sricharan",
      role: "Designer",
      mail: "mailto:sricharan.20bci7055@vitap.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    {
      image: de2,
      name: "Soumyadip Chowdhuri",
      role: "Designer",
      mail: "mailto:soumyadip.21bec7099@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250",
      github: "https://github.com/VulcanX-2003",
      description: "",
    },{
      image: tba,
      name: "Isa Hassan",
      role: "Designer",
      mail: "mailto:isa.21bce7011@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/isa-hasan-59375a226/",
      github: "",
      description: "",
    },
    
  ];

  const events = [
    {
      image: el,
      name: "Sai Eeshwar",
      role: "Event Lead",
      mail: "mailto:eeshwar.21bce8935@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/sai-eeshwar-d-5a590922b/",
      github: "https://github.com/EESH-843",
      description: "",
    },
    {
      image: or1,
      name: "Muhammed Anas Shakil Kazi",
      role: "Organizer",
      mail: "mailto:shakil.21bce7917@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/anas-kazi-88a064216/",
      github: "https://github.com/BlazingPh0enix",
      description: "",
    },
    {
      image: or2,
      name: "Pathuri Aleshita",
      role: "Organizer",
      mail: "mailto:aleshita.21bcb7061@vitapstudent.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    {
      image: or3,
      name: "Varshitha Ramireddy",
      role: "Organizer",
      mail: "mailto:varshitha.21bcb7076@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/varshitha-ramireddy-a3ab1222a/",
      github: "https://github.com/Varshithar19",
      description: "",
    },
    {
      image: or4,
      name: "Nishita Singh",
      role: "Organizer",
      mail: "mailto:nishita.21bce8684@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/nishita-singh-161471231",
      github: "https://github.com/nishitasingh123",
      description: "",
    },
    {
      image: or5,
      name: "Sanjana Bhat",
      role: "Organizer",
      mail: "mailto:sanjana.21bce8094@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/sanjana-bhat-b5755b236/",
      github: "https://github.com/Sanj2508",
      description: "",
    },
    { 
      image: hm,
      name: "Aditya Papriwal",
      role: "Head Of Marketing",
      mail: "mailto:aditya.21bce8747@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aditya-papriwal-110912223",
      github: "https://github.com/Aditya-1008",
      description: "We're just two lost souls",
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
            <TeamCard
              image={CC}
              name="Prof. Asish K. Dalai"
              role="Club Coordinator (Faculty)"
              mail="mailto:asish.d@vitap.ac.in"
              linkedin="https://www.linkedin.com/in/asish-kumar-dalai-7b25ab169/"
              github="false"
            />
          </div>
          <div className="Row">
            <TeamCard
              image={cl}
              name="Rahul Alokkan"
              role="Community Lead"
              mail="mailto:rahul.20bcn7006@vitap.ac.in"
              linkedin="https://www.linkedin.com/in/rahul-alokkan-16384b196/"
              github="https://github.com/Rahul-Alokkan"
            />
          </div>
          <div className="Row">
            {core.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role={i.role}
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
                role={i.role}
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
          <div className="category-title">Creative.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {creative.map((i) => (
              <TeamCard
                image={i.image}
                name={i.name}
                role={i.role}
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
                role={i.role}
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

        
      </section>
    </React.Fragment>
  );
}

export default Team22_layout;
