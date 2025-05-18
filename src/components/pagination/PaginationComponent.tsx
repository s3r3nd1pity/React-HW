import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query,setQuery]=useSearchParams({page: "1"});
    return (
        <div>
            <button className={"m-2 p-1 border"} onClick={() => {
                const page = query.get("page");
                if (page && +page > 1) {
                    let currentPage = +page;
                    currentPage--;
                    setQuery({page:currentPage.toString()})
                }
            }}>prev</button>
            <button className={"m-2 p-1 border"} onClick={() => {
                const page = query.get("page");
                if (page) {
                    let currentPage = +page;
                    currentPage++;
                    setQuery({page:currentPage.toString()})
                }
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;