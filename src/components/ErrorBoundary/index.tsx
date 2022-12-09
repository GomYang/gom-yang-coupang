import React from 'react'
import {
  ErrorBoundary as ReactErrorBoundary,
  ErrorBoundaryPropsWithFallback,
} from 'react-error-boundary'

import ErrorFallback from '../ErrorFallback'

export interface ErrorBoundaryProps
  extends Omit<ErrorBoundaryPropsWithFallback, 'fallback'> {
  children: React.ReactElement
  errorFallback?: React.ReactElement
}

function ErrorBoundary({ children, errorFallback }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <ErrorFallback
          errorFallback={errorFallback}
          onClick={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
