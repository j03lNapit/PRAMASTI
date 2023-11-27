import { Metadata } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function BuatPengumuman() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Buat Pengumuman'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto flex w-screen flex-col gap-4 rounded-3xl border border-orange-600 p-6'>
            <div className=' flex w-full flex-col gap-1.5'>
              <h3>Judul</h3>
              <input
                type='text'
                name='judul-pengumuman'
                id='judul-pengumuman'
                className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                placeholder='Masukkan judul pengumuman...'
              />
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-1.5'>
                <h3>Deskripsi</h3>
                <textarea
                  placeholder='Masukkan deskripsi pengumuman...'
                  id='deskripsi'
                  rows={16}
                  className='rounded-3xl border border-orange-600 bg-transparent placeholder:text-orange-600 placeholder:opacity-60 focus:border-2 focus:border-orange-600'
                ></textarea>
              </div>

              <div className='flex justify-end'>
                <Button
                  type='submit'
                  className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
                >
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
