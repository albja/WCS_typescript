import  assert  from  'assert';

class BankCustomer {
    private name: string;
    private pin: string;
    constructor(name: string , pin: string) {

        this.name = name;
        this.pin = pin
    }
    getName(): string {
        return this.name;
    }
    verifyPinInput(pin: string): boolean  {
        return this.pin === pin  
    }
    
}



// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

