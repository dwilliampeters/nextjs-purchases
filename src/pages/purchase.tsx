import { Header } from '@/components/Header/Header'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { PurchaseHeader } from '@/components/PurchaseHeader/PurchaseHeader';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Purchase() {

  const [product, setProduct] = useState({})

  const { data, error } = useSWR('/api/staticdata', fetcher);

  const router = useRouter()
  const paramId = parseInt(router.query.id as string)

  const obj = data ? JSON.parse(data) : null

  useEffect(() => {
    if (obj) setProduct(obj.plans.filter((item: { id: number; }) => item.id === paramId)[0])
  }, [paramId])

  return (
    <>
      <Header />
      <main className='container my-5'>
        <div className='p-5 bg-white rounded-4 text-center'>
          <PurchaseHeader product={product} />
        </div>
      </main>
    </>
  )
}
