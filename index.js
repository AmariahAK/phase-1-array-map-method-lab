// Function to convert tutorial names to title case
function titleCased() {
  return tutorials.map(title => {
    // Splitting the title into individual words
    const words = title.split(' ');
    
    // Capitalizing the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Joining the capitalized words back into a single string
    return capitalizedWords.join(' ');
  });
}

// Sample data
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Test the function
console.log(titleCased());
