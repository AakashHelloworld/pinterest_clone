
import { Client, Databases, ID, Storage, Query } from "appwrite";

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65475131669281e01d2b')
;


const databases = new Databases(client);
    
const storage = new Storage(client);

const createDocument = async (file) => {
    try{
        console.log(file)
    const promise = databases.createDocument('654db535ef091e9a5c3b', '654db54ce147f9d15a04', ID.unique(), file);
    const response = await promise
    return response
    }catch{
        console.log("error") 
    }
}


const getDocuments = async () => {
    try{
        const promise = databases.listDocuments('654db535ef091e9a5c3b', '654db54ce147f9d15a04');
        const response = await promise;
        const AllNeededData = []
        const data =  response?.documents.map(async (data) => {
            const promise = storage.getFilePreview('654a581fab6820b4531e', data.imageId);
            const temp = {
               $id:data.$id,
               imgUrl : await promise
            }
                AllNeededData.push(temp)
            data.imageId = await promise;
            return data;
        });
        return AllNeededData
    } catch {
        console.log("error");
    }
}


const getDocument = async (id) => {
    try{
        const promise = databases.getDocument('654db535ef091e9a5c3b', '654db54ce147f9d15a04', id);
        const response = await promise
        console.log(response)
        const promiseforImage = storage.getFilePreview('654a581fab6820b4531e', response.imageId);
        const data ={
            title: response.title,
            description: response.description,
            imageId: await promiseforImage,
            id:response.$id  ,
            userId: response.userId,
            userName: response.userName
        }
        console.log(data)
        return data
    }catch{
        console.log("error") 
    }
}



const getUserDocuments = async (id) => {
    
    try{
        console.log(id)
        const promise = databases.listDocuments('654db535ef091e9a5c3b', '654db54ce147f9d15a04',     
        [
            Query.equal("userId",id)
        ]);
        const response = await promise
        const AllNeededData = []
        const data =  response?.documents.map(async (data) => {
            const promise = storage.getFilePreview('654a581fab6820b4531e', data.imageId);
            const temp = {
               $id:data.$id,
               imgUrl : await promise
            }
            console.log(temp)
            AllNeededData.push(temp)
            data.imageId = await promise;
            return data;
        })

        return AllNeededData
    }catch{
        console.log("error")
    }
}



export {createDocument, getDocuments ,getDocument, getUserDocuments}
