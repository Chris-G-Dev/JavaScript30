const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(raw => raw.json())
  .then(data => cities.push(...data));
  // When pushing data to our const variable, use spread operator to keep from pushing an array to the array

function findMatches (wordToMatch, cities) {
  return cities.filter(place => {
    // figure out if city or state matches what was searched
    // can't place a regex in our match since it's going to be a variable value. So we create a RegExp, pass it 'wordToMatch', then set parameter of 'gi' - global/insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

function displayMatches () {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

