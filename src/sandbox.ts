class Invoice {

    constructor(
        private client: string,
        private details: string,
        private amount: number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }


}

const invOne = new Invoice('mario', 'work on the website', 9100);

const invoices: Invoice[] = [];

invoices.push(invOne);

invoices.forEach(inv => {
    console.log(inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});