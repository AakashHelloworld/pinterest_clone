import { Client, Storage } from "appwrite";
import { ID } from "appwrite";
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65475131669281e01d2b');

const storage = new Storage(client);

const UploadImge = async(file) => {
    const promise = storage.createFile(
        '654a581fab6820b4531e',
        ID.unique(),
        file
    );
   const response = await promise
   console.log(response)
   return response
}

export {UploadImge}
