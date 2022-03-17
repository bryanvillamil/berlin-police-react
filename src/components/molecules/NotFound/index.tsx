import { BiMessageError } from 'react-icons/bi'
import { ContentNotFound } from './styled'

export const NotFound = () => {
  return (
    <ContentNotFound>
        <h2>¡No results found!</h2>
        <BiMessageError />
    </ContentNotFound>
  )
}
