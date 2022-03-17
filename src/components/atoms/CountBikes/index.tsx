import { Count, CountTitle } from './styled'

interface countProps {
  dataCount?: number;
}

export const CountBikes = (props: countProps) => {
  const { dataCount } = props;
  return (
    <Count><CountTitle>Total: {dataCount}</CountTitle></Count>
  )
}
