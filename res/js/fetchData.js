async function fetchData() {
    try {
        const response = await fetch('data/meetups.json');
        const data = await response.json();
        
        const allMeetups = data.meetups; // Asumiendo que todos los meetups están en data.meetups
        const currentTime = new Date().getTime();

        const upcomingMeetup = allMeetups.filter(meetup => {
            const formattedDate = convertDate(meetup.date);
            const meetupTime = new Date(formattedDate).getTime();
            return meetupTime > currentTime;
        });

        const pastMeetups = allMeetups.filter(meetup => {
            const formattedDate = convertDate(meetup.date);
            const meetupTime = new Date(formattedDate).getTime();
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

function convertDate(dateStr) {
    // Extrae los componentes de la fecha
    const [dayName, day, monthName, year] = dateStr.split(' ');
    // Convierte el nombre del mes a un número (0 a 11)
    const month = new Date(`${monthName} 1`).getMonth();
    // Retorna la fecha en un formato que JavaScript puede entender
    return `${year}-${month + 1}-${day}`;
}

window.onload = fetchData;
