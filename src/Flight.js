import React from 'react';

const Flight = ({ flight }) => ( 
    <div>
        <p>{ flight.price } PLN</p>
        <div>
            <p>{ flight.outboundPath[0].airportFrom }</p>
            <p>{ flight.outboundPath[flight.outboundPath.length-1].airportTo }</p>
        </div>

        <div>
            <p>{ flight.inboundPath[0].airportFrom }</p>
            <p>{ flight.inboundPath[flight.inboundPath.length-1].airportTo }</p>
        </div>
    </div> );

export default Flight;