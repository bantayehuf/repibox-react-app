/**
 * The receipe item builder
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ItemLoadingSpinner } from "../lib/LoadingSpinner";
import Item from "./Item";
import { API } from "../utils/config";
import { ErrorMessages } from "../lib/ErrorMessages";
import { loadedItemHandler } from "../redux-Slices/itemsSlice";

export default function Items() {
  // Using redux as state manager may not be needed,
  // but I want to show that I have expriance to use redux.
  const dispatch = useDispatch();
  const { page, has_next_page, posts } = useSelector((state) => state);

  const [itemsLoading, setItemsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });
  /**
   * Fetch data (recipes) from API
   * @param {string} page - The next page session
   */
  const fetchItems = async (inPage) => {
    setItemsLoading(true);

    try {
      const response = await API.get("recipes", {
          params: {
              page: inPage
          }
      });
      const data = response.data;

      dispatch(
        loadedItemHandler({
          page: data.page,
          has_next_page: data.has_next_page,
          posts: [...posts, ...data.posts],
        })
      );
    } catch (error) {
      if (!error.response) {
        setError({ hasError: true, message: "Service is not available." });
      } else {
        setError({ hasError: true, message: "Failed to load the content." });
      }
    }

    setItemsLoading(false);
  };

  const memoizedFetchItemsCallback = useCallback(fetchItems, [page]);

  useEffect(() => {
    memoizedFetchItemsCallback(page);
  }, []);

  return (
    <div className="pb-8">
      {error.hasError ? (
        <ErrorMessages message={error.message} />
      ) : (
        <div className="grid">
          {posts.map((post, index) => (
            <Item key={index} post={post}/>
          ))}
        </div>
      )}

      {itemsLoading && <ItemLoadingSpinner className="pt-3" />}
    </div>
  );
}
