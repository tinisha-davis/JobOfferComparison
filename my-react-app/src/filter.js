export function jobFilter(array, filter) {
    var newArr = [];

    for (let i = 0; i < array.length; i++) {
        const job = array[i];

        if (filterJob(job, filter)){
            newArr.push(job);
        }
    }

    return newArr;
}

function filterJob(job, filter) {
    if (filter.title && job.title !== filter.title) return false;
    if (filter.salaryMin && job.salary < filter.salaryMin) return false;
    if (filter.salaryMax && job.salary > filter.salaryMax) return false;
    if (filter.bonusMin && job.bonus < filter.bonusMin) return false;
    if (filter.bonusMax && job.bonus > filter.bonusMax) return false;
    if (filter.equityMin && job.equity < filter.equityMin) return false;
    if (filter.equityMax && job.equity > filter.equityMax) return false;
    return true;
}