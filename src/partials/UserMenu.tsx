import React from 'react';
import Image from 'next/image';

type Props = {
  classNames: string;
};

function UserMenu() {
  return (
    <div className='dropdown dropdown-end bigp:hidden'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <Image src='/9x9.jpg' alt='avatar' width='50' height='50' />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
      >
        <li>
          <p className='justify-between'>
            Profile
            <span className='badge'>New</span>
          </p>
        </li>
        <li>
          <p>Settings</p>
        </li>
        <li>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
