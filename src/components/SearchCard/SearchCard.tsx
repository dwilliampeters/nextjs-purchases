import { type FC } from 'react'
import { type SearchCardProps } from './SearchCard.interface'
import styles from './SearchCard.module.scss'
import cn from 'classnames'
import { Button } from '../Button/Button'
import { priceFormatter } from '@/features/PriceFormatter'

export const SearchCard: FC<SearchCardProps> = ({
  id,
  providerName,
  planName,
  price,
  medicalCoverageForCovid,
  medicalEvacuation,
  baggageLoss,
  tripCancellation,
  tripInterruption,
  cancelForCovid,
  policyDetail }) => {

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={cn('flex-fill p-3 ps-5 bg-white rounded-4', styles['container'])}>
      <div className='d-flex justify-content-between align-items-center pb-3 border-bottom border-2 border-secondary-emphasis'>
        <h2 className={styles.title}>{providerName}: {planName}</h2>
        <div className='w-25'>
          <Button link="#" className='w-100' variant="secondary">Compare</Button>
        </div>
      </div>
      <div className='d-flex gap-5 justify-content-between mt-5'>
        <div className='flex-grow-1'>
          <dl className={styles.list}>
            <dt>Cancel for Covid-19 Sickness</dt>
            <dd className='text-warning'>{capitalizeFirstLetter(cancelForCovid)}</dd>
            <dt>Trip Cancellation</dt>
            <dd>{priceFormatter.format(tripCancellation)}</dd>
            <dt>Trip Interruption</dt>
            <dd>{tripInterruption}</dd>
            <dt>Medical Coverage for Covid-19</dt>
            <dd className='text-warning'>{capitalizeFirstLetter(medicalCoverageForCovid)}</dd>
            <dt>Medical Evacuation & Repatriation</dt>
            <dd>{priceFormatter.format(medicalEvacuation)}</dd>
          </dl>
        </div>
        <div className='d-flex flex-column align-items-center gap-3 w-25'>
          <div className={styles.price}>{priceFormatter.format(price)}</div>
          <div className='d-flex flex-column gap-3 w-100'>
            <Button link={policyDetail} linkTarget="blank" className='w-100'>Policy Details</Button>
            <Button link={`/purchase?id=${id}`} variant="secondary" className='w-100'>Purchase</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
