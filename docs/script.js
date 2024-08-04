const projectContainer = document.querySelector('.project-container');
const searchInput = document.querySelector('#search');   
async function getProject() {
    try {
        const res = await fetch('GreatFrontEnd-Project/projects.json');
        const data = await res.json();
        console.log(data);

        data.forEach(project => {
            const projectCard = document.createElement('a');
            projectCard.classList.add('project-card');
            projectCard.id = project.projectID;
            projectCard.href = project.projectLiveDemo;
            projectCard.target = '_blank';
            projectCard.title = project.projectName;

            const projectImageDiv = document.createElement('div');
            projectImageDiv.classList.add('project-image-div');

            const projectImage = document.createElement('img');
            projectImage.classList.add('project-image');
            projectImage.src = project.image;
            projectImage.alt = project.projectName;

            projectImageDiv.appendChild(projectImage);

        

            const projectSkillsImg = document.createElement('div');
            projectSkillsImg.classList.add('project-skills-img');

            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');

            const projectTitle = document.createElement('h2');
            projectTitle.textContent = project.projectName;
            projectTitle.classList.add('project-title');
            
            projectDetails.appendChild(projectTitle);

            project.skills.forEach(skill => {
                const imageUrl = skill[Object.keys(skill)[1]];
                if (imageUrl) {
                    const skillImg = document.createElement('img');
                    skillImg.src = imageUrl;
                    skillImg.alt = skill[Object.keys(skill)[0]];
                    projectSkillsImg.appendChild(skillImg);
                }
            });
            projectDetails.appendChild(projectSkillsImg);


            projectCard.appendChild(projectImageDiv);
            // projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDetails);
            // projectCard.appendChild(projectSkillsImg);
            projectContainer.appendChild(projectCard);


        })
    }
    catch (err) {
        console.error(err);
    }
}

const filterProjects = (searchText) => {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (project.textContent.toLowerCase().includes(searchText.toLowerCase())) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', () => filterProjects(searchInput.value));

getProject();
