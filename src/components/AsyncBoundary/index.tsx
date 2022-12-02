import React, { Suspense } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithFallback,
} from 'react-error-boundary'

import DefaultError from './DefaultError'
import DefaultLoading from './DefaultLoading'

export interface AsyncBoundaryProps extends ErrorBoundaryPropsWithFallback {
  children: React.ReactElement
  error?: React.ReactElement
  loading?: React.ReactElement
}

function AsyncBoundary({
  error = <DefaultError />,
  loading = <DefaultLoading />,
  children,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={loading}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary
