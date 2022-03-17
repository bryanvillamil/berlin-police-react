import React from 'react'
import { ContentLoading, SpanLoading } from './styled'

export const Loading = () => {
  return (
    <ContentLoading>
      <SpanLoading></SpanLoading>
      <SpanLoading></SpanLoading>
      <SpanLoading></SpanLoading>
    </ContentLoading>
  )
}
