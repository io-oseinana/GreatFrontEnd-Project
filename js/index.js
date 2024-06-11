const teamContent = document.querySelector('.team-content');
const loading = document.querySelector('.loading');

loading.style.display = 'block';

fetch('/data/team.json')
.then(response => response.json())
.then(data => {

    loading.style.display = 'none';

    data.forEach((member) => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        memberDiv.appendChild(img);

        const textSocial = document.createElement('div');
        textSocial.classList.add('text-social-links');
        memberDiv.appendChild(textSocial);

        const nameSupportText = document.createElement('div');
        nameSupportText.classList.add('name-support-text');
        textSocial.appendChild(nameSupportText);

        const nameRole = document.createElement('div');
        nameRole.classList.add('name-role');
        nameSupportText.appendChild(nameRole);

        const nameH3 = document.createElement('h3');
        nameH3.classList.add('name');
        nameH3.textContent = member.name;
        nameRole.appendChild(nameH3);

        const roleH4 = document.createElement('h4');
        roleH4.classList.add('role');
        roleH4.textContent = member.role;
        nameRole.appendChild(roleH4);

        const supportingTextP = document.createElement('p');
        supportingTextP.classList.add('supporting-text');
        supportingTextP.textContent = member.description;
        nameSupportText.appendChild(supportingTextP);

        teamContent.appendChild(memberDiv);
    });
})
.catch(error => {
    console.error('Error:', error);
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = `Error: ${error.message} Error fetching data. Please try again later.`;
    teamContent.appendChild(errorDiv);
    loading.style.display = 'none';
});