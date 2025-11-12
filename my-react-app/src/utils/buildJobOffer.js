function buildJobOffer(arr) {
  if (!arr.contains(title)) {
    return null;
  }

  const title = arr.title;
  let benefits = null;
  let equity = null;
  let growth = null;
  let salary = null;
  let workLifeBalance = null;

  if (arr.contains(benefits)) {
    benefits = arr.benefits;
  }

  if (arr.contains(equity)) {
    equity = arr.equity;
  }

  if (arr.contains(growth)) {
    growth = arr.growth;
  }

  if (arr.contains(salary)) {
    salary = arr.salary;
  }

  if (arr.contains(workLifeBalance)) {
    workLifeBalance = arr.workLifeBalance;
  }

  const jobOffer = new JobOffer(title, benefits, equity, growth, salary, workLifeBalance);
  return jobOffer;
}