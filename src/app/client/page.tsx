'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientPage() {

  const { data: session } = useSession();

  if (!session) { 
    redirect('/api/auth/signin?callbackUrl=/client')
  }

  return (
    <div>
      ClientPage
    </div>
  )
}
