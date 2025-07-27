import React from 'react';

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <main className="flex min-h-svh w-full max-w-6xl flex-col gap-4 p-8 pt-16 md:p-18 border-x border-black dark:border-black">
        {children}
      </main>
    </div>
  );
}
