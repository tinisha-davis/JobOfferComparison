class WorkLifeBalance {
    constructor(workLifeBalance) {
        this.workLifeBalance = workLifeBalance;
    }

    getWorkLifeBalance() {
        return this.workLifeBalance;
    }

    scoreWorkLife() {
    // Extract work life balance factors
    const { hoursPerWeek, remoteDays } = this.workLifeBalance;

    // Score based on hours where 40hrs per week is 5 points and 60 hours a week is 0 points
    const hoursScore = Math.max(0, (60 - hoursPerWeek) / 20) * 5;

    // Score based on remote days where 5 remote days per wekk is 5 points and 0 remote days per week is 0 points
    const remoteScore = Math.min(remoteDays / 5, 1) * 5;

    // Combine both for a 0-10 scale
    return hoursScore + remoteScore;
}
}