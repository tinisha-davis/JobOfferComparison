class JobOffer {
    constructor(title, benefits, equity, growth, salary, workLifeBalance) {
        this.title = title;
        this.benefits = new Benefits(benefits);
        this.equity = new Equity(equity);
        this.growth = new Growth(growth);
        this.salary = new Salary(salary);
        this.workLifeBalance = new WorkLifeBalance(workLifeBalance);
    }

    getBenefits() {
        return this.benefits;
    }

    getSalary() {
        return this.salary;
    }

    benefitsScore() {
        this.benefits.scoreBenefits();
    }

    salaryScore() {
        this.salary.scoreSalary();
    }
}