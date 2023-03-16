import React from "react";
import TeamCard from "./TeamCard";
import "./Team23_layout.css";

import CC from "./../../../../images/team/profasish.jpg";
import ph from "./../../../../images/team/ph.png";
import cl from "./../../../../images/team/eb22/RahulAllokan_Community_lead.jpg";
import pr from "./../../../../images/team/eb22/Ojasva_President.jpeg";
import dr from "./../../../../images/team/eb22/SaiPranay_director.jpg";
import cp1 from "./../../../../images/team/eb23/Akhil_chairperson.jpg";
import cp2 from "./../../../../images/team/eb23/Pooja_Chairperson.jpg";
import vp1 from "./../../../../images/team/eb23/dhruv_VP.jfif";
import vp2 from "./../../../../images/team/eb23/AVULA_chandra_kiran_VP.jpg";
import hpr from "./../../../../images/team/eb23/ashish.jpeg";
import tr from "./../../../../images/team/eb21/tba.webp";
import tl from "./../../../../images/team/eb23/Aryan_TechLead.jpg";
import trl from "./../../../../images/team/eb23/avinash_TrackLead.jpg";
import d1 from "./../../../../images/team/eb22/Loukya_Developer.jpeg";
import d2 from "./../../../../images/team/eb23/jai_developer.jpeg";
import d3 from "./../../../../images/team/eb23/R_HARI_CHANDANA_Developer.jpeg";
import d4 from "./../../../../images/team/eb23/Vishnu_Gamini_Developer.png";
import d5 from "./../../../../images/team/eb23/Abhineet_Saha_Developer.png";
import crl from "./../../../../images/team/eb23/ISA_HASAN_CreativeLead.jpeg";
import vid from "./../../../../images/team/eb22/Apoorva_Videography.jpeg";
import vfx from "./../../../../images/team/eb23/BHAVYAA_VFX.jpg";
import de1 from "./../../../../images/team/eb22/soumyadip_designer.jpeg";
import de2 from "./../../../../images/team/eb23/Sreeram_Gangavarapu_Designer.jpg";
import de3 from "./../../../../images/team/eb23/SAURABH_HEMANT_PATIL_Designer.jpg";
import ed1 from "./../../../../images/team/eb23/Sagnik_Sarkar_Editorial.JPG";
import ed2 from "./../../../../images/team/eb21/tba.webp";
import ed3 from "./../../../../images/team/eb23/NAVADEEP_NAIDU_Editorial.jpg";
import ed4 from "./../../../../images/team/eb23/SHRADDHA_MENON_Editorial.jpg";
import el from "./../../../../images/team/eb23/anas_Event_lead.jpg";
import or1 from "./../../../../images/team/eb22/aleshita_organizer.jpeg";
import or2 from "./../../../../images/team/eb22/varshitha_organizer.jpg";
import or3 from "./../../../../images/team/eb22/nishita_organizer.jpeg";
import or4 from "./../../../../images/team/eb23/ADITYA_organizer.jpg";
import or5 from "./../../../../images/team/eb23/ANUSHNA_event.jpg";
import or6 from "./../../../../images/team/eb23/Kartikeya_Gorantla_organizer.jpg";

import tba from "./../../../../images/team/eb21/tba.webp";

function Team23_layout() {
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
      image: cp1,
      name: "Akhil",
      role: "Chairperson",
      mail: "mailto:akhilesh.20bce7602@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/akhilcodes",
      github: "https://github.com/officialakhil",
      description: "",
    },
     {
      image: cp2,
      name: "Pooja",
      role: "Chairperson",
      mail: "mailto:pooja.20bce7630@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/pooja-chowdhary-15501022b/",
      github: "https://github.com/Poojachowdhary07",
      description: "",
    },
    {
      image: vp1,
      name: "Dhruv Jha",
      role: "Vice President",
      mail: "mailto:dhruv.21bce7902@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/dhruv-jha-2002/",
      github: "https://github.com/fullmeteor172",
      description: "",
    },
    {
      image: vp2,
      name: "Chandra Kiran Reddy Avula",
      role: "Vice President",
      mail: "mailto:chandrakiran.21bce7814@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
      github: "https://github.com/ackr-8",
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
      name: "Aryan Mohanty",
      role: "Technical Lead",
      mail: "mailto:aryan.21bce8377@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
      github: "https://GitHub.com/AryanVIT",
      description: "",
    },
    {
      image: trl,
      name: "Avinash Kumar",
      role: "Track Lead",
      mail: "mailto:avinash.21bce7279@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/theavinash-kumar/",
      github: "https://github.com/TheAvinashK",
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
      name: " R HARI CHANDANA ",
      role: "Developer",
      mail: "mailto:chandana.21bce8718@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/hari-chandana-5a6a621a8/",
      github: "https://github.com/RChandana",
      description: "",
    },
    {
      image: d4,
      name: "Vishnu Gamini",
      role: "Developer",
      mail: "mailto: vishnu.21bce8834@vitapstudent.ac.in ",
      linkedin: "https://www.linkedin.com/in/vishnu-gamini-a80b26249/",
      github: "https://github.com/vishnugamini",
      description: "",
    },
    {
      image: d5,
      name: "Abhineet Saha",
      role: "Developer",
      mail: "mailto:abhineet.22bce8208@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/abhineet-saha-317472203/",
      github: "https://github.com/Itz4vI",
      description: "",
    },
    
  ];

  const creative = [
    {
      image: crl,
      name: "Isa Hasan",
      role: "Creative Lead",
      mail: "mailto:isa.21bce7011@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/isa-hasan-59375a226/",
      github: "",
      description:"",
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
      image: vfx,
      name: "Bhavyaa",
      role: "VFX",
      mail: "mailto:bhavyaa.22bce9282@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/bhavyaa-5854088a/",
      github: "github.com/andbhavyaa",
      description:"",
    },
    {
      image: de1,
      name: "Soumyadip Chowdhuri",
      role: "Designer",
      mail: "mailto:soumyadip.21bec7099@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250",
      github: "https://github.com/VulcanX-2003",
      description: "",
    },
    {
      image: de2,
      name: "Gangavarapu Sreeram",
      role: "Designer",
      mail: "mailto:sreeram.21bce8979@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/sreeram-gangavarapu-70289024b/",
      github: "https://github.com/sreeramgvp11",
      description: "",
    },
    {
      image: de3,
      name: "Saurabh Hemant Patil",
      role: "Designer",
      mail: "mailto:saurabh.22bec7136@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/saurabh-patil-17a457260",
      github: "https://github.com/Saurxbh21",
      description: "",
    },
    {
      image: ed1,
      name: "Sagnik Sarkar",
      role: "Editorial",
      mail: "mailto:sagnik.21bce8793@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/sagnik-sarkar-710/",
      github: "https://github.com/imtommyshelby",
      description: "",
    },
    {
      image: ed2,
      name: "Dhruv Hari ",
      role: "Editorial",
      mail: "mailto:dhruv.20bcr7006@vitap.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    {
      image: ed3,
      name: "NAVADEEP NAIDU",
      role: "Editorial",
      mail: "mailto:navadeep.22bce8388@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/navadeep-naidu-67b832230",
      github: "https://github.com/navadeepnaidu7",
      description: "",
    },
    {
      image: ed4,
      name: "Shraddha Menon",
      role: "Editorial",
      mail: "mailto:shraddha.22bce8207@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/shraddha-menon-039662265",
      github: "",
      description: "",
    },

    
  ];

  const events = [

    {
      image: el,
      name: "Muhammed Anas Shakil Kazi",
      role: "Event Lead",
      mail: "mailto:shakil.21bce7917@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/anas-kazi-88a064216/",
      github: "https://github.com/BlazingPh0enix",
      description: "",
    },
    {
      image: or1,
      name: "Pathuri Aleshita",
      role: "Organizer",
      mail: "mailto:aleshita.21bcb7061@vitapstudent.ac.in",
      linkedin: "",
      github: "",
      description: "",
    },
    {
      image: or2,
      name: "Varshitha Ramireddy",
      role: "Organizer",
      mail: "mailto:varshitha.21bcb7076@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/varshitha-ramireddy-a3ab1222a/",
      github: "https://github.com/Varshithar19",
      description: "",
    },
    {
      image: or3,
      name: "Nishita Singh",
      role: "Organizer",
      mail: "mailto:nishita.21bce8684@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/nishita-singh-161471231",
      github: "https://github.com/nishitasingh123",
      description: "",
    },
    {
      image: or4,
      name: "Aditya.k.s",
      role: "Organizer",
      mail: "mailto:aditya.22bce9293@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aditya-ks-25964b22b",
      github: "https://github.com/S0LI5",
      description: "",
    },
    {
      image: or5,
      name: "Tanniru Anushna ",
      role: "Organizer",
      mail: "mailto:anushna.22bce8890@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/anushna-tanniru-6a7544251",
      github: "https://github.com/Anushna206",
      description: "",
    },
    {
      image: or6,
      name: "G Kartikeya",
      role: "Organizer",
      mail: "mailto:kartikeya.21bce7940@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/kartikeya-gorantla-611706250/",
      github: "https://github.com/GK-Idiot",
      description: "",
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

export default Team23_layout;
