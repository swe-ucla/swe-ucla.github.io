import React from 'react';
import SpeakerItem from "./SpeakerItem";
import "./Speakers.css";
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


function Speakers() {
    console.log("hi")
    return (
        <div className = "speakers2">
            <div className="graphic1">
            </div>
            <div className="graphic2">
            </div>
            <div className='infoheader'>
            <h1>Engineering for Good<br></br>Research Symposium</h1>
                <h2>Overview</h2>
                <p className='info1'>Info</p>
                <a href="https://google.com/">
                    <Button className = 'regbutton' variant="contained" size='large' >
                        Registration Link! 
                    </Button>
                </a>
            </div>
        <h3>Meet the Speakers</h3>
        <div className='figure1'> 
            <div className = 'circle_border'>
            <img 
            src='images/blank-profile.webp'
            alt="Speaker 1"
            />
            </div>
            {/* <img src="images/sergio.png" alt="speaker 1" height="200" width="200" /> */}
            <p className='info'>
                <b>Name</b>Sergio Carbajo<br></br>
                <b>Department</b>Electrical & Computer Engineering (ECE)<br></br>
                <b>Background</b>
                <ul style={{'list-style-type': 'circle'}}>
                    <li>FBS in Telecom Engineering from Tecnun, Universidad de Navarra, 2009</li>
                    <li>SM.Sc. in Electrical and Computer Engineering from the National Science Foundation Engineering Research Center at Colorado State University, 2012</li>
                    <li>PhD in Physics from Massachusetts Institute of Technology and Deutsches Elektronen Synchrotron</li>
                </ul>
                <b>Research Overview</b>
                Professor Carbajo’s research examines emerging frontiers in ultrafast photon sciences and light-matter interactions through the following fields: life science, biochemistry, quantum optics and information sciences, and environmental and chemical engineering.
                <ol style={{'type': '1'}}>
                    <li>Quantum optics, ultrafast and nonlinear optics, and structured photonics</li>
                    <li>Ultrafast sciences & molecular dynamics, (soft) condensed matter physics</li>
                    <li>Particle accelerators and X-ray free electron lasers</li>
                    <li>Critically representative science and technology, and queered science and technology studies</li>
                </ol>
                <b>How their research helps humanity</b>
                Exercises representative science, which mandates not only diverse and inclusive researchers but also 
                requires a continual examination of the interconnectedness of normative logics and hierarchies of power 
                with how scientific knowledge is produced. Queering specific normalized categories in physical sciences 
                and engineering, and mapping linkages with systems of political and economic power, humanities, and social
                 sciences has a unique capacity to educate the STEM workforce and research activities to critically examine 
                 their role and responsibility in shaping society.
                 <br></br>
                 <br></br>
                 <b>Links</b>
                 <a href="https://samueli.ucla.edu/people/sergio-carbajo/">
                    {/* <Button className = 'regbutton' variant="contained" > */}
                        Sergio's UCLA Page 
                    {/* </Button> */}
                </a>
                <br></br>
                Lab Links
                <a href="https://light-matter.seas.ucla.edu/">The Quantum Light-Matter Cooperative</a>
                <a href="https://lcls.slac.stanford.edu/l4a-rd/">Lasers for Accelerators R&D</a>

                </p>
                </div>
        <div className='figure2'> 
            <div className = 'circle_border'>
            <img 
            src='images/jennifer.png'
            alt="Speaker 2"
            />
            </div>
            {/* <img src="images/jennifer.png" alt="speaker 2" height="200" width="200" /> */}
            <p className='info'>
            <b>Name</b>Jennifer Jay<br></br>
                <b>Department</b>Civil & Environmental Engineering (C&EE)<br></br>
                <b>Background</b>
                <ul style={{'list-style-type': 'circle'}}>
                    <li>B.S., M.S., and Ph.D. in Civil and Environmental Engineering at Massachusetts Institute of Technology</li>
                </ul>
                <b>Research Overview</b>
                Professor Jay’s research integrates field and laboratory approaches to better understand the geochemical and microbial processes that govern the fate of contaminants in the environment. Specific interests include the geochemical and microbial methylation of mercury by sulfate-reducing bacteria (the end-product of this reaction, methylmercury, is a potent neurotoxin with a very strong tendency to bioaccumulate), the mobilization of arsenic in groundwater, and the persistence of fecal indicator bacteria and pathogens in beach sediment. Understanding the cycling of contaminants in aquatic systems allows us to better assess and minimize hazards associated with environmental contamination, and to more accurately predict effects of environmental perturbations.
                <br></br>
                 <br></br>
                <b>How their research helps humanity</b>
                Professor Jay’s research evaluates how humans affect the world around us, along with determining ways to improve the world by examining the coastal water quality, heavy metals in the environment, and the environmental proliferation of antibiotic resistance. In addition she analyzes how environmental education can diminish the carbon footprint of dietary choices.
                 <br></br>
                 <br></br>
                 <b>Links</b>
                 <a href="https://www.ioes.ucla.edu/person/jennifer-jay/">
                    {/* <Button className = 'regbutton' variant="contained" > */}
                        Jennifer's Website
                    {/* </Button> */}
                </a>
                </p>
                </div>
        <div className='figure3'> 
            <div className = 'circle_border'>
            <img
            src='e4g-symposium-website/public/images/dino.png'
            alt="Speaker 3"
            />
            </div>
            {/* <img src="images/dino.png" alt="speaker 3" height="200" width="200" /> */}
            <p className='info'>
            <b>Name</b>Dino di Carlo<br></br>
                <b>Department</b>Mechanical & Aerospace Engineering (MECH&AE)<br></br>
                <b>Background</b>
                <ul style={{'list-style-type': 'circle'}}>
                    <li>B.S., University of California, Berkeley, 2002</li>                  
                    <li>Ph.D., University of California, Berkeley and San Francisco, 2006</li>
                    <li>Postdoctoral Training with Professor Mehmet Toner, Harvard Medical School, Massachusetts General Hospital, Center for Engineering in Medicine, 2006-2008</li>
                </ul>
                <b>Research Overview</b>
                Professor di Carlo’s research revolutionizes the biotech industry by developing interfaces that allow for various applications, such as disease diagnosis, therapeutic discovery, tissue regeneration, and directed evolution. Utilizing microfluidics, microfabrication, and nanotechnologies, these interfaces expand the boundaries of biology due to their structure consisting of cells and molecules.
                <br></br>
                 <br></br>
                <b>How their research helps humanity</b>
                The interface is easily accessible and can help detect and treat diseases early and in a cost-effective manner. The affordability can minimize healthcare costs, and the early detection can increase health span. The development of sustainable biofuels pushes us in the right direction of ensuring food and energy sustainability.
                 <br></br>
                 <br></br>
                 <b>Links</b>
                 <a href="https://samueli.ucla.edu/people/dino-di-carlo/">
                    {/* <Button className = 'regbutton' variant="contained" > */}
                        Dino's UCLA Page
                    {/* </Button> */}
                </a>
                <br></br>
                Lab Links
                <a href="https://www.biomicrofluidics.com/">Di Carlo Lab</a>
                 </p>
        </div>
      </div>
    )
    
}

export default Speakers;