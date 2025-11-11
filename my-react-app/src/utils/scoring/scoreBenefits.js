export function scoreBenefits(data) {
    // Define how important each benefit is, total weight = 1
    const weights = { health: 0.4, '401k': 0.3, remote: 0.3};

    let score = 0;

    // Loop thru benefits, if the benefit is present multiply by the weight, if not multiply by 0
    for (const key in weights) {
        score += (data[key] ? 1 : 0) * weights[key];
    }

    // Convert to 0-10 scale
    return score * 10;
}