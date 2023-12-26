"use client"
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constanst'
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt='Car Logo' width={20} height={20} className='ml-4'></Image>
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input" placeholder='Volkswagen' displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom="opacity-100" leaveTo='opacity-0' afterLeave={()=> setQuery('')}>
          <Combobox.Options ></Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer