function calcualteItemPrice(distance, item) {
  // givens
  const serviceCharges = {
    Couch: 50,
    Char: 50,
    Lamp: 100,
    Bed: 20
  };
  const costPerSqFtPerMile = 2;

  // organize function arguments
  const { type } = item;
  const dimensions = [item.dimL, item.dimH, item.dimW];

  // use 2 largest dimensions to calculate area
  const area = dimensions
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, c) => a * c);

  // calculate charges
  const serviceCharge = serviceCharges[type];
  const distanceCharge = area * distance * costPerSqFtPerMile;
  const totalCharge = serviceCharge + distanceCharge;
  return totalCharge;
}

const item = { type: "Couch", dimL: 1, dimH: 1, dimW: 3 };
const distance = 10;

console.log(calcualteItemPrice(distance, item));
