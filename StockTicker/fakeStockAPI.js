const now = new Date().toLocaleTimeString('en-GB');

export function getStockData(){
  return {
    name: 'QTechAI',
    sym: 'QTA',
    price: (Math.random() * 3).toFixed(2),
    time : now
  };
}