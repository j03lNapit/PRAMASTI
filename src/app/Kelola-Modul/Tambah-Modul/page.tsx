import { Metadata } from 'next';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';

;
import Button from '@/components/buttons/Button';
;
import Background3 from '@/components/backgrounds/background3';
import IconButton from '@/components/buttons/IconButton';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function KelolaModulPraktikum() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Modul Praktikum'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <Background3 />
        <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className='bg-darkGrey-800 container mx-auto flex w-screen flex-col gap-4 pl-3 pr-3'>
            <div className='flex flex-col gap-4 rounded-3xl border border-orange-600 p-6'>
              <div className=' flex w-full flex-col gap-1 left-2 right-2'>
                <div className='flex flex-row'>
                  <h3>P1: Logika Dasar </h3>
                </div>
              </div>
              </div>
              </div>
            <div className='flex justify-end pt-3 pr-3'>
              <IconButton
                type='submit'
                icon={FaPlus}
                className='w-24 rounded-xl  border-none bg-black text-orange-600'
              >
                Simpan
              </IconButton>
            </div>
        </div>  
        
        <div className='flex justify-end pr-2.5'>
              <Button
                type='submit'
                className='w-fit rounded-xl  border-none bg-black px-6 text-orange-600'
              >
                Simpan
              </Button>
            </div>
      </section>
      </section>
    </MainLayout>
  );
}