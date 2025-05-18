import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: "1"});//vse chto posle ?
    return (
        <div>
            <button onClick={() => {
                const pg = query.get("page");
                if (pg && +pg > 1) {
                    let curPg = +pg;
                    curPg--;
                    setQuery({page: curPg.toString()});

                }
            }}>prev
            </button>
            <button onClick={() => {
                const pg = query.get("page");
                if (pg && +pg < 2) {
                    let curPg = +pg;
                    curPg++;
                    setQuery({page: curPg.toString()});

                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;