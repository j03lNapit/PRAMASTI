import { Metadata } from 'next';
import NextImage from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function RegisterPage() {
  return (
    <MainLayout
      withNavbar={false}
      withTitle={false}
      withDropdown={false}
      withRightNav={false}
      withBackButton={false}
      className='overflow-y-auto'
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen items-center justify-center overflow-y-auto'>
        <NextImage
          src='/images/signup/top_left_decor.png'
          width={146}
          height={150}
          alt='top left decoration'
          className='absolute left-20 top-20 h-[20%] w-auto'
        />

        <NextImage
          src='/images/signup/bottom_left_decor.png'
          width={375}
          height={386}
          alt='bottom left decoration'
          className='absolute bottom-0 left-0 h-[20%] w-auto'
        />

        <NextImage
          src='/images/signup/top_right_decor.png'
          width={236}
          height={243}
          alt='top right decoration'
          className='absolute right-40 top-0 h-[15%] w-auto'
        />

        <NextImage
          src='/images/signup/mid_right_decor.png'
          width={249}
          height={367}
          alt='mid right decoration'
          className='absolute inset-y-0 right-0 top-24 h-[55%] w-auto'
        />

        <div className='absolute z-20 flex h-full w-[560px] flex-col items-center justify-center'>
          <h1 className='text-center text-orange-600'>SIGN UP</h1>
          <form
            className='flex w-full flex-col items-center justify-center gap-4'
            action='#'
          >
            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/people.png'
                width={38}
                height={38}
                alt='people'
                className='h-[55%] w-auto'
              />

              <input
                type='text'
                name='name'
                id='name'
                className='bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100 pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
                placeholder='Nama'
              />
            </div>

            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/2people.png'
                width={40}
                height={35}
                alt='people'
                className='h-[55%] w-auto'
              />

              <input
                type='number'
                name='nrp'
                id='nrp'
                className='bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100 pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
                placeholder='NRP'
              />
            </div>

            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/bucket.png'
                width={37}
                height={37}
                alt='bucket'
                className='h-[55%] w-auto'
              />

              <input
                type='text'
                name='departemen'
                id='departemen'
                className='bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100 pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
                placeholder='Departemen'
              />
            </div>

            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/square.png'
                width={35}
                height={35}
                alt='square'
                className='h-[55%] w-auto'
              />
              <input
                type='number'
                name='whatsapp'
                id='whatsapp'
                className='bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100 pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
                placeholder='Whatsapp'
              />
            </div>

            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/message.png'
                width={34}
                height={35}
                alt='message'
                className='h-[55%] w-auto'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className=' bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100  pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
              />
            </div>

            <div className='flex w-full flex-row items-center justify-center gap-4'>
              <NextImage
                src='/images/signup/locked.png'
                width={33}
                height={38}
                alt='locked'
                className='h-[55%] w-auto'
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className=' bg-darkGrey-800 w-full border-x-0 border-b-2 border-t-0 border-yellow-100  pl-0 pr-4 pt-4 font-semibold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60 focus:border-yellow-600 focus:ring-0'
              />
            </div>

            <div className='flex w-full items-end justify-end'>
              <Button
                type='submit'
                className=' w-fit items-center justify-end rounded-2xl border-none bg-black px-6 py-4 text-center font-bold text-yellow-600'
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
