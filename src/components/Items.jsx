/**
 * The receipe item builder
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { ItemLoadingSpinner } from "../lib/LoadingSpinner";
import Item from "./Item";
import { ErrorMessages } from "../lib/ErrorMessages";
import { requestResultHandler } from "../redux-Slices/itemsSlice";
import { fetchAPI } from "../lib/fetchAPI";

export default function Items() {
  // Using redux as state manager may not be needed,
  // but I want to show that I have expriance to use redux.
  const dispatch = useDispatch();
  const { page, has_next_page, searchingItem, posts, error } = useSelector(
    (state) => state
  );

  const [itemsLoading, setItemsLoading] = useState(false);

  const memoizedFetchItemsCallback = useCallback(async () => {
    setItemsLoading(true);

    const data = await fetchAPI(searchingItem, page);

    if (data.success) {
      dispatch(
        requestResultHandler({
          page: data.page,
          has_next_page: data.has_next_page,
          searchingItem: { ...searchingItem },
          posts: [...posts, ...data.posts],
          error: {
            hasError: false,
            errorMessage: "",
          },
        })
      );
    } else {
      dispatch(
        requestResultHandler({
          page: "",
          has_next_page: false,
          searchingItem: {
            searching: false,
            query: "",
          },
          posts: [],
          error: {
            hasError: true,
            errorMessage: data.errorMessage,
          },
        })
      );
    }

    setItemsLoading(false);
  }, [page, posts, searchingItem, error]);

  useEffect(() => {
    memoizedFetchItemsCallback();
  }, []);

  return (
    <div className="pb-8">
      {error.hasError ? (
        <ErrorMessages message={error.errorMessage} />
      ) : (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={memoizedFetchItemsCallback}
            hasMore={has_next_page}
            // loader={<ItemLoadingSpinner className="pt-3" key={0} />}
            initialLoad={false}
          >
            <div className="grid">
              {posts.map((post, index) => (
                <Item key={index} post={post} />
              ))}
            </div>
          </InfiniteScroll>

          {itemsLoading && <ItemLoadingSpinner className="pt-3" key={0} />}
        </>
      )}
    </div>
  );
}
