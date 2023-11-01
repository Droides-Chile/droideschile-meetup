function displayUpcomingMeetup(meetup) {
    // Código de la función displayUpcomingMeetup
    const container = document.getElementById('upcomingMeetup');
    container.innerHTML = `
        <div class="info">
            <div class="info-header">
                <img src="res/img/android-new-logo.png" alt="Bugdroid" class="bugdroid-logo">
                <h2>${meetup.title}</h2>
            </div>
            <p>Fecha: ${meetup.date}</p>
            <p>Lugar: ${meetup.location}</p>
        </div>
    `;

    const talksContainer = document.createElement('div');
    talksContainer.className = 'talk-container';

    meetup.speakers.forEach(speaker => {
        const talkDiv = document.createElement('div');
        talkDiv.className = 'talk';
        talkDiv.innerHTML = `
            <img src="${speaker.image}" alt="Talk">
            <h3>${speaker.name}</h3>
            <p><i>${speaker.role} <br />${speaker.company}</i></p>
            <a href="${speaker.linkedin}" target="_blank" class="linkedin-icon">
                <i class="fab fa-linkedin"></i>
            </a>
            <br />
            <p>${speaker.topic}</p>
        `;
        talksContainer.appendChild(talkDiv);
    });

    container.appendChild(talksContainer);

    const registrationDiv = document.createElement('div');
    registrationDiv.className = 'registration';
    registrationDiv.innerHTML = `
        <a href="${meetup.registrationLink}">Registrate</a>
    `;

    container.appendChild(registrationDiv);
}

function displayPastMeetups(meetups) {
    // Código de la función displayPastMeetups
    // Encuentra el contenedor donde se mostrarán los meetups pasados.
    const pastMeetupsContainer = document.getElementById('past-meetups');

    // Limpia cualquier contenido previo en el contenedor.
    pastMeetupsContainer.innerHTML = '';

    // Itera sobre cada meetup pasado.
    meetups.forEach(meetup => {
        // Crea los elementos HTML para mostrar los detalles del meetup.
        const meetupElement = document.createElement('div');
        meetupElement.className = 'past-meetup';

        // Agrega los detalles del meetup.
        meetupElement.innerHTML = `
            <h3>${meetup.title}</h3>
            <p>${meetup.date}</p>
            <p>${meetup.location}</p>
        `;

        // Agrega los speakers.
        const speakersList = document.createElement('ul');
        meetup.speakers.forEach(speaker => {
            const speakerItem = document.createElement('li');
            speakerItem.innerHTML = `${speaker.name} - <a href="${speaker.linkedin}" target="_blank">LinkedIn</a>`;
            speakersList.appendChild(speakerItem);
        });

        meetupElement.appendChild(speakersList);

        // Agrega el elemento del meetup al contenedor.
        pastMeetupsContainer.appendChild(meetupElement);
    });
}