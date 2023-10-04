import { type FC } from 'react'
import { type SearchResultsProps } from './SearchResults.interface'
import styles from './SearchResults.module.scss'
import cn from 'classnames'
import { SearchCard } from '@/components/SearchCard/SearchCard'

export const SearchResults: FC<SearchResultsProps> = ({ results }) => {
  return (
  <div className={cn('d-flex flex-column gap-3 flex-fill', styles['container'])}>
  {results !== null ? results?.map((item) => {
    const {
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
      policyDetail
    } = item

    return (
      <SearchCard
        key={String(id)}
        id={id}
        providerName={providerName}
        planName={planName}
        price={price}
        medicalCoverageForCovid={medicalCoverageForCovid}
        medicalEvacuation={medicalEvacuation}
        baggageLoss={baggageLoss}
        tripCancellation={tripCancellation}
        tripInterruption={tripInterruption}
        cancelForCovid={cancelForCovid}
        policyDetail={policyDetail}
        />
      )
  }) : (
    <div>Loading...</div>
  )}
  
</div>
)}
