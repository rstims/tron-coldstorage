import { HttpClient } from "@tronprotocol/wallet-api";

const Client = new HttpClient();

console.log(Object.getOwnPropertyNames(Client));

export default Client;
