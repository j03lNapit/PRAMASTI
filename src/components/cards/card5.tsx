import NextImage from 'next/image';

import Button from '@/components/buttons/Button';

type Card5Props = {
  className?: string;
};

export default function Card5({ className }: Card5Props) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-6 text-orange-600 ${className}  z-10`}
    >
      <div className='border-1 z-10 flex h-[260px] w-[260px] border border-white'>
        <NextImage
          src='/images/mix/praktikum.jpg'
          width={308}
          height={332}
          alt='praktikum'
          className=' z-10 h-full w-full object-cover'
        />
      </div>

      <div className={`${className} z-10 flex w-[60%] flex-col gap-2`}>
        <h2>Dasar Pemrograman</h2>
        <p>
          LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
          IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
          IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
        </p>
      </div>

      <div className='z-10 flex  flex-col gap-6'>
        <Button className='w-full justify-center rounded-full bg-white px-12 py-4 font-bold text-black'>
          Jadwal Praktikum
        </Button>
        <Button className='w-full justify-center rounded-full bg-white px-12 py-4 font-bold text-black'>
          Kelola Asisten
        </Button>
        <Button className='w-full justify-center rounded-full bg-white px-12 py-4 font-bold text-black'>
          Jadwal Asistensi
        </Button>
        <Button className='w-full justify-center rounded-full bg-white px-12 py-4 font-bold text-black'>
          Daftar Peserta
        </Button>
      </div>
    </div>
  );
}
