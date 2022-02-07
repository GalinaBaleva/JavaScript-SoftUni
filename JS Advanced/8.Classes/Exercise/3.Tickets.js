function tickets(describesOfTickets, sortParam) {
               class Ticket {
                              constructor(destination, price, status) {
                                             this.destination = destination;
                                             this.price = Number(price).toFixed(2);
                                             this.status = status;
                              }
               }
               let allTickets = [];

               for (let ticket of describesOfTickets) {
                              let [destination, price, status] = ticket.split('|');
                              let result = new Ticket(destination, price, status)
                              result.price = Number(result.price)
                              allTickets.push(result);
               };

               if (sortParam === 'destination') {
                             allTickets.sort((a, b) =>  a.destination.localeCompare(b.destination))
               } else if (sortParam === 'price') {
                             allTickets.sort((a, b) => a.price - b.price);
               } else {
                             allTickets.sort((a, b) =>  a.status.localeCompare(b.status) )
               }
               
               return allTickets;

}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');
