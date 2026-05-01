import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client.setProject("69f331ee002650617d15")
.setEndpoint("https://cloud.appwrite.io/v1")
.setPlatform("dev.absolom.sheflie");


export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
