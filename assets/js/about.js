var modal = document.getElementById("my-modal");
var buttons = document.getElementsByClassName("team-member-click");
var closeButtons = document.getElementsByClassName("close");

const bios = [
    "Former Co-founder & VP of top bitcoin mining pools BTC.com & Poolin. Led the Taproot miner activated softfork on bitcoin.",
    "Filippo’s Bitcoin journey began in 2013, leading him from grassroots education efforts in Italy to pioneering advancements in Bitcoin mining infrastructure. As the lead developer of the Stratum Reference Implementation (SRI), he has played a pivotal role in shaping the Stratum V2 protocol, significantly enhancing mining efficiency, security, and decentralization. Now, as CTO of Demand Pool, the first Stratum V2 mining pool with job declaration, he's at the forefront of a historical moment in Bitcoin Mining History, bringing Stratum V2 to all miners, decentralizing the Bitcoin network.",
    "I worked two years for SRI, so this position was very suitable for me because I am already practical with the backend codebase.",
    "After 4 years in the traditional finance industry, Francisco joined our team as a business developer manager. In this role, Francisco is responsible for managing miner's relationships with the pool, developing strategic partnerships with other organizations and promoting awareness about the mining protocol Stratum V2 and its importance for Bitcoin´s decentralization and its censorship resistance. Francisco holds a bachelor’s degree in Economics from Nova School of Business and Economics, and a master’s degree in Finance from Rotterdam School of Management, Erasmus University.",
    "Agustin has been around in the Mining Industry for the past 4 years. His background is on Bitcoin Mining Analysis for PubCo Mining companies and Business Development for companies in the Bitcoin and Bitcoin Mining Industry. For the past three years, Agustin has also co-organized the Barcelona Bitcoin meet ups and volunteered in European-wide community initiatives. He can also usually be found in Bitcoin conferences. Apparently he also got an Economics degree, but some Bitcoiners (like himself) dismiss that, since it wasn't on Austrian economics.",
    "Piero is a Cloud&DevOps Engineer with over 15 years of experience in the IT industry. He currently works at Demand, where he is responsible for managing and optimizing cloud infrastructures, as well as implementing continuous integration and continuous delivery (CI/CD) processes. Previously, he worked in the fintech and utilities sectors, specializing in cloud platforms to design scalable infrastructures and improve performance, cost efficiency, and security. He has a strong background in Infrastructure as Code, serverless development, and distributed architectures.He has held technical leadership roles, managing incident response and performance optimization for distributed Linux infrastructures. Additionally, he has experience in Linux system administration, networking, and managing mission-critical environments.",
    "My name is Prisca Chidimma Maduka, a software engineer who is in love with Bitcoin technology. I previously worked with the SRI team for benchmarking Stratum V1 and V2 protocols during the Summer of Bitcoin internship, Now, as a Junior Rust Developer at Demand, I contribute to improving decentralization in Bitcoin mining by building to efficient software solutions.",
    "Francesco is an Italian software engineer based in Dubai. He studied Computer Science in Italy and started working as a mobile developer. After years of experience in different fields, from mobile to VR, backend development and software engineering. Always passionate about Bitcoin and the technology and philosophy behind it, Francesco finally joined Demand in 2025.",
    "Viktor is an experienced web and mobile developer. He is passionate about applying functional programming on the frontend, tinkering with backend and design in spare time."
];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        console.log(i);
        modal.style.display = "flex";
        document.documentElement.style.overflow = 'hidden';
        document.getElementsByClassName("bio-content")[0].innerHTML = bios[i];
    };
}

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        modal.style.display = "none";
        document.documentElement.style.overflow = '';
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.documentElement.style.overflow = '';
    }
}
