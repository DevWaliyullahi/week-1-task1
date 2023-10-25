// function main() {}

// module.exports = { main }

document.addEventListener("DOMContentLoaded", () =>{
    const imgElement = document.querySelectorAll(".star");
    
    imgElement.forEach(imgElement => {
        imgElement.addEventListener("click", () => {
            const characterName = imgElement.getAttribute("data-character");
            const displayCharacter =imgElement.nextElementSibling;

            displayCharacter.textContent = characterName;

            const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;

            fetch(apiUrl).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error ('Failed to fetch data from the API');
                }
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const characterData = data.results[0];
                    displayCharacter.textContent =
                    `Name: ${characterData.name}
                    Height: ${characterData.height}
                    Gender: ${characterData.gender}`;
                } else {
                    displayCharacter.textContent = `Character not found in the API`;
                }
            })
            .catch(error => {
                console.error(error);
            });
        });
         });
        });
    