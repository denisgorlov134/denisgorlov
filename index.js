const axios = require('axios');
const moment = require('moment');

// Function to fetch a random Chuck Norris joke
async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        throw new Error('Failed to fetch Chuck Norris joke');
    }
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to generate a random password
function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = {
    getRandomChuckNorrisJoke,
    calculateCircleArea,
    generateRandomPassword
};
