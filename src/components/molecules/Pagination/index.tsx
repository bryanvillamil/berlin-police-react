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
        <ButtonPag className="prev" disabled={page <= 1} onClick={() => setPage(() => page - 1)}><GrLinkPrevious /> prev</ButtonPag>
        <SpanPage>{page}</SpanPage>
        <ButtonPag className="next" disabled={disabled} onClick={() => setPage(() => page + 1)}>next <GrLinkNext /></ButtonPag>
    </ContentPagination>
  )
}
