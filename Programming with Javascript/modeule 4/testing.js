// Import JEST before this test through terminal


function conString(stringA, stringB){
    return stringA + stringB;
}

expect(conString("abc", "def")).toBe("abcdef");    // Green
expect(conString(1, 2)).toBe(12); // Red