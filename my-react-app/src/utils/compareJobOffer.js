function compareJobOffer(offer1, offer2) {
    let results = []
    
    if (!offer1.getBenefits() == null && !offer2.getBenefits() == null) {
        if(offer1.benefitsScore() === offer2.benefitsScore()) {
            results.push({benefit : "equal"});
        } else if (offer1.benefitsScore() >= offer2.benefitsScore()) {
            results.push({benefit : offer1.title});
        } else if (offer1.benefitsScore() <= offer2.benefitsScore()) {
            results.push({benefit : offer2.title});
        }
    }

    if (!offer1.getSalary() == null && !offer2.getSalary() == null) {
        if(offer1.salaryScore() === offer2.salaryScore()) {
            results.push({salary : "equal"});
        } else if (offer1.salaryScore() >= offer2.salaryScore()) {
            results.push({salary : offer1.title});
        } else if (offer1.salaryScore() <= offer2.salaryScore()) {
            results.push({salary : offer2.title});
        }
    }

    return results;
}