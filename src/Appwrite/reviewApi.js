
import { Client, Databases, ID, Storage,Query } from "appwrite";

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65475131669281e01d2b')
;


const databases = new Databases(client);
    
const createReview = async (file) => {
    try{
        console.log(file)
    const promise = databases.createDocument('654db535ef091e9a5c3b', '654f1c908a8c5bfc6944', ID.unique(), file);
    const response = await promise
    return response
    }catch{
        console.log("error") 
    }
}

 const getReview = async (id) => {
    try{
        const promise = databases.listDocuments('654db535ef091e9a5c3b', '654f1c908a8c5bfc6944',     
        [
            Query.equal("imageId",id)
        ] );
        const response = await promise
        return response
    }catch{
        console.log("error")
    }
 }


export {createReview,getReview }
