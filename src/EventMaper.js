const EventMaper = {
    mapEvents (events) {

        events.map(e => {
            if(e.tickets) {
                e.buttonText = 'Book Event'
                e.buttonIcon = 'book'
            } else {
                e.tickets = 'N/A'
                e.buttonText = 'Sold out'
                e.buttonIcon = 'sold'
            }
        })
        return events
    }
}
export default EventMaper