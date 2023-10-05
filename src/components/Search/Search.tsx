import { type FC } from 'react'
import { SearchProps } from './Search.interface'
import { Button } from '@/components/Button/Button'

export const Search: FC<SearchProps> = ({searchTerms}) => (
  <div className={'p-3 bg-white rounded-4'}>
    <h1 className='fw-bold'>Your search has 41 policies to choose from</h1>
    <div className='d-flex gap-3 justify-content-between align-items-center my-5'>
      <h2 className='fw-bold fs-5 m-0'>My Search</h2>
      <div className='d-flex gap-4'>
        {searchTerms.map((field, index) => (
          <div className='d-flex flex-column ps-4 border-start border-2 border-secondary' key={index}>
            <h3 className='fs-6 fw-bold'>{field.label}</h3>
            <span className='fs-6'>{field.value}</span>
          </div>
        ))}
      </div>
      <div className='d-flex flex-column gap-1'>
        <Button link="#">Email Search Results</Button>
        <Button link="#">Edit Search</Button>
      </div>
    </div>
  </div>
)
