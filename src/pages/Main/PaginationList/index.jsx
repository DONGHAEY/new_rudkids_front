import { PageBtnUI, PaginationListUI } from "./styles";

const PaginationList = ({ meta, onChange }) => {
  const 표시수 = 3;
  const page = meta?.page ?? 1;
  const lastPage = meta?.last_page ?? 1;
  const hasPrev = meta?.hasPrev;
  const hasNext = meta?.hasNext;
  const startPage = page - 표시수 < 0 ? 1 : page - 표시수 + 1;

  return (
    <PaginationListUI>
      {hasPrev && <p>{"<"}</p>}
      {new Array(표시수)?.fill("")?.map((_, idx) => {
        const l = startPage + idx;
        if (l > lastPage) return null;
        return (
          <PageBtnUI
            key={l}
            selected={page === l}
            onClick={(e) => {
              e.preventDefault();
              onChange(l);
            }}
          >
            {l}
          </PageBtnUI>
        );
      })}
      {hasNext && <p>{">"}</p>}
    </PaginationListUI>
  );
};

export default PaginationList;
