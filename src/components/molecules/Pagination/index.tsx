import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { ContentPagination, ButtonPag, SpanPage } from './styled'

interface paginationProps {
    page: number;
    setPage: (prev: any) => void;
}

export const Pagination = (props: paginationProps) => {
    const { page, setPage } = props;
  return (
    <ContentPagination>
        <ButtonPag className="prev" disabled={page == 0} onClick={() => setPage(() => page - 1)}><GrLinkPrevious /> prev</ButtonPag>
        <SpanPage>{page + 1}</SpanPage>
        <ButtonPag className="next" onClick={() => setPage(() => page + 1)}>next <GrLinkNext /></ButtonPag>
    </ContentPagination>
  )
}
