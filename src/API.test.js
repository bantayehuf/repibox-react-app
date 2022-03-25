import React from "react";
import {
    fetchAPI
} from "./lib/fetchAPI";

it('API fetch items', async () => {
    const data = await fetchAPI({
        searching: false
    }, '');
    expect(data.success).toEqual(true);
})

it('API search item', async () => {
    const data = await fetchAPI({
        searching: true,
        query: 'burger'
    }, '');
    expect(data.success).toEqual(true);
})