import {User} from '../utils/Users.model';

const REPLACE_PREDICATE = 'XXXXX';
const BASE_URL = `https://gongfetest.firebaseio.com/${REPLACE_PREDICATE}.json`;

export async function getUserIdBySecret(secret:string):Promise<number>{
  const userIdResponse = await fetch(BASE_URL.replace(REPLACE_PREDICATE, `secrets/${secret}`));
  return await userIdResponse.json();
}

export async function getUsers():Promise<User[]>{
  const usersResponse = await fetch(BASE_URL.replace(REPLACE_PREDICATE, 'users'));
  return await usersResponse.json();
}
