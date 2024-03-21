URL = 'https://hp-api.onrender.com/api/characters';
async function getHarryPotterCharacters() {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching Harry Potter characters:', error);
    }
}

async function updateCharacterInfo() {
    try {
        const characters = await getHarryPotterCharacters();
        console.log(characters.length);

        const charactersWithImages = characters.filter(character => character.image !== '');
        console.log(charactersWithImages.length);

        if (characters) {
            console.log(characters[0].image);
            // Select two random characters
            const randomIndex1 = Math.floor(Math.random() * characters.length);
            console.log("Random randomIndex1:", randomCharacter1);

            let randomIndex2;
            do {
                randomIndex2 = Math.floor(Math.random() * characters.length);
            } while (randomIndex2 === randomIndex1); // Ensure randomIndex2 is different from randomIndex1

            const randomCharacter1 = characters[randomIndex1];
            const randomCharacter2 = characters[randomIndex2];
            console.log("Random Character 1:", randomCharacter1);
            console.log("Random Character 2:", randomCharacter2);

            const characterImageElements = document.querySelectorAll('.character-img');
            const characterNameElements = document.querySelectorAll('.character-name');

            // Update the first character's image and name
            characterImageElements[0].src = randomCharacter1.image;
            console.log("Random Character 1:", characterImageElements[0].src);

            characterNameElements[0].textContent = randomCharacter1.name;

            // Update the second character's image and name
            characterImageElements[1].src = randomCharacter2.image;
            console.log("Random Character 1:", characterImageElements[1].src);

            characterNameElements[1].textContent = randomCharacter2.name;
        }
    } catch (error) {
        console.error('Error updating character info:', error);
    }
}

// Call updateCharacterInfo to update the character info initially
updateCharacterInfo();


// function displayCharacters(characters) {
//     const charactersContainer = document.getElementById("characters");
//     characters.forEach(character => {
//         const characterElement = document.createElement("div");
//         const charImgElement = document.createElement("img");
//         charImgElement.src = 


        
//         charactersContainer.appendChild(characterElement);
//     });
// }