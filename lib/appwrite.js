import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client.setProject("69f331ee002650617d15").setPlatform("dev.absolom.sheflie");

export const account = new Account(client);
export const avatars = new Avatars(client);
