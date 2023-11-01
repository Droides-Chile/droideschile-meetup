async function fetchData() {
    try {
        const response = await fetch('data/meetups.json');
        const data = await response.json();
        displayUpcomingMeetup(data.upcomingMeetup);
        displayPastMeetups(data.pastMeetups);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.onload = fetchData;