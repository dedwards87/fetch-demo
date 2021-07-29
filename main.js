// Grabbing HTML Elements
const input = document.querySelector("input")
const button = document.querySelector("button")
const countryDiv = document.querySelector(".country-div")

// Add an event listener to our button
button.addEventListener("click", () => {
    // Grab the value
    const country = input.value.trim()
    // Fetch our data
    fetch(`https://restcountries.eu/rest/v2/name/${country}
    `)
        .then(response => response.json())
        .then((data) => {
            const countryData = data[0]
            console.log(countryData)

            const image = document.createElement("img")
            image.scr = countryData.flag
            image.classList.add("flag")
            document.body.append(image)
        })
})