import React, { useState } from 'react'
import { convertToCOP } from '../utils/convertToCOP'
import type { Prices } from '../types/contentful/types'
const sizes = [
  {
    size: 'S',
    price: '30000',
    countPeople: '10'
  },
  {
    size: 'M',
    price: '40000',
    countPeople: '12'
  },
  {
    size: 'L',
    price: '50000',
    countPeople: '15'
  }
]

export default function SizeCake({ prices }: { prices: Prices }) {
  const sizes = [
    {
      size: 'S',
      price: prices?.S ?? 30000,
      countPeople: '10'
    },
    {
      size: 'M',
      price: prices?.M ?? 40000,
      countPeople: '12'
    },
    {
      size: 'L',
      price: prices?.L ?? 50000,
      countPeople: '15'
    }
  ]
  const [selected, setSelected] = useState(sizes[1])

  return (
    <article className='flex justify-between'>
      <ul className='relative flex gap-2'>
        {sizes.map((data) => (
          <li
            onClick={() => setSelected(data)}
            key={data.size}
            className='list-none'
          >
            <SizeItem
              title={data.size}
              isSelected={data.size === selected?.size}
            />
          </li>
        ))}
        <li>
          <small className='absolute -bottom-3 left-0 text-xs font-light text-gray-400'>
            *Para {selected.countPeople} personas
          </small>
        </li>
      </ul>

      <div>
        <small className='text-xs font-light text-gray-400'>desde </small>
        <span className='text-2xl font-bold text-green-500'>
          ${convertToCOP(selected.price ?? '')}
        </span>
      </div>
    </article>
  )
}

const SizeItem = ({
  title,
  isSelected = false
}: {
  title: string
  isSelected?: boolean
}) => {
  return (
    <div
      className={`inline cursor-pointer rounded-md border-2 px-2 ${
        isSelected
          ? 'border-yellow-300 text-yellow-500'
          : 'border-black/30 text-black/50'
      }`}
    >
      {title}
    </div>
  )
}
