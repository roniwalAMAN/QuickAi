import { useClerk, useUser } from '@clerk/clerk-react'
import { Eraser, FileText, Hash, House, Image, Scissors, SquarePen, Users } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog_titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate_iamges', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove_background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove_object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users }
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center
        max-sm:absolute top-14 bottom-0 left-0
        ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}
        transition-all duration-300 ease-in-out z-20`}
    >
      <div className='my-7 w-full'>
        <img src={user.imageUrl} alt="User Avatar" className='w-14 h-14 rounded-full mx-auto' />
        <h1 className='mt-1 text-center text-sm font-medium'>{user.fullName}</h1>

        <div className='mt-6 space-y-2 px-4'>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors
                 ${isActive
                    ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white'
                    : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <Icon className='w-4 h-4' />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
