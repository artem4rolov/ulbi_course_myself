import { ErrorPage } from 'pages'
import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.log(error)
    return <ErrorPage />
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage />
    }

    return this.props.children
  }
}
