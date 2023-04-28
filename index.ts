import Banking from "./namespace/banking";

const bank = Banking.Bank

const b1 = new bank("BOI","Hyderabad","Upaal Gandhi")
b1.displayBankName()

const customer = Banking.NewCustomer
const c1 = new customer(135325,"arjun maloth",1500)
const newBalance = c1.withdraw(1000)
console.log("new Balance", newBalance)