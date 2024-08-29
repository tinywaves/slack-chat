'use client';

import { useState } from 'react';
import type { SignInFlow } from '../types';
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';

export default function AuthPage() {
  const [state] = useState<SignInFlow>('sign-in');

  return (
    <div className="h-full flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === 'sign-in' ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
}
