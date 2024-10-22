function calculateSimpleInterest(principal, tenure, rate) {
    const simpleInterest = (principal * tenure * rate) / 100;
    return simpleInterest;
}


const principalAmount = 5000;  
const tenure = 1;               
const rateOfInterest = 2.5;     

const si = calculateSimpleInterest(principalAmount, tenure, rateOfInterest);
console.log(`Simple Interest: Rs.${si}`);
