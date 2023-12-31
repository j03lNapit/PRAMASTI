import { Metadata } from 'next';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function TambahNilai() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Tambah Nilai Praktikan'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto w-screen rounded-3xl border border-orange-600 p-6'>
            <div className=' flex w-full flex-col gap-3'>
              <div className='flex flex-col gap-1.5'>
                <h3>Nama</h3>
                <input
                  type='text'
                  name='Nama'
                  id='Nama'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Nama Praktikan'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3>NRP</h3>
                <input
                  type='number'
                  name='NRP'
                  id='NRP'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='NRP'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <h3>Nilai</h3>
              </div>
              <div className='flex flex-col gap-1.5'>
                <h3>Nilai Praktikum</h3>
                <input
                  type='number'
                  name='nilai_modul'
                  id='nilai_modul'
                  className='w-full rounded-full border border-orange-600 bg-transparent font-bold placeholder:text-orange-600 placeholder:opacity-60 focus:border-none focus:outline-none focus:ring-2 focus:ring-orange-600 '
                  placeholder='Masukkan nilai praktikum...'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3>Modul</h3>

                <div className='flex flex-row gap-3'>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    1
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    2
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    3
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    4
                  </button>
                  <button
                    className='w-auto rounded-xl bg-black px-8 py-2 font-bold hover:bg-slate-600 focus:bg-slate-600'
                    type='button'
                  >
                    5
                  </button>
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
      </section>
    </MainLayout>
  );
  }