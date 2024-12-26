function objectEqual(a, b) {
    // Get the keys of both objects
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // Check if number of keys is the same
    if (aKeys.length !== bKeys.length) {
        return false;
    }

    // Check if all keys and values are identical
    for (let key of aKeys) {
        // Check if the key exists in b
        if (!b.hasOwnProperty(key)) {
            return false;
        }

        // Check if the values are equal
        if (a[key] !== b[key]) {
            return false;
        }
    }

    // If all checks pass, objects are equal
    return true;
}
