import React, { type HTMLProps, useEffect, useState } from 'react'

interface BugButtonProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps): React.ReactElement => {
  const [error, setError] = useState(false)

  const throwError = (): void => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <div onClick={throwError}>
      {'throw error'}
    </div>
  )
}
