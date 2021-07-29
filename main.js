// Grabbing HTML Elements
const input = document.querySelector("input")
const button = document.querySelector("button")
const countryDiv = document.querySelector(".country-data")

// Add an event listener to our button
button.addEventListener("click", () => {
    // Fetch our data
    fetch(`https://restcountries.eu/rest/v2/name/canada
    `)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const countryData = data[0]
            console.log(countryData)
        })
})