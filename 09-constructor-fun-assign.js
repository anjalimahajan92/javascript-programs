function Bank (bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

let yesBank =new Bank("yesBank", "pune", "YES32445", "3847");
console.log(`Bank Detail is :${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);



let sbiBank =new Bank("sbiBank", "savda", "SBIN3896", "4567");
console.log(`Bank Detail is :${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);

let mahbank =new  Bank("mahBank", "mumbai", "MAH8907", "0987");
console.log(`Bank Detail is :${mahbank.bankName},${mahbank.location},${mahbank.ifscCode},${mahbank.branchCode}`);

let axisBank =new Bank("axisBank", "pimpri", "AXIS6758", "3456");
console.log(`Bank Detail is :${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log("====open and close time of sbi bank============");

console.log(`SBI bank open At:${sbiBank.openTime},close At:${sbiBank.closeTime}`);
console.log(`========================Bank name and close time===============`);

console.log(`Bank name:${axisBank.bankName},close At:${axisBank.closeTime}`);
console.log(`======================Bank detail and open time=====================`);

console.log(`Bank name:${yesBank.bankName},and Branch code:${yesBank.branchCode},Open time is:${yesBank.openTime}`);
