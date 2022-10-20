function createProjectCard (project) {

    project.forEach(project => {
        const container = document.getElementById('project-cards-container');
        
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        container.appendChild(projectCard);

        const projectTitle = document.createElement('h3');
        projectCard.appendChild(projectTitle);
        projectTitle.innerText = project.title;

        const projectImg = document.createElement('img');
        projectCard.appendChild(projectImg);
        projectImg.setAttribute('alt', "imagen del proyecto");
        projectImg.setAttribute('src', project.img);
        
        const projectFoot = document.createElement('div');
        projectCard.appendChild(projectFoot);
        projectFoot.classList.add('project-card--foot');
        
        const buttonView = document.createElement('button');
        projectFoot.appendChild(buttonView);
        buttonView.setAttribute('onclick', `window.open('${project.buttons.view}', '_blank')`);
        buttonView.innerText = 'View';
        
        const buttonGithub = document.createElement('button');
        projectFoot.appendChild(buttonGithub);
        buttonGithub.setAttribute('onclick', `window.open('${project.buttons.github}', '_blank')`);
        buttonGithub.innerText = 'GitHub-Repo';

        const subTitle = document.createElement('h4');
        projectFoot.appendChild(subTitle);
        subTitle.innerText = 'Habilidades Usadas';

        const listSkills = document.createElement('ul');
        projectFoot.appendChild(listSkills);

        project.skills.forEach(project =>{
            const skillItem = document.createElement('li');
            listSkills.appendChild(skillItem);
            skillItem.innerText = project;
        });
        

    });
}

createProjectCard(project);