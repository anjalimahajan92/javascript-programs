let sbiBank = {
   bankName: "State Bank of India",
   location: "Pune",
   accountNo: "5258987788",
   ifsc: "SBIN050809",
   interestRate: 10.55,
   bankDetails: function () {
      console.log(`BankName is ${this.bankName}||Location is:${this.location}||Account number ${this.accountNo}||Ifsc ${this.ifsc}||InterestRate ${this.interestRate}`)
   }


}
sbiBank.bankDetails();


let axisBank = {
   bankName: "axis Bank of India",
   location: "Mumbai",
   accountNo: "252255987788",
   ifsc: "AXIS050809",
   interestRate: 9.55,
   axisDetail: function () {
      console.log(`Bank name is ${this.bankName}||Location is ${this.location}||account no :${this.accountNo}||IFSC is ${this.ifsc}||Interest Rate is:${this.interestRate}`);


   }
}
axisBank.axisDetail();



let hdfcBank = {
   bankName: "hdfc Bank of India",
   location: "Mumbai",
   accountNo: "2585212987788",
   ifsc: "hdfc050809",
   interestRate: 8.55,
   hdfcDetail: function () {
      console.log(`Bank name is ${this.bankName}||Location is ${this.location}||account no :${this.accountNo}||IFSC is ${this.ifsc}||Interest Rate is:${this.interestRate}`);

   }
}
hdfcBank.hdfcDetail();


let yesBank = {
   bankName: "yes Bank of India",
   location: "pune",
   accountNo: "285212987788",
   ifsc: "yesc050809",
   interestRate: 8.55,
   yesDetail: function () {
      console.log(`Bank name is ${this.bankName}||Location is ${this.location}||account no :${this.accountNo}||IFSC is ${this.ifsc}||Interest Rate is:${this.interestRate}`);


   }
}
yesBank.yesDetail();