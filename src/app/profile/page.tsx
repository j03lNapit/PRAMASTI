import { Metadata } from 'next';
import NextImage from 'next/image';
import * as React from 'react';

import Background3 from '@/components/backgrounds/background3';
import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function Profile() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={false}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen'>
        <Background3 />

        <div className='z-10 flex w-screen flex-row items-center justify-center gap-24'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col items-center justify-center gap-2 text-center text-orange-600'>
              <h1 className='uppercase'>Name</h1>
              <h2>5024221085</h2>
              <h2 className='uppercase'>Lorem Ipsum</h2>
            </div>
            <Button
              type='submit'
              className='w-fit rounded-xl  border  border-white bg-black px-6 text-yellow-600'
            >
              Log Out
            </Button>
          </div>
          {/* <div className='flex flex-row gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <NextImage
                src='/images/profile/square.png'
                width={29}
                height={28}
                alt='square'
                className='h-auto w-auto'
              />
              <h3>085712341234</h3>
            </div>

            <span className='bg-lightGrey-600 h-16 w-1 rounded-full'></span>

            <div className='flex flex-row items-center gap-2'>
              <NextImage
                src='/images/profile/message.png'
                width={33}
                height={28}
                alt='message'
                className='h-auto w-auto'
              />
              <h3>email@gmail.com</h3>
            </div>
          </div> */}

          <span className='bg-lightGrey-600 h-[60%] w-2  rounded-full'></span>
          <NextImage
            src='/images/profile/photo.jpeg'
            width={382}
            height={439}
            alt='people'
            className='h-[40%] w-auto'
          />
        </div>
      </section>
    </MainLayout>
  );
}
