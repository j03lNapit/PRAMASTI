import { Metadata } from 'next';
import * as React from 'react';

import Background2 from '@/components/backgrounds/background2';
import Card4 from '@/components/cards/card4';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function Home() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={true}
      withRightNav={true}
      withBackButton={false}
      title='PRAMASTI'
    >
      <section className='bg-darkGrey-800 relative h-full w-screen'>
        <Background2 />

        <div className='mx-20 flex flex-col gap-8 pb-16 pt-36'>
          <Card4 />
          <Card4 className='flex-row-reverse text-end' />
          <Card4 />
        </div>
      </section>
    </MainLayout>
  );
}