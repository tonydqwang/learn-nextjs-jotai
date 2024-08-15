import { atom } from 'jotai';

export const authAtom = atom({
  uid: '',
  isLoggedIn: false,
});