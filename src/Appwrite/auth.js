// https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/65475131669281e01d2b

import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('65475131669281e01d2b');           

const account = new Account(client);


const authwithGoogle = async () => {
  const response = account.createOAuth2Session('google', `http://localhost:3000`, `http://localhost:3000/pin/-HqcgTinxeE`)
  return response
}


const getUser = async (id) => {
  const response = await account.get(id);
  return response
}

export {account, authwithGoogle, getUser}