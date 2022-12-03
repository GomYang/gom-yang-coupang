import React from 'react'

import DefaultError from './DefaultError'

export interface ErrorFallbackProps {
  errorFallback?: React.ReactElement
  onClick: VoidFunction
}

function ErrorFallback({ errorFallback, onClick }: ErrorFallbackProps) {
  return errorFallback ? (
    React.cloneElement(errorFallback, { onClick })
  ) : (
    <DefaultError onClick={onClick} />
  )
}

export default ErrorFallback
