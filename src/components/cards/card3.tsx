import ButtonLink from '@/components/links/ButtonLink';

export default function Card3() {
  return (
    <div className='flex w-full flex-col items-start justify-center gap-1 text-yellow-600'>
      <h3 className='w-full'>P1: Lorem Ipsum</h3>
      <ButtonLink
        href='/ambil-jadwal'
        className='w-full rounded-xl border-none bg-black py-4 font-bold text-yellow-600'
      >
        Senin, 27 September 2023
      </ButtonLink>
    </div>
  );
}
