"use client";
import React, { ReactNode } from "react";
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './redux/store/store';
import { HeroUIProvider } from "@heroui/react";
// import { UserProvider } from '@/lib/context/UserProvider';

interface Props {
  children: ReactNode;
}

function Provider({ children }: Props) {
  return (
    <HeroUIProvider>
      {/* <ReduxProvider store={store}> */}
      {/* <UserProvider> */}
      {children}
      {/* </UserProvider> */}
      {/* </ReduxProvider > */}
    </HeroUIProvider>
  );
}

export default Provider;
