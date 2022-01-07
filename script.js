// Define current hour
const span = document.getElementById("date");

// Function that return the current hour 
const getDate = () => {
  // Generate a new date
  const date = new Date();
  // Get day, month, hour and minute using array destructuring
  let [day, month, hour, minute] = [date.getDate(), date.getMonth(), date.getHours(), date.getMinutes()]

  // Switch using object literals
  function getMonth(month) {
    const allMonths = {
      '0': 'Enero',
      '1': 'Febrero',
      '2': 'Marzo',
      '3': 'Abril',
      '4': 'Mayo',
      '5': 'Junio',
      '6': 'Julio',
      '7': 'Agosto',
      '8': 'Septiembre',
      '9': 'Octubre',
      '10': 'Noviembre',
      '11': 'Diciembre',
      'default': 'Month was not found'
    };
    return (allMonths[month] || allMonths['default']);
  }
  month = getMonth(month)
  return `${day} ${month} ${hour}:${minute}`
}

// Concatenate text and hour
const allDate = getDate();

// Insert string to span
span.innerHTML += allDate;