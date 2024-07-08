import { Client, Account, ID } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.joy.aora",
    projectId: "668ba782001c4e40a661",
    storageId: "668bb6df003c43382ff5",
    databaseId: "668bad3c00120af1da35",
    userCollectionId: "668bad550036eba2594d",
    videoCollectionId: "668bad950025fd290073",
};

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform) // YOUR application ID
    ;

const account = new Account(client);

// Register User
export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
