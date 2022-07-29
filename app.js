// https://calculator.swiftutors.com/manufacturing-cost-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const manufacturingCostRadio = document.getElementById('manufacturingCostRadio');
const directMaterialsCostRadio = document.getElementById('directMaterialsCostRadio');
const directLaborCostRadio = document.getElementById('directLaborCostRadio');
const manufactingOverheadRadio = document.getElementById('manufactingOverheadRadio');

let manufacturingCost;
let directMaterialsCost = v1;
let directLaborCost = v2;
let manufactingOverhead = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

manufacturingCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Direct Materials Cost';
  variable2.textContent = 'Direct Labor Cost';
  variable3.textContent = 'Manufacting Overhead';
  directMaterialsCost = v1;
  directLaborCost = v2;
  manufactingOverhead = v3;
  result.textContent = '';
});

directMaterialsCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Manufacturing Cost';
  variable2.textContent = 'Direct Labor Cost';
  variable3.textContent = 'Manufacting Overhead';
  manufacturingCost = v1;
  directLaborCost = v2;
  manufactingOverhead = v3;
  result.textContent = '';
});

directLaborCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Manufacturing Cost';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Manufacting Overhead';
  manufacturingCost = v1;
  directMaterialsCost = v2;
  manufactingOverhead = v3;
  result.textContent = '';
});

manufactingOverheadRadio.addEventListener('click', function() {
  variable1.textContent = 'Manufacturing Cost';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Direct Labor Cost';
  manufacturingCost = v1;
  directMaterialsCost = v2;
  directLaborCost = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(manufacturingCostRadio.checked)
    result.textContent = `Manufacturing Cost = ${computeManufacturingCost().toFixed(2)}`;

  else if(directMaterialsCostRadio.checked)
    result.textContent = `Direct Materials Cost = ${computeDirectMaterialsCost().toFixed(2)}`;

  else if(directLaborCostRadio.checked)
    result.textContent = `Direct Labor Cost = ${computeDirectLaborCost().toFixed(2)}`;

  else if(manufactingOverheadRadio.checked)
    result.textContent = `Manufacting Overhead = ${computeManufactingOverhead().toFixed(2)}`;
})

// calculation

function computeManufacturingCost() {
  return Number(directMaterialsCost.value) + Number(directLaborCost.value) + Number(manufactingOverhead.value);
}

function computeDirectMaterialsCost() {
  return Number(manufacturingCost.value) - Number(directLaborCost.value) - Number(manufactingOverhead.value);
}

function computeDirectLaborCost() {
  return Number(manufacturingCost.value) - Number(directMaterialsCost.value) - Number(manufactingOverhead.value);
}

function computeManufactingOverhead() {
  return Number(manufacturingCost.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value);
}