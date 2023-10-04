import { type FC } from 'react'
import { type PurchaseHeaderProps } from './PurchaseHeader.interface'
import styles from './PurchaseHeader.module.scss'
import { priceFormatter } from '@/features/PriceFormatter';

export const PurchaseHeader: FC<PurchaseHeaderProps> = ({ product }) => (
  <div className='p-5 bg-white rounded-4 text-center'>
    {product && product.providerName && product.planName && product.price ? (
      <h1 className='fw-bold fs-3'>You selected the {product.providerName} {product.planName} plan for {priceFormatter.format(product.price)}</h1>
    ) : (
      <p>Loading...</p>
    )}
  </div>
)
