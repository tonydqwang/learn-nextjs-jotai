// ./components/providers.js
'use client'

import { Provider, createStore } from 'jotai'
import { authAtom } from '../store/auth';

export const Providers = ({ children }: Readonly<{ children: React.ReactNode; }> ) => {
  const store = createStore();
  store.set(authAtom, { uid: 'unauthenticated', isLoggedIn: false });
  store.sub(authAtom, () => {
    console.log('authAtom value is changed to', store.get(authAtom))
  })

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}