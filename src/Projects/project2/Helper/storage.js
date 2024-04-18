const LocalStorage = {
    // Get data from localStorage by key
    Get: (key) => {
        try {
            // Attempt to retrieve stored value
            const storedValue = localStorage.getItem(key);
            // If value exists, parse and return it
            return storedValue ? JSON.parse(storedValue) : null;
        } catch (error) {
            // If an error occurs during parsing, log it and return null
            console.error('Error retrieving data from localStorage:', error);
            return null;
        }
    },

    // Set data to localStorage with given key
    Set: (key, value) => {
        try {
            // Stringify the value and store it
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // If an error occurs during stringifying, log it
            console.error('Error storing data to localStorage:', error);
        }
    }
};

export default LocalStorage;
