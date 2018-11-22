let client_id = process.env.CLIENT_ID;
let client_secret = process.env.CLIENT_SECRET;

let raw_token = `${client_id}:${client_secret}`;
console.log(raw_token);

let tokenBuffer = Buffer.from(raw_token, 'ascii');
let token = tokenBuffer.toString('base64');

console.log(token);




