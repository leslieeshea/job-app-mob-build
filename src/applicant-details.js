const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);

const nameNode = document.getElementById('name');
const cityNode = document.getElementById('city');
const hoursNode = document.getElementById('hours');
const snoreTypeNode = document.getElementById('snore-types');
const salaryNode = document.getElementById('salary');

nameNode.textContent = applicant.name;
cityNode.textContent = applicant.city;
hoursNode.textContent = applicant.hours;

if(applicant.snoreType.length === 0) {
    snoreTypeNode.textContent = 'none';
}
else {
    for(let index = 0; index < applicant.snoreType.length - 1; index++) {
        snoreTypeNode.textContent += applicant.snoreType[index] + ', ';
    }
    // won't get comma on the last item in the array
    snoreTypeNode.textContent += applicant.snoreType[applicant.snoreType.length - 1];
}
salaryNode.textContent = applicant.salary;