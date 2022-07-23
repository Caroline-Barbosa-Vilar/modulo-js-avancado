let orders = [
  {client: 'Gisele', type: 'purchase', amount: 56, assets: 'NFLX34'},
  {client: 'Rodrigo', type: 'purchase', amount: 70, assets: 'AAPL34'},
  {client: 'Carol', type: 'sell', amount: 30, assets: 'GOGL34'}
]

let amountOfOrders = orders.reduce((sumOfOrders, order) => sumOfOrders + order.amount
, 0);

console.log(amountOfOrders);
