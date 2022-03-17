import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { ContentPagination, ButtonPag, SpanPage } from './styled'

interface paginationProps {
    page: number;
    setPage: (prev: any) => void;
    disabled: boolean;
}

export const Pagination = (props: paginationProps) => {
    const { page, setPage, disabled } = props;
    
  return (
    <ContentPagination>
        <ButtonPag className="prev" disabled={page <= 1} onClick={() => setPage((prev: any) => prev - 1)}><GrLinkPrevious /> prev</ButtonPag>
        <SpanPage>{page}</SpanPage>
        <ButtonPag className="next" disabled={disabled} onClick={() => setPage((next: any) => next + 1)}>next <GrLinkNext /></ButtonPag>
    </ContentPagination>
  )
}
