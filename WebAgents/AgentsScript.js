// AgentsScript.js

const agents = [
    { name: 'Brimstone', description: 'Liam "Brimstone" Byrne is the commander of the VALORANT Protocol, a secretive organization tasked with protecting Earth from cataclysmic disasters and dangerous situations involving radianite. A former firefighter and soldier from Baltimore, Byrne is fiercely loyal to all his allies and organizations, always keeps his squadmates close. But although he would do anything for them, Byrne hasn not always been able to save everyone. After the death of a close friend, Tariq Porter, his loss greatly affected Byrne, haunted by what had happened despite all his own best efforts to save him. It was around this time that he would then join Kingdom Corporation, giving him something at a time when he needed it most. Byrne would go on to become a veteran of Kingdoms K-SEC branch, once again developing a strong loyalty to his employer.', image: 'AgentsImages/BrimstoneW.png' },
    { name: 'Viper', description:'American chemist Sabine Callas was a pivotal figure during the modern rediscovery of radianite. A distinguished scientist working at Kingdom Corporation, she had been one of the first to investigate the substance when the organization came across it. However, news of what Callas and Kingdom were about to uncover reached the Scions of Hourglass, an organization that already secretly knew about radianite and didn not want its existence to become public knowledge again to Alpha. Hourglass proceeded to send their most talented asset, the assassin "Ghost", to kill Callas. On the day of the attempted assassination however while Callas was working in her lab, she was able to defend herself, with Ghost being hit in the face by a vial of chemicals she had been holding before he had then ended up being trapped in a test chamber.', image: 'AgentsImages/ViperW.png' },
    { name: 'Omen', description: 'For many years the phantom radiant Omen had no memory of his past and how he came to be in his current state. Firstly working alongside Dr. Sabine Callas (one of his only apparent links to who he used to be) at Kingdom Corporation, he would then go on join her in the founding of the VALORANT Protocol. During his time as a secret agent, Omen was driven by his search to discover who he previously was. Without answers he was unable to find peace, his predicament being only a nightmare for him to live in. It was then after over a decade of time that a path towards the truth finally appeared when the Protocol came across an hourglass symbol after one of their missions, something that immediately triggered a sense of recognition in Omen.', image: 'AgentsImages/OmenW.png' },
    { name: 'Killjoy', description: 'Klara Böhringer is an inventor from Germany who was born to one parent with Germanic ancestry. A nominee for the Distinguished Inventor award, Böhringer became the lead for Kingdoms R&D department at the age of 18. Incredibly successful, she had many breakthroughs during her time at Kingdom with several of her creations and innovations. Böhringer was the fourth agent to join the VALORANT Protocol as "Killjoy". She earned her call sign after her team initially used it to compliment her outstanding skills that reduced the amount of work the rest of them had to do, with Klara deciding to keep the nickname.', image: 'AgentsImages/KilljoyW.png' },
    { name: 'Cypher', description: 'Amir El Amari (Arabic: أمير العماري; meaning "prince of the moon") hails from Rabat, Morocco. Growing up and living there in poverty at times, his citys resources were depleted due to the activities of Kingdom Corporation in the area, with El Amari harboring a negative view towards them as a result. An information broker who is constantly gathering intel, El Amari mostly keeps the results of his work and his secrets close to his chest - especially those about himself. Going to great lengths to ensure no one can gather secrets on the man who knows all the secrets, El Amari has set up multiple safehouses in order to stay hidden as well as never going anywhere without wearing his black face-concealing mask. Even once recruited by the secretive VALORANT Protocol as its fifth agent, "Cypher", El Amari still keeps his face and identity hidden from his fellow agents. For now, nothing is worth the risk of removing his mask - not even for those closest to him.[1]', image: 'AgentsImages/CypherW.png' },
    { name: 'Sova', description: 'Hailing from the town of Severomorsk, in Murmansk Oblast, Russia, Sasha Novikov (Russian: Саша Новиков) is an archer who became an agent for the VALORANT Protocol as its sixth recruit, "Sova". With his right eye replaced with a mechanical one after he lost it, Sova primarily serves as the teams scout, gathering information and searching for targets using olden methods should technology come up short. Being highly capable and reliable both in the field and with his work, whilst also having experience with multiple radianite-related events (having traveled through a rift and having met his Omega counterpart), Sova has earned a reputation of being one of the Protocols most trusted agents, especially to the organizations commander, Brimstone.', image: 'AgentsImages/SovaW.png' },
    { name: 'Sage', description: 'Wei Ling Ying (Chinese: 魏玲瑩) is a radiant monk coming from China. Going on to become an agent for the VALORANT Protocol as its seventh recruit, "Sage", Wei was able to work her way quickly up the ranks, with the Protocols superiors identifying natural leadership qualities in her. Sage is currently active in VALORANTs radiant agent recruitment and training, interacting with multiple new radiants upon recruitment and taking the lead on its radiant training program. Described as a stronghold, Sage is an agent who always looks out for her teammates and offers help whenever she can. She has fully embraced her powers which give her control of life, and wishes to use them to keep her team alive for as long as possible. Calmer and more collected than some of her more energetic allies, Sage always imparts encouraging words to rally the team up and guide them to victory.', image: 'AgentsImages/SageW.png' },
    { name: 'Phoenix', description: 'Jamie Adeyemi is a radiant hailing from the Peckham district in London, England. Growing up, Adeyemi attended a Performing Arts school in the area but was later suspended. Recruited into the VALORANT Protocol as its ninth agent, "Phoenix", Adeyemi was heavily involved with the Protocols activities from 10 AFL onwards. With much information kept from him as need-to-know as a recent recruit, he was unable to prevent a spike detonation in Venice whilst on a solo mission. Phoenix was given another opportunity to stop one the next day when another attack occurred in Rabat, and it was here that he first came face-to-face with the sole perpetrator, his own Omega counterpart. Frustrated with how much was being kept in the dark, despite going on to prevent the detonation this time with the help of a team, Phoenix was finally filled in on the threat posed by Omega Earth.', image: 'AgentsImages/PhoenixW.png' },
    { name: 'Jett', description: 'Han Sunwoo (Korean: 한선우) hails from South Korea, with possible links to the Insa-dong neighborhood in Seoul. As a chef in her early life, she was involved in an incident relating to her wind-like radiant powers at the restaurant she worked at, causing a "freak storm" that all but destroyed the building. Han fled the scene soon after. Later on, Han would be recruited by the VALORANT Protocol to become its tenth agent, "Jett". Whilst working for the Protocol however, an incident occurred in Venice that destroyed part of the city. When authorities issued warrants for the arrests of the perpetrators, one of them was revealed to look exactly identical to Jett. Though Jett herself had nothing to do with the mission, the rest of the world now believed that she was a threat to them.', image: 'AgentsImages/JettW.png' },
    { name: 'Reyna', description: 'Zyanya Mondragón is a Radiant from Mexico with the power to absorb life energy from the souls of people that she kills. After being affected by a disastrous event involving machines, Mondragón has a strong dislike for technology and humanity, believing herself and her fellow Radiants to be the true future for Earth. Before her time as a VALORANT Protocol agent, she set up a sanctuary to help people escape from Kingdom and heal, establishing a community there and becoming their protector and avenger. None of them however hold the same place in her heart as her little sister, Lucia, someone who Mondragón has been close to losing. After her eventual recruitment into VALORANT as its eleventh recruit, "Reyna", she was able to work with some of the organizations scientists to set up a procedure that allowed her to transfer some of the life energy she collects into Lucia, keeping her alive - at least for now. ', image: 'AgentsImages/ReynaW.png' },
    { name: 'Raze', description: 'Tayane Alves is an engineer coming from Salvador, Bahia, Brazil, with a strong enthusiasm for explosives and paint - usually combined. Holding strong objections towards Kingdom Corporations operations in Bahia, Alves was involved in driving the company out of her home state and forcing them to abandon their sites there, the marks of her tools staining the plots as a testament to her victories. Hired since then to work for the VALORANT Protocol as its twelfth agent, "Raze", Alves now sows her chaos against bigger threats to Earth. However, as the paint fades from Salvadors walls, Raze cannot afford to leave her home completely behind, lest Kingdom look to make its return there. The one-woman party from Bahia, Raze is always playful, impulsive, and spontaneous. She radiates chaotic energy and creates havoc on the battlefield, destroying every obstacle that is blocking her path. According to Sage, she can be impatient and would not stick to plans. She is notoriously cheeky, as seen when she earned Cyphers ire after constantly breaking his gadgets. Fun-loving as she is, she refers to her fellow agents as family and always assures them that she will be the one leading the fireworks display.', image: 'AgentsImages/RazeW.png' },
    { name: 'Breach', description: 'A criminal from Sweden, Erik Torsten was set to be convicted along with the rest of his family for their crimes. As he was a double congenital amputee however, the judge was pitiful and lenient towards him, giving him a smaller sentence that soon allowed Erik to return to his old ways. Building himself his own mechanical arms to use, Erik would hit back with his own criminal assignments, becoming so notorious for the terrible things he had done that he eventually had to go into hiding and effectively exile himself from his home. During these times, he also encountered the young Brazilian Tayane Alves, who worked alongside him for a while and provided some major upgrades to his arms, resulting in the carbon-steel titanium-plating version that he uses to this day.', image: 'AgentsImages/BreachW.png' },
    { name: 'Skye', description: 'A Radiant from Nimbin, Australia, Kirra Foster spent years fighting against Kingdom Corporations ventures in Eastern Australia. Resisting from Sawn Rocks to Kangaroo Valley, her efforts against Kingdom earned her the title of the "Great Reclaimer". Later approached by the VALORANT Protocol to become an agent, Foster was initially unsure of joining as she did not want to give up her fight against Kingdom and leave her homeland unprotected. However, when Sage decided to contact and direct her to a massive rift in the sky near her home, telling her there were many more like that one across the world, Kirra realized that the fight was bigger than just her home territory. Finally answering the call, she now serves as the Protocols fourteenth agent, "Skye".', image: 'AgentsImages/SkyeW.png' },
    { name: 'Yoru', description: 'A radiant from Tokyo, Japan, Kiritani Ryo (Japanese: 桐谷 諒) is a man dedicated to uncovering his past. Specifically interested in his ancestors and an ancient order of samurai, Kiritanis search has kept on bringing him to Kingdoms S22 container port. On his first visit, he broke into the facility and stole a mask from a set of samurai armor that allowed him to see into another dimension. He was later recruited by the VALORANT Protocol as its fifteenth agent, "Yoru", and shortly after this his familiarity with S22 saw him returning there on assignment to prevent a spike detonation by hostiles from Omega Earth. Still not done with S22 however, Yoru continued to return to the site despite having other missions to do for the Protocol and against the advice of his superiors. His research led him to discovering new information relating to both radianite and the alternate dimension that he could access and enter with his powers.', image: 'AgentsImages/YoruW.png' },
];

function showAgentDetails(index) {
    const agentDetails = document.getElementById('agentDetails');
    const selectedAgent = agents[index];

    if (selectedAgent) {
        document.getElementById('agentName').textContent = selectedAgent.name;
        document.getElementById('agentDescription').textContent = selectedAgent.description;
        document.getElementById('agentImage').src = selectedAgent.image;


    if (index === 0){
        agentImage.style.width = '460px';
        agentImage.style.marginLeft = '-70px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 1){
        agentImage.style.width = '380px';
        agentImage.style.marginLeft = '-35px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 2){
        agentImage.style.width = '420px';
        agentImage.style.marginLeft = '-65px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 3){
        agentImage.style.width = '440px';
        agentImage.style.marginLeft = '-120px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 4){
        agentImage.style.width = '420px';
        agentImage.style.marginLeft = '-75px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 5){
        agentImage.style.width = '440px';
        agentImage.style.marginLeft = '-100px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 6){
        agentImage.style.width = '340px';
        agentImage.style.marginLeft = '-50px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 7){
        agentImage.style.width = '380px';
        agentImage.style.marginLeft = '-20px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 8){
        agentImage.style.width = '395px';
        agentImage.style.marginLeft = '-30px';
        agentImage.style.marginTop = '-70px';
    }

    else if (index === 9){
        agentImage.style.width = '490px';
        agentImage.style.marginLeft = '-135px';
        agentImage.style.marginTop = '-180px';
    }
    else if (index === 10){
        agentImage.style.width = '490px';
        agentImage.style.marginLeft = '-100px';
        agentImage.style.marginTop = '-110px';
    }
    else if (index === 11){
        agentImage.style.width = '420px';
        agentImage.style.marginLeft = '-45px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 12){
        agentImage.style.width = '490px';
        agentImage.style.marginLeft = '-150px';
        agentImage.style.marginTop = '-70px';
    }
    else if (index === 13){
        agentImage.style.width = '390px';
        agentImage.style.marginLeft = '-60px';
        agentImage.style.marginTop = '-70px';
    }
    }
}

function createAgentList() {
    const agentList = document.getElementById('agentList');

    agents.forEach((agent, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = agent.name;
        listItem.addEventListener('click', () => showAgentDetails(index));
        agentList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', createAgentList);
