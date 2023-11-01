async function fetchData() {
    try {
        const response = await fetch('data/meetups.json');
        const data = await response.json();
        
        const allMeetups = data.meetups; // Asumiendo que todos los meetups están en data.meetups
        const currentTime = new Date().getTime();

        const upcomingMeetup = allMeetups.filter(meetup => {
            const meetupTime = new Date(meetup.date).getTime();
            return meetupTime > currentTime;
        });

        const pastMeetups = allMeetups.filter(meetup => {
            const meetupTime = new Date(meetup.date).getTime();
            return meetupTime <= currentTime;
        });

        // Muestra el próximo meetup si existe
        if (upcomingMeetup.length > 0) {
            displayUpcomingMeetup(upcomingMeetup[0]);
        }

        // Muestra los meetups pasados
        displayPastMeetups(pastMeetups);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.onload = fetchData;
