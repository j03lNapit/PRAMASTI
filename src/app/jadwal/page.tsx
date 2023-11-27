import { Metadata } from 'next';
import * as React from 'react';

import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};
export default function JadwalPage() {
  return (
    <MainLayout
      withNavbar={true}
      withTitle={true}
      withDropdown={false}
      withRightNav={false}
      withBackButton={true}
      title='Jadwal'
    >
      <section className='bg-darkGrey-800 relative flex h-screen w-screen'>
        <div className='mx-16 w-screen pt-28'>
          <table className='mb-10 mt-6 w-full table-auto text-orange-600'>
            <tbody>
              <tr className='border'>
                <td className='border text-center' rowSpan={6000}>
                  <h2> Rangkaian Digital</h2>
                </td>
              </tr>
              <CardJadwal />
              <CardJadwal />
              <CardJadwal />
              <CardJadwal />
              <CardJadwal />
              <CardJadwal />
              <CardJadwal />
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
}

function CardJadwal() {
  return (
    <>
      <tr className='border'>
        <td className='border p-6 font-bold'>P1: Lorem Ipsum Lorem Ipsum</td>
        <td className='border p-6 font-bold'>18:00</td>
        <td className='border p-6 font-bold'>15 September 2023</td>
        <td className='border p-6 font-bold'>Desiana Fitria Nurjannah</td>
        <td className='border p-6 font-bold'>Kelompok 1</td>
      </tr>
    </>
  );
}
