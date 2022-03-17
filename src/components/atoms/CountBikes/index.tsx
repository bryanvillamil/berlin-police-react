import { Count, CountTitle } from './styled'

interface countProps {
  isLoading: boolean;
  dataCount?: number;
}

export const CountBikes = (props: countProps) => {
  const { isLoading, dataCount } = props;
  return (
    <Count><CountTitle>Total: {!isLoading && dataCount}</CountTitle></Count>
  )
}
