import { Metadata } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function TambahAsisten() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Tambah Asisten'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto w-screen rounded-3xl border border-orange-600 p-6'>
            <div className=' flex w-full flex-col gap-3'>
              <div className='flex flex-col gap-1.5'>
                <h3>NRP</h3>
                <input
                  type='number'
                  name='search'
                  id='search'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='5024xxxxxx'
                />
              </div>
              <div className='flex justify-end'>
                <Button
                  type='submit'
                  className='flex w-fit  rounded-xl border-none bg-black px-6 text-orange-600'
                >
                  Tambah
                </Button>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-1.5'>
                <h3>Asisten</h3>
                <div className='flex flex-col gap-4 rounded-3xl border border-orange-600 p-6 text-center'>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Desiana Fitria Nurjana</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Rafi Arya Abdul Aziz</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Desiana Fitria Nurjana</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Rafi Arya Abdul Aziz</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Faisal Thariq Arifin</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Desiana Fitria Nurjana</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                  <div className='grid grid-cols-2 items-center'>
                    <h4 className='text-center'>Rafi Arya Abdul Aziz</h4>
                    <h4 className='text-center'>502420185</h4>
                  </div>
                </div>
              </div>

              <div className='flex justify-end'>
                <Button
                  type='submit'
                  className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
                >
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
