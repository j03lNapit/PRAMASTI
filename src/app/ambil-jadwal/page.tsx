import { Metadata } from 'next';
import * as React from 'react';

import Calendar from '@/components/Calendar';
import Card3 from '@/components/cards/card3';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function AmbilJadwalPage() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={false}
      title='Rangkaian Digital'
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen flex-col items-start justify-center '>
        <div className='mx-16 mb-12 mt-28 flex h-full w-screen flex-row gap-8'>
          <div className='flex h-fit w-[35%] flex-col items-start gap-6'>
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
          </div>

          <span className='bg-lightGrey-600 h-full w-2 rounded-full'></span>

          <Calendar />
        </div>
      </section>
    </MainLayout>
  );
}
