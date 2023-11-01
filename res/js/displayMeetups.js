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
    const pastMeetupsContainer = document.getElementById('past-meetups');
    pastMeetupsContainer.innerHTML = '';

    meetups.forEach(meetup => {
        const meetupElement = document.createElement('div');
        meetupElement.className = 'past-meetup';

        const meetupTitleElement = document.createElement('div');
        meetupTitleElement.className = 'past-meetup-title';
        meetupTitleElement.innerText = meetup.title;
        meetupTitleElement.addEventListener('click', () => {
            meetupDetailsElement.classList.toggle('hidden');
        });

        const meetupDetailsElement = document.createElement('div');
        meetupDetailsElement.className = 'past-meetup-details hidden';

        meetupDetailsElement.innerHTML = `
            <p><strong>Fecha:</strong> ${meetup.date}</p>
            <p><strong>Lugar:</strong> ${meetup.location}</p>
        `;

        const speakersList = document.createElement('ul');
        meetup.speakers.forEach(speaker => {
            const speakerItem = document.createElement('li');
            speakerItem.innerHTML = `
                ${speaker.name} - ${speaker.talkTitle}
                <a href="${speaker.linkedin}" target="_blank" class="linkedin-icon">
                    <i class="fab fa-linkedin"></i>
                </a>
            `;
            speakersList.appendChild(speakerItem);
        });

        meetupDetailsElement.appendChild(speakersList);

        meetupElement.appendChild(meetupTitleElement);
        meetupElement.appendChild(meetupDetailsElement);
        pastMeetupsContainer.appendChild(meetupElement);
    });
}


