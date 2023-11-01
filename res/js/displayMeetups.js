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
            <p>${speaker.talkTitle}</p>
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
        const meetupCard = document.createElement('div');
        meetupCard.className = 'past-meetup-card';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'past-meetup-title';
        titleDiv.onclick = () => toggleMeetupDetails(titleDiv);

        const titleHeading = document.createElement('h3');
        titleHeading.textContent = meetup.title;
        titleDiv.appendChild(titleHeading);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'past-meetup-content';
        contentDiv.style.display = 'none';

        const datePara = document.createElement('p');
        datePara.textContent = meetup.date;
        contentDiv.appendChild(datePara);

        const locationPara = document.createElement('p');
        locationPara.textContent = meetup.location;
        contentDiv.appendChild(locationPara);

        const speakersList = document.createElement('ul');
        meetup.speakers.forEach(speaker => {
            const speakerItem = document.createElement('li');

            const talkTitle = document.createElement('h4');
            talkTitle.textContent = speaker.talkTitle;
            speakerItem.appendChild(talkTitle);

            const speakerName = document.createTextNode(speaker.name + ' - ');
            speakerItem.appendChild(speakerName);

            const linkedinAnchor = document.createElement('a');
            linkedinAnchor.href = speaker.linkedin;
            linkedinAnchor.target = '_blank';

            const linkedinIcon = document.createElement('i');
            linkedinIcon.className = 'fab fa-linkedin linkedin-icon';
            linkedinAnchor.appendChild(linkedinIcon);

            speakerItem.appendChild(linkedinAnchor);
            speakersList.appendChild(speakerItem);
        });

        contentDiv.appendChild(speakersList);

        meetupCard.appendChild(titleDiv);
        meetupCard.appendChild(contentDiv);
        pastMeetupsContainer.appendChild(meetupCard);
    });
}

function toggleMeetupDetails(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
