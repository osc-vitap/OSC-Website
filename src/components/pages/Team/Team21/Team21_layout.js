import React from "react";
import TeamCard from "./TeamCard";
import "./Team21_layout.css";

import CC from "./../../../../images/team/profasish.jpg";
import ph from "./../../../../images/team/ph.png";
import cl from "./../../../../images/team/eb21/Vijay_CommunityLead.PNG";
import cp from "./../../../../images/team/eb21/Adithya_President.JPG";
import vp from "./../../../../images/team/eb21/Bhargavi_Chairperson.jpeg";
import dr from "./../../../../images/team/harsha.png";
import pr from "./../../../../images/team/eb21/Tarini_HeadOfPublicRelations.jpg";
import sc from "./../../../../images/team/eb21/Ojasva_Secretary.jpeg";
import tl1 from "./../../../../images/team/eb21/Krishna Raj_TechLead.jpg";
import trl from "./../../../../images/team/eb21/SaiPranay_VicePresident.jpg";
import md from "./../../../../images/team/eb21/MaheshDasika_TechDepartment.jpg";
import el2 from "./../../../../images/team/eb21/Chethan_EventLead.jpg";
import eo from "./../../../../images/team/eb21/Abhiram_HeadOfVideographyAndEventOrg.jpg";
import om from "./../../../../images/team/eb21/Sabareesh_SocialMediaLead.jpg";
import ce from "./../../../../images/team/eb21/chirag_ChiefEditor.jpg";
import mel from "./../../../../images/team/eb21/maruti.png";
import kc from "./../../../../images/team/eb21/KAARTHIK SAI.jpeg";
import ap from "./../../../../images/team/eb21/Ashutosh_TrackLead.jpg";
import dh from "./../../../../images/team/eb21/dhruv_Secretary.jfif";
import ar from "./../../../../images/team/eb21/Aryan_TechnicalLead.jpg";
import ra from "./../../../../images/team/eb21/RahulAllokan_Event Department.jpg";
import lt from "./../../../../images/team/eb21/LaxmiTeja_Treasurer.jpg";
import ss from "./../../../../images/team/eb21/shaket_documentation specialist.jpg";
import ni from "./../../../../images/team/eb21/Nishita_Event Department.jpeg";
import pm from "./../../../../images/team/eb21/MounikaPraseeda_CreativeDepart.jpg";
import lk from "./../../../../images/team/eb21/Loukya_Front-End designer.jpeg";
import tba from "./../../../../images/team/eb21/tba.webp";
import ang from "./../../../../images/team/eb21/Angel_HRLead.jpg";
import ana from "./../../../../images/team/eb21/Anas_HRManager.jpg";
import va from "./../../../../images/team/eb21/Varshita_HRManager.jpg";
import ak from "./../../../../images/team/eb21/Akhil_HRManager.JPG";
import ru from "./../../../../images/team/eb21/Ruchith_HRCoordinator.png";
import ms from "./../../../../images/team/eb21/Shreya_HRCoordinator.png";
import ji from "./../../../../images/team/eb21/Jai_Developer.png"
import adi from "./../../../../images/team/eb21/Aditya_Head Of Marketing.jpg"
import se from "./../../../../images/team/eb21/Eeshwar_Organiser.jpg"
import so from "./../../../../images/team/eb21/Soundarya_Organiser.jpeg"
import apo from "./../../../../images/team/eb21/Apoorva_Head Of Videography.jpeg"
import po from "./../../../../images/team/eb21/Pooja_Designer.jpg"
import sree from "./../../../../images/team/eb21/Sreeja_Designer.jpg"
import sre from "./../../../../images/team/eb21/Sreekar_Documentation specialist.jpg"
import ya from "./../../../../images/team/eb21/Yash_Designer.jpg"
import ca from "./../../../../images/team/eb21/Chandra_Developer.jpg"
import kr from "./../../../../images/team/eb21/Krishna_Developer.jpeg"
import jai from "./../../../../images/team/eb21/jaitra_Developer.jpg"

function Team21_layout() {
  const core = [
    
    {
      image: cp,
      name: "Datta Adithya G V",
      role: "President",
      mail: "mailto:adithya.19bce7119@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/datta-adithya/",
      github: "https://github.com/dat-adi",
      description: "Kind of a pogchamp.",
    },
    {
      image: vp,
      name: "Bhargavi Chada",
      role: "Chairperson",
      mail: "mailto:bhargavi.19bcn7021@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/bhargavi-chada/",
      github: "https://github.com/BhargaviChada",
      description: "I like trains.",
    },
     {
      image: dr,
      name: "S.V. Harsha Vardhan",
      role: "Director",
      mail: "harshavardhan.19BCD7149@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/harshavardhan-samudrala-3ba66a216/",
      github: "https://github.com/harsha0703",
      description: "Think different for a better future. ",
    },
    {
      image: sc,
      name: "Ojasva",
      role: "Vice President",
      mail: "mailto:ojasva.20bcn7062@vitap.ac.in ",
      linkedin: "https://www.linkedin.com/in/ojasva-jain-9958071b2",
      github: "https://github.com/ojasva",
      description: "Windows user, but Open source supporter.",
    },
    {
      image: trl,
      name: "Sai Pranay",
      role: "Vice President",
      mail: "mailto:pranay.20bci7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/saipranay47/",
      github: "https://github.com/saipranay47",
      description: "I build things for the web",
    },
    {
      image: dh,
      name: "Dhruv Jha",
      role: "Secretary",
      mail: "mailto:dhruv.21bce7902@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/dhruv-jha-2002/",
      github: "https://github.com/fullmeteor172",
      description: "Not lazy, just on power saving mode ;-;",
    },
    {
      image: lt,
      name: "Lakshmi Teja P",
      role: "Treasurer",
      mail: "mailto:lakshmi.19bcn7002@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/lakshmi-teja-bb45861a1/",
      github: "https://github.com/LakshmiTejaP",
      description: "I get really excited when the sky is in pretty colors.",
    },
    {
      image: pr,
      name: "Tarini",
      role: "Head of public relations",
      mail: "mailto:tarini.19bce7758@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/tarinig/",
      github: "https://github.com/tatiniG/",
      description: "when day dreams become reality",
    },
    {
      image: ap,
      name: "Ashutosh Patel",
      role: "Track Lead",
      mail: "mailto:ashutosh.20bce7053@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/ashutosh-patel-a828a4221/",
      github: "https://github.com/ashu168",
      description: "Don't complain just work harder",
    },
  ];

  const tech = [
    {
      image: tl1,
      name: "Krishna Raj",
      role: "Technical Lead",
      mail: "mailto:krishna.19bce7357@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/n-krishna-raj/",
      github: "https://github.com/kode-logger",
      description: "Octocats never die, they only Evolve 😎.",
    },
    {
      image: ar,
      name: "Aryan Mohanty",
      role: "Technical Lead",
      mail: "mailto:aryan.21bce8377@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
      github: "https://GitHub.com/AryanVIT",
      description: "Better never means better for everyone, it always means worse for some",
    },
    {
      image: ap,
      name: "Ashutosh Patel",
      role: "Track Lead",
      mail: "mailto:ashutosh.20bce7053@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/ashutosh-patel-a828a4221/",
      github: "https://github.com/ashu168",
      description: "Don't complain just work harder",
    },
    {
      image: md,
      name: "Mahesh Dasika",
      role: "Developer",
      mail: "mailto:mahesh.20bci7075@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/mahesh-d-178b681b8/",
      github: "https://github.com/mahesh-11102",
      description: "Tech and Auto enthusiast",
    },
    {
      image: lk,
      name: "Loukya",
      role: "Developer",
      mail: "mailto:loukya.21bce7404@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/adepu-loukya-67a345221/",
      github: "https://github.com/A-Loukya",
      description: "I love front-end designing",
    },
    {
      image: trl,
      name: "Sai Pranay",
      role: "Developer",
      mail: "mailto:pranay.20bci7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/saipranay47/",
      github: "https://github.com/saipranay47",
      description: "I build things for the web",
    },
    {
      image: ji,
      name: "Jai Gaurav",
      role: "Developer",
      mail: "mailto:gaurav.21bce7193@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/jai-gaurav-092656228/",
      github: "https://github.com/StormJay07",
      description: "Set your aim to be the best among the best, not worse amongst the worst",
    },
    {
      image: kr,
      name: "Patil Krishna Reddy",
      role: "Developer",
      mail: "mailto:krishna.21bce8145@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/krishna-reddy-399093222/",
      github: "https://github.com/Krishna1081",
      description: "Don't be the same, be better.",
    },
    {
      image: ca,
      name: "Chandra Kiran Reddy Avula",
      role: "Developer",
      mail: "mailto:chandrakiran.21bce7814@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
      github: "https://github.com/ackr-8",
      description: "BTW I use Arch!",
    },
    {
      image: jai,
      name: "Jaitra Venkiteela",
      role: "Developer",
      mail: "mailto:Venkiteela.21bce7243@vitapstudent.ac.in",
      linkedin: "",
      github: "https://github.com/Boomer3110",
      description: "",
    },
  ];

  const events = [
    {
      image: mel,
      name: "Maruti",
      role: "Event Lead",
      mail: "mailto:maruti.19bce7243@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/maruti-kameshwar-6b8846215/",
      github: "https://github.com/marutikameshwar",
      description: "For me, open source is a moral thing.",
    },
    {
      image: el2,
      name: "Chethan",
      role: "Event Lead",
      mail: "mailto:tirpati.19bce7427@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/chethan-tirupati-523251194",
      github: "https://github.com/chethantirupati",
      description:
        "I want to put culture on a track so that it becomes more inclusive, more open source.",
    },
    {
      image: ra,
      name: "Rahul Alokkan",
      role: "Event Lead",
      mail: "mailto:rahul.20bcn7006@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/rahul-alokkan-16384b196/",
      github: "https://github.com/Rahul-Alokkan",
      description: "Tech Entusiast ",
    },
    {
      image: kc,
      name: "Kaarthik",
      role: "Head of Marketing",
      mail: "mailto:Kaarthik.19bcd7142@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/kaarthik-patibandla-30017219a/",
      github: "https://github.com/tatiniG/",
      description: "That which does not kill us makes us stronger ",
    },
    {
      image: ni,
      name: "Nishita Singh",
      role: "Organiser",
      mail: "mailto:nishita.21bce8684@vitapstudent.ac.in",
      linkedin: "",
      github: "",
      description: "The power of Open Source is the power of the people. The people rule.",
    },
    {
      image: se,
      name: "Sai Eeshwar D",
      role: "Organiser",
      mail: "mailto:eeshwar.21bce8935@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/sai-eeshwar-d-5a590922b/",
      github: "https://github.com/EESH-843",
      description: "Alexa, finish my degree",
    },
    {
      image: so,
      name: "R. Soundarya",
      role: "Organiser",
      mail: "mailto:soundarya.20bce7307@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/soundarya-ravikumar-0819661b8/",
      github: "https://github.com/Soundarya003",
      description: "Live the moment pata nahi kal ho na ho",
    },
    { 
      image: adi,
      name: "Aditya Papriwal",
      role: "Head Of Marketing",
      mail: "mailto:aditya.21bce8747@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/aditya-papriwal-110912223",
      github: "https://github.com/Aditya-1008",
      description: "We're just two lost souls",
    },
  ];

  const creative = [
    {
      image: om,
      name: "Sabareesh Reddy",
      role: "Creative Lead",
      mail: "mailto:sabareesh.19bce7210@vitap.ac.in",
      linkedin:
        "https://www.linkedin.com/in/sabareesh-reddy-chowkacherla-6834a6196/",
      github: "https://github.com/Sabareesh000",
      description:
        "In real open source, you have the right to control your own destiny.",
    },
    {
      image: ss,
      name: "Sai Shaket Kalivarapu",
      role: "Chief Editor",
      mail: "mailto:shaket.19bce7547@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/sai-shaket-kalivarapu-51327618a/",
      github: "https://github.com/KilluaZ06",
      description: "I try to be the fun one",
    },
    {
      image: eo,
      name: "Abhiram",
      role: "Head of videography",
      mail: "mailto:kalyan.19bcd7118@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/abhiram-kalyan-883445190/",
      github: "https://github.com/abhiram-kalyan",
      description:
        "I have really become a huge believer in the power of open source.",
    },
    {
      image: apo,
      name: "Apoorva Parashar",
      role: "Head of videography",
      mail: "mailto:apoorva.21bce7574@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/apoorva-parashar-512bb722a/",
      github: "https://github.com/ApoorvaPa",
      description: "Learning to dance in the Rain",
    },
    {
      image: ce,
      name: "Chirag",
      role: "Documentation specialist",
      mail: "mailto:chirag.20bce7453@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/chirag-gupta-8a16161ba",
      github: "https://github.com/chiragg06",
      description: "I overthink the niche.",
    },
    {
      image: sre,
      name: "Vadakattu Sreekar",
      role: "Documentation specialist",
      mail: "mailto:sreekar.20bci7043@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/sreekar-vadakattu-8a54361b2/",
      github: "https://github.com/Sreekar22",
      description: "Live everyday as it's your first and last day",
    },
    {
      image: trl,
      name: "Sai Pranay",
      role: "Designer",
      mail: "mailto:pranay.20bci7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/saipranay47/",
      github: "https://github.com/saipranay47",
      description: "I build things for the web",
    },
    {
      image: pm,
      name: "Praseeda kallakuri",
      role: "Designer",
      mail: "mailto:praseedha.21bce8649@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/praseeda-kallakuri-970334221/",
      github: "https://github.com/praseedakallakuri",
      description: "creative soul!!",
    },
    {
      image: po,
      name: "Pooja",
      role: "Designer",
      mail: "mailto:pooja.20bce7630@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/pooja-chowdhary-15501022b/",
      github: "https://github.com/Poojachowdhary07",
      description: "People say nothing is impossible but i do nothing everyday",
    },
    {
      image: sree,
      name: "Sai Sreeja",
      role: "Designer",
      mail: "mailto:sreeja.20bcd7238@vitap.ac.in",
      linkedin: "https://www.linkedin.com/mwlite/in/sai-sreeja-64325721b",
      github: "https://github.com/sr-19",
      description: "sleep, eat, watch movies, repeat!",
    },
    {
      image: ya,
      name: "Yash Daga",
      role: "Designer",
      mail: "mailto:yash.20bce7323@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/yashdaga17/",
      github: "https://github.com/YashDaga17",
      description: "The darkness declares the glory of light.",
    },
  ];

  const hr = [
    {
      image: ang,
      name: "Angel Maria Stanley",
      role: "HR Lead",
      mail: "mailto:maria.21bce7363@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/angel-stanly-218a0893/",
      github: "https://github.com/Maiden23",
      description: "If you gonna cry here, you might as well cry in paris",
    },
    {
      image: ana,
      name: "Mohammed Anas Shakil Kazi",
      role: "HR Manager",
      mail: "mailto:shakil.21bce7917@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/anas-kazi-88a064216/",
      github: "https://github.com/BlazingPh0enix",
      description: "Wearing a MASK all the time...",
    },
    {
      image: va,
      name: "Dollu Vakuladevi",
      role: "HR Manager",
      mail: "mailto:vakuladevi.19bce7061@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/varshita-dollu-a3b43a197/",
      github: "https://github.com/varshita-web",
      description: "Life is full of dhokebaaz people",
    },
    {
      image: ak,
      name: "Gudiseva Akhil",
      role: "HR Manager",
      mail: "mailto:akhil.21bba7006@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/gudiseva-akhil-000825222/",
      github: "https://github.com/AkhilGudiseva",
      description: "I refuse your refusal",
    },
    {
      image: ru,
      name: "Ruchith Reddy",
      role: "HR Co-ordinator",
      mail: "mailto:ruchith.20bce7241@vitap.ac.in",
      linkedin: "https://www.linkedin.com/in/ruchith-reddy-64ba6a22b/",
      github: "https://github.com/Ruchith07",
      description: "The best place to hide a dead body is the second page of Google search",
    },
    {
      image: ms,
      name: "M S Shreya",
      role: "HR Co-ordinator",
      mail: "mailto:shreya.21bce7228@vitapstudent.ac.in",
      linkedin: "https://www.linkedin.com/in/shreya-m-s-1a0425220/",
      github: "https://github.com/Shreya110204",
      description: "My very Existence sucks",
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
              name="S Vijay Balaji"
              role="Community Lead"
              mail="mailto:vijaykumar.19bce75741@vitap.ac.in"
              linkedin="https://www.linkedin.com/in/svijayb/"
              github="https://github.com/SVijayB"
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

        <div className="board-category5">
          <div className="category-title">Human Resourses.</div>
        </div>
        <div className="tclContainer">
          <div className="Row">
            {hr.map((i) => (
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
      </section>
    </React.Fragment>
  );
}

export default Team21_layout;
