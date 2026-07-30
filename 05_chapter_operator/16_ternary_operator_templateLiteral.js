let responseTime = 850;
let sla = 1000;

let slaStatus = responseTime <= sla ? "within SLA" : "SLA breached";

console.log(`Response: ${responseTime}ms - ${slaStatus}`);
console.log(`What is the SLA time? - ${sla}`);