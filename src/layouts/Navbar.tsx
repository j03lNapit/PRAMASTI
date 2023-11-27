import { BiSolidUser } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { VscTriangleDown } from 'react-icons/vsc';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

type NavbarProps = {
  title?: string;
  withDropdown?: boolean;
  withBackButton?: boolean;
  withRightNav?: boolean;
  withTitle?: boolean;
};

const defaultTitle = 'PRAMASTI';

const Navbar = ({
  title = defaultTitle,
  withTitle = false,
  withDropdown = false,
  withBackButton = false,
  withRightNav = false,
}: NavbarProps) => {
  return (
    <nav className='fixed top-0 z-20  w-full'>
      <div className='mx-16 flex flex-row items-center justify-between p-4'>
        <div className='flex flex-row items-center justify-center gap-4'>
          {withBackButton && (
            <ButtonLink
              href='/home'
              className='bg-darkGrey-600 rounded-3xl p-2 '
            >
              <IoArrowBackOutline size={40} className='text-orange-600' />
            </ButtonLink>
          )}

          {withTitle || withDropdown ? (
            <div className='bg-darkGrey-600  flex flex-row gap-4  rounded-full px-6 py-4 uppercase text-orange-600'>
              {withTitle && <h1>{title}</h1>}

              {withDropdown && (
                <Button
                  rightIcon={VscTriangleDown}
                  variant='outline'
                  className='flex flex-row justify-between rounded-full border-orange-600  text-orange-600'
                >
                  Praktikan
                </Button>
              )}
            </div>
          ) : null}
        </div>

        {withRightNav && (
          <ul className='bg-darkGrey-600 flex flex-row justify-around gap-4 rounded-full px-6 py-4 '>
            <UnstyledLink href=''>
              <li className='/'>
                <MdDateRange size={34} className='text-orange-600' />
              </li>
            </UnstyledLink>

            <UnstyledLink href='/pengumuman'>
              <li className=''>
                <IoMdNotifications size={34} className='text-orange-600' />
              </li>
            </UnstyledLink>

            <UnstyledLink href='/profile'>
              <li className=''>
                <BiSolidUser size={34} className='text-orange-600' />
              </li>
            </UnstyledLink>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
