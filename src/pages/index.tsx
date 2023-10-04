import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'
import { SearchResults } from '@/components/SearchResults/SearchResults'
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher);

  const obj = data ? JSON.parse(data) : null

  const searchTerms = [
    {
      label: "Traveler Age",
      value: "44"
    },
    {
      label: "Travel Dates",
      value: "05/24/2023 - 06/28/2023"
    },
    {
      label: "Trip Cost",
      value: "$4,000"
    },
    {
      label: "Deposit Date",
      value: "05/03/2023"
    }
  ]

  return (
    <>
      <Header />
      <main className='container my-5'>
        <div className='p-3 bg-white rounded-4'>
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
        <div className='d-flex just gap-5 my-5'>
          <div className='w-25 p-3 bg-white rounded-4'>Search Filters</div>
          <SearchResults results={obj?.plans} />
        </div>
      </main>
    </>
  )
}
