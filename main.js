// Grabbing HTML Elements
const input = document.querySelector("input")
const button = document.querySelector("button")
const countryDiv = document.querySelector(".country-data")

// Add an event listener to our button
button.addEventListener("click", () => {
    // Grab the value
    const country = input.value.trim()
    // Fetch our data
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then((data) => {
            const countryData = data[0]
            console.log(countryData)
            // name, flag, region, capital, population
            const image = document.createElement("img")
            image.src = countryData.flag
            image.classList.add("flag")
            countryDiv.append(image)
        })
})