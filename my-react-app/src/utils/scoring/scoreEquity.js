export function scoreEquity(data) {
    // Export equity related fields from job offer
    const { estimatedValue, vestingYears } = data;

    // Normalize value: $0 - $100k = 0 - 1
    const normalizedValue = Math.min(1, estimatedValue / 100000);

    // Vesting is basically when you can access the equity,  so longer than 4 years reduces score
    const vestingScore = vestingYears > 4 ? 0.8 : 1;

    // Convert to a 0-10 scale
    const score = normalizedValue * 10 * vestingScore;

    return Math.min(score, 10);
}