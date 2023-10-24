const salary = 4000;
const lodging = 'apartment';
const size = 'large';


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
};
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

/**
 * VERY IMPORTANT! change dot notation to square brackets for numbers
 */
const taxAsDecimal = parseInt(tax[913]) / 100; //changed tax an integer using ParseInt
const startingAfterTax = salary - salary * taxAsDecimal; // fixed calculation
const type = `${lodging} - ${size}` ; // Interpolation so that variable corresponds to the object
const balance = expenses.transport - expenses.food - rent[type]; // used dot notation and then square brackets for rent
 

console.log(balance.toFixed(2));