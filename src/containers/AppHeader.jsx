/**
 * The application header
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";

import { requestResultHandler } from "../redux-Slices/itemsSlice";
import { fetchAPI } from "../lib/fetchAPI";

let timer;

export default function AppHeader() {
  // Using redux as state manager may not be needed,
  // but I want to show that I have expriance to use redux.
  const dispatch = useDispatch();
  const { page, posts } = useSelector((state) => state);

  const memoizedFetchItemsCallback = useCallback(async (q, page) => {
    // If search query is found append it in url parameter
    let search = { searching: false, query: "" };
    if (q) search = { searching: true, query: q };

    const data = await fetchAPI(search, page);

    if (data.success) {
      dispatch(
        requestResultHandler({
          page: data.page,
          has_next_page: data.has_next_page,
          searchingItem: { ...search },
          posts: data.posts,
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
  }, [page, posts]);

  /**
   * Set request query (item to be searched)
   * @param {InputEvent} e - The event of HTML input
   */
  const searchQueryHandler = (e) => {
    clearTimeout(timer);

    // timer is used to wait until to user will finish typing before sent request.
    timer = setTimeout(function () {
      if (e.target.value) {
        memoizedFetchItemsCallback(e.target.value, page);
      } else {
        // On user clean search input, reseting the search result.
        memoizedFetchItemsCallback("", "");
      }
    }, 500);
  };

  return (
    <div className="app-header grid bg-gray-100 md:pt-2 md:pl-8">
      <div className="col-12 md:col-7 pb-0 md:p-1">
        <a href="/">
          <div className="flex justify-content-center md:justify-content-start ">
            <img className="w-2rem h-2rem mt-2" src="./logo192.png" alt="" />
            <h3 className="mb-0 ml-2 text-black-alpha-80">Repibox receipe</h3>
          </div>
        </a>
      </div>
      <div className="col-12 md:col-4">
        <InputText
          type="search"
          className="p-inputtext-sm w-full md:mt-1 md:mb-1"
          placeholder="Search.."
          onChange={searchQueryHandler}
        />
      </div>
    </div>
  );
}
