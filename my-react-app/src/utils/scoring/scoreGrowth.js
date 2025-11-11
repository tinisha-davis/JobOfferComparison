export function scoreGrowth(data) {
    // Extract growth related fields from the job offer
    const { promotionTrack, mentorship } = data;

    let score = 0;

    // Add 5 points if the job has a promotion path
    if (promotionTrack) {
        score += 5;
    }

    // Add 5 points if mentorship is available
    if (mentorship) {
        score += 5;
    }
    
    return score;
}