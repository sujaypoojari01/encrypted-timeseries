# encrypted-timeseries


## Emitter service
This service should generate a periodic data stream of encrypted messages where the number of encrypted strings can be anywhere between 49-499 so randomise this to good effect.

Each message should contain an object with 3 keys: `name, origin, destination` and a `secret_key` which is a hash of these 3 fields. randomize the values for `name, origin, destination` from a constant list provided in `data.json` file

The emitter service should connect to the listener service over sockets and periodically send out a new message stream every 10s

## Listener Service

The Listener service will allow an emitter to connect to it via sockets. On receipt of the encrypted message stream, the listener should decrypt this string and retrieve the data in the payload. Validate the objects using the secret_key to ensure data integrity. If the data integrity of any object is compromised then discard that operation and move on to the next in the queue.

## Frontend

All the valid data saved should be displayed in a real-time manner on a small frontend app along with the success rate for data transmission and decoding



### How to Run


#### Server:
npm install
node .\server.js

#### Client: 
cd client 
npm install
npm run start

