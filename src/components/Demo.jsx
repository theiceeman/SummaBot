import { useState, useEffect } from "react";
import { copy, linkIcon, loader, logo, tick } from "../assets";
import { MdSend } from "react-icons/md";
import {
  useLazyFetchDataQuery,
  useLazyGetSummaryQuery,
} from "../services/article";
// import { useGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // const [getSummary, { error, isFetching }] = useGetSummaryQuery();
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [fetchData] = useLazyFetchDataQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetchData();return;
    const { data } = getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      setArticle(newArticle);

      console.log(newArticle);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter A URL"
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submt_btn peer-focus:border-gray-700
                    peer-focus:text-gray-700"
          >
            <MdSend size="2rem" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
