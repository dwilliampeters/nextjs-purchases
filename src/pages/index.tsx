import { Header } from '@/components/Header/Header'
import { SearchResults } from '@/components/SearchResults/SearchResults'
import { Search } from '@/components/Search/Search';
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
        <Search searchTerms={searchTerms} />
        <div className='d-flex just gap-5 my-5'>
          <div className='w-25 p-3 bg-white rounded-4'>Search Filters</div>
          <SearchResults results={obj?.plans} />
        </div>
      </main>
    </>
  )
}
