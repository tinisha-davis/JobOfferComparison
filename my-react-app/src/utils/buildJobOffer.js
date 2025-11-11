import {
  scoreBenefits,
  scoreEquity,
  scoreGrowth,
  scoreSalary,
  scoreWorkLife
} from 'utils/scoring';

function buildJobOffer(rawInput, dataFields) {
    const jobOffer = {
        salary: { score: 0, details: {} },
        benefits: { score: 0, details: {} },
        growth: { score: 0, details: {} },
        equity: { score: 0, details: {} },
        worklife: { score: 0, details: {} },
        meta: { title: "" },
    };

      dataFields.forEach(({ section, key }) => {
        const value = rawInput[key];
        if (section && jobOffer[section]) {
        jobOffer[section].details[key] = value;
        } else if (key === "title") {
        jobOffer.meta.title = value;
        }
    });

    jobOffer.salary.score = scoreSalary(jobOffer.salary.details);
    jobOffer.benefits.score = scoreBenefits(jobOffer.benefits.details);
    jobOffer.growth.score = scoreGrowth(jobOffer.growth.details);
    jobOffer.equity.score = scoreEquity(jobOffer.equity.details);
    jobOffer.workLife.score = scoreWorkLife(jobOffer.worklife.details);

    return jobOffer;
}