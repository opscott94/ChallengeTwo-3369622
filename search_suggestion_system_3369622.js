class SearchSuggestionSystem {
    constructor(products) {
        // Sort the products lexicographically once during initialization
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const results = [];
        let prefix = '';

        for (let i = 0; i < searchWord.length; i++) {
            prefix += searchWord[i];
            const suggestions = [];

            for (let product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                    if (suggestions.length === 3) break; // Only take top 3
                }
            }

            results.push(suggestions);
        }

        return results;
    }
}
