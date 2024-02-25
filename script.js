function firstNonRepeatedChar(inputString) {
    // Create an empty object to store character frequencies
    const charFrequency = {};

    // Iterate through the input string to count character occurrences
    for (const char of inputString) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of inputString) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character found, return null
    return null;
}

// Example usage:
//console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
//console.log(firstNonRepeatedChar('aabbcc')); // Output: null
