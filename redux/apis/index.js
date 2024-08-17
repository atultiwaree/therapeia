import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

export const therapeiaApis = createApi({
    reducerPath: 'therapeiaApis',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://therapeia-backend.onrender.com/',
    }),

    endpoints : builder => ({
        
        sendMessage: builder.mutation({
            query: ({body}) => ({
              url: `askai`,
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body,
            }),
          }),      
    })
})

export const {useSendMessageMutation} = therapeiaApis