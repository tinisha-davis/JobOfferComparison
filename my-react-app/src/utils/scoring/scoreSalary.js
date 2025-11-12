export function scoreSalary(data) {
    const { base } = data;

    // Normalize a salary between $50k (min) and $200k (max) to a score from 0 to 10
    const min = 50000;
    const max = 200000; 

    const normalized = Math.min(1, Math.max(0, (base - min) / (max - min)));

    // Convert to 0-10 scale
    return normalized * 10;
}