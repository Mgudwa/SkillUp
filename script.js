// Sample data for skills and learning paths (replace with actual data)
const skillsData = [
    { name: "Web Development", description: "Learn to build websites and web applications.", resources: ["HTML", "CSS", "JavaScript"] },
    { name: "Data Science", description: "Analyze data and extract valuable insights.", resources: ["Python", "R", "SQL"] },
    { name: "Cybersecurity", description: "Protect systems and networks from threats.", resources: ["Ethical Hacking", "Network Security", "Penetration Testing"] }
];

const learningPathsData = [
    { title: "Front-End Developer", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Data Analyst", skills: ["SQL", "Python", "Tableau"] },
    { title: "Cybersecurity Analyst", skills: ["Networking", "Security Fundamentals", "Ethical Hacking"] }
];

// Function to dynamically load skill cards
function loadSkills() {
    const skillsSection = document.getElementById("skills");
    skillsData.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <ul>
                ${skill.resources.map(resource => `<li>${resource}</li>`).join('')}
            </ul>
        `;
        skillsSection.appendChild(skillCard);
    });
}

// Function to dynamically load learning path recommendations
function loadLearningPaths() {
    const learningPathsSection = document.getElementById("learning-paths");
    learningPathsData.forEach(path => {
        const pathCard = document.createElement("div");
        pathCard.classList.add("path-card");
        pathCard.innerHTML = `
            <h3>${path.title}</h3>
            <p>Learn the skills needed for a career in ${path.title}.</p>
            <ul>
                ${path.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        learningPathsSection.appendChild(pathCard);
    });
}

// Function to handle button click (example)
function handleGetStartedClick() {
    alert("This will take you to the registration page!");
}

// Load skill cards and learning paths on page load
window.onload = () => {
    loadSkills();
    loadLearningPaths();

    // Add event listener to the button
    const getStartedButton = document.querySelector("#hero button");
    getStartedButton.addEventListener("click", handleGetStartedClick);
}