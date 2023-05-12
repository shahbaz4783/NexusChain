// Set the maximum number of NFTs to 100,000
const maxNFTs = 100000;

// Get the number of NFTs claimed
const numClaimed = 5000; // Replace with your actual number of claimed NFTs

// Calculate the percentage of NFTs claimed
const percentClaimed = (numClaimed / maxNFTs) * 100;

// Update the width of the progress bar element
const progressBar = document.querySelector('.progress-bar');
progressBar.style.width = percentClaimed + '%';

// Update the aria-valuenow attribute to reflect the percentage of NFTs claimed
progressBar.setAttribute('aria-valuenow', percentClaimed);
