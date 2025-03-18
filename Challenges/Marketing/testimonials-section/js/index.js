const testimonialContainer = document.querySelector('.testimonial__section__container');

fetch('testimonials.json')
    .then(response => response.json())
    .then(testimonials => {
        testimonials.map((testimonial) => {
            const testimonialCard = document.createElement('figure');
            testimonialCard.className = `testimonial-card flex flex-col gap-4 bg-white p-6 rounded-lg border border-solid border-neutral-200 w-full break-inside-avoid `

            const testimonialAuthor = document.createElement('figcaption');
            testimonialAuthor.className = `flex items-center gap-4`;

            const testimonialImage = document.createElement('img');
            testimonialImage.src = testimonial.image;
            testimonialImage.alt = testimonial.name;
            testimonialImage.className = `w-12 h-12 object-cover rounded-full`;
            testimonialImage.loading = 'lazy';


            const testimonialAuthorInfo = document.createElement('div');
            testimonialAuthorInfo.className = `flex flex-col gap-[1px]`
            const testimonialName = document.createElement('h3');
            testimonialName.textContent = testimonial.name;
            testimonialName.className = `font-semibold text-lg text-neutral-900`;

            const testimonialUsername = document.createElement('span');
            testimonialUsername.textContent = testimonial.username;
            testimonialUsername.className = `font-normal text-sm text-neutral-600`;

            const testimonialTextHolder = document.createElement('blockquote');
            const testimonialText = document.createElement('p');
            testimonialText.textContent = testimonial.testimonial;
            testimonialText.className = `font-normal text-base text-neutral-600`;


            testimonialAuthor.appendChild(testimonialImage);
            testimonialAuthorInfo.appendChild(testimonialName);
            testimonialAuthorInfo.appendChild(testimonialUsername);
            testimonialAuthor.appendChild(testimonialAuthorInfo);

            testimonialCard.appendChild(testimonialAuthor);
            testimonialTextHolder.appendChild(testimonialText);
            testimonialCard.appendChild(testimonialTextHolder);

            testimonialContainer.appendChild(testimonialCard);
        });
    })
    .catch(error => console.error('Error fetching testimonials:', error));