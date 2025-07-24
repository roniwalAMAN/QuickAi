import { useUser } from '@clerk/clerk-react'
import { Heart, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData)
  }

  useEffect(() => {
    if (user) {
      fetchCreations()
    }
  }, [user])

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <div className='flex items-center gap-2 text-xl font-semibold text-gray-700'>
        <Users className='w-5 text-purple-600' />
        Creations
      </div>

      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll flex flex-wrap'>
        {creations.length === 0 ? (
          <p className='text-gray-400 text-sm p-4'>No community creations yet.</p>
        ) : (
          creations.map((creation, index) => (
            <div
              key={index}
              className='relative group p-3 w-full sm:w-1/2 lg:w-1/3'
            >
              <img
                src={creation.content}
                alt="community-creation"
                className='w-full h-64 object-cover rounded-lg'
              />

              <div className='absolute inset-0 flex flex-col justify-end p-3 rounded-lg bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity text-white'>
                <p className='text-sm mb-2'>{creation.prompt}</p>
                <div className='flex items-center gap-1'>
                  <p>{creation.likes.length}</p>
                  <Heart
                    className={`w-5 h-5 hover:scale-110 transition-transform cursor-pointer ${
                      creation.likes.includes(user.id)
                        ? 'fill-red-500 text-red-600'
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Community
