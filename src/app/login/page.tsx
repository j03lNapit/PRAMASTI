import { Metadata } from 'next';
import NextImage from 'next/image';
import * as React from 'react';

import Background1 from '@/components/backgrounds/background1';
import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function LoginPage() {
  return (
    <MainLayout
      withNavbar={false}
      withTitle={false}
      withDropdown={false}
      withRightNav={false}
      withBackButton={false}
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen'>
        <Background1 />

        <div className='absolute inset-0 z-10 flex w-screen flex-col items-center justify-center gap-6'>
          <div className='flex flex-col text-center text-orange-600'>
            <h1 className=''>PRAMASTI</h1>
            <h2 className=''>Praktikum Manajemen Sistem</h2>
          </div>

          <div className='bg-lightGrey-400 flex max-w-fit flex-row items-center justify-center gap-8 rounded-full border-none px-20 py-10 shadow-[10px_20px_4px_0px_rgba(0,0,0,0.25)]'>
            <form action='#' className='flex h-full w-full flex-row gap-8'>
              <div className='flex h-full w-full flex-col gap-8'>
                <div className='bg-darkGrey-800 flex h-full flex-row items-center justify-center gap-2 rounded-2xl border border-gray-300 px-8 py-2 font-bold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60'>
                  <NextImage
                    src='/images/login/people.png'
                    width={38}
                    height={38}
                    alt='people'
                    className='h-[40%] w-auto'
                  />

                  <input
                    type='number'
                    name='nrp'
                    id='nrp'
                    className='border-none bg-transparent placeholder:text-orange-600 focus:border-none focus:outline-none focus:ring-0 '
                    placeholder='NRP'
                  />
                </div>

                <div className='bg-darkGrey-800 flex h-full w-full flex-row items-center justify-center gap-2 rounded-2xl border border-gray-300 px-8 py-2 font-bold text-yellow-600 placeholder:text-yellow-600 placeholder:opacity-60'>
                  <NextImage
                    src='/images/login/key.png'
                    width={38}
                    height={38}
                    alt='people'
                    className='h-[40%] w-auto'
                  />

                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='PASSWORD'
                    className='border-none bg-transparent placeholder:text-orange-600 focus:border-none focus:outline-none focus:ring-0 '
                  />
                </div>
              </div>

              <span className='bg-lightGrey-600 flex h-full w-8 rounded-full'></span>

              <div className='flex h-full w-full flex-col gap-8'>
                <ButtonLink
                  href='/sign-up'
                  className='bg-darkGrey-800 w-full items-center justify-center gap-4 rounded-2xl border-none px-2 py-4 text-center font-bold text-yellow-600'
                >
                  <NextImage
                    src='/images/login/bag.png'
                    width={38}
                    height={38}
                    alt='people'
                    className='h-[40%] w-auto'
                  />
                  SIGN UP
                </ButtonLink>
                {/* </div> */}

                <Button
                  type='submit'
                  className='bg-darkGrey-800 w-full items-center justify-center gap-4 rounded-2xl border-none px-2 py-4 text-center font-bold text-yellow-600'
                >
                  <NextImage
                    src='/images/login/arrow.png'
                    width={38}
                    height={38}
                    alt='people'
                    className='h-[40%] w-auto'
                  />
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
