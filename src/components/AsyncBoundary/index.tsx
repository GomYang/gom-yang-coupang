import React, { Suspense } from 'react'

import ErrorBoundary, { ErrorBoundaryProps } from '../ErrorBoundary'

import DefaultLoading from './DefaultLoading'

export interface AsyncBoundaryProps extends ErrorBoundaryProps {
  loadingFallback?: React.ReactElement
}

function AsyncBoundary({
  errorFallback,
  loadingFallback = <DefaultLoading />,
  children,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary errorFallback={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary
