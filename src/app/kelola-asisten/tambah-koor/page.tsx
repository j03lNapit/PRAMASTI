import { Metadata } from 'next';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function KelolaAsisten() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Kelola Asisten'
    >
      <section className='bg-darkGrey-800 relative h-screen w-screen overflow-y-auto text-orange-600'>
        <div className=' pb-12 pt-28'>
          <div className=' container mx-auto flex h-full w-screen flex-col items-start justify-center gap-2 '>
           
          <div className='flex flex-row justify-between'>
          <div className='flex w-fit flex-row gap-3'>
            <Button
              rightIcon={FaPlus}
              className=' flex flex-row gap-1.5 rounded-3xl border-none bg-black text-orange-600'
            >
              Tambah Asisten
            </Button>
            <Button
              rightIcon={FaPlus}
              className=' flex flex-row gap-1.5 rounded-3xl border-none bg-black text-orange-600'
            >
              Tambah koordinator
            </Button>
            </div>
            </div>
            <table className='w-full table-fixed '>
              <thead>
                <tr className='border'>
                  <th className='border p-2'>Nama</th>
                  <th className='border p-2'>NRP</th>
                  <th className='border p-2'>Peran</th>
                  <th className='border p-2'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border'>
                  <td className='border p-2 text-center '>
                    Faisal Thariq Arifins
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Desiana Fitria Nurjana
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
                <tr className='border'>
                  <td className='border p-2 text-center'>
                    Rafi Arya Abdul Aziz
                  </td>
                  <td className='border p-2 text-center'>5024xxxxxx</td>
                  <td className='border p-2 text-center'>Asisten</td>
                  <td className='flex w-full justify-center border p-2 '>
                    <Button className='bg-darkGrey-900 rounded-3xl border border-none text-orange-600'>
                      Copot Peran
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
