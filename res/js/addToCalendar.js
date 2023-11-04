// Función para construir la URL de Google Calendar
function createGoogleCalendarUrl(event) {
    const format = 'YYYYMMDDTHHmmss';
    const startTime = moment.tz(event.date, 'America/Santiago').utc().format(format);
    const endTime = moment.tz(event.date, 'America/Santiago').add(2, 'hours').utc().format(format); // Asumiendo una duración de 2 horas

    return [
        'https://calendar.google.com/calendar/render',
        '?action=TEMPLATE',
        '&text=' + encodeURIComponent(event.title),
        '&dates=' + startTime + '/' + endTime,
        '&details=' + encodeURIComponent(event.description),
        '&location=' + encodeURIComponent(event.location),
        '&ctz=UTC'
    ].join('');
}

export function addGoogleCalendarButton(meetup, containerId) {
    const googleCalendarUrl = createGoogleCalendarUrl(meetup);
    const button = document.createElement('button');
    button.textContent = 'Agregar a Google Calendar';
    button.classList.add('add-to-calendar-btn'); // Asume que tienes estilos para esto
    button.onclick = function() {
        window.open(googleCalendarUrl, '_blank');
    };

    // Encuentra el contenedor y añade el botón
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(button);
    } else {
        console.error(`El contenedor con id "${containerId}" no se encontró en el DOM.`);
    }
}