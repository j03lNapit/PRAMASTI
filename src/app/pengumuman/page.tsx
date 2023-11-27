import { Metadata } from 'next';
import * as React from 'react';

import Card2 from '@/components/cards/card2';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function Pengumuman() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={true}
      withBackButton={true}
      title='Pengumuman'
    >
      <section className='bg-darkGrey-800 relative flex h-full w-screen'>
        <div className='mx-20 flex flex-col gap-6 pb-12 pt-28'>
          <Card2 />
          <Card2 className='text-end' />
          <Card2 />
          <Card2 className='text-end' />
          <Card2 />
          <Card2 className='text-end' />
        </div>
      </section>
    </MainLayout>
  );
}
