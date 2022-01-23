import Types from "./types";
import axios from "axios";

// https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMDA2MjBjNWFhN2JlOGNkMDNhNmYzYzY4NDA2ZTQ1ZTkzYjNjYWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NDI5Mzk5OTIsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjU3Mjg1ODczODM0Mzk3NDEzMiIsImVtYWlsIjoiMzc2MDA5N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6ItCS0LvQsNC00LjQvNC40YAg0KHRg9C80LXQvdC60L4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2ltamtib2hmYkhIUWI1Y213UU01TXRvOVQ3elNrOFRRQzJUYjZoMlE9czk2LWMiLCJnaXZlbl9uYW1lIjoi0JLQu9Cw0LTQuNC80LjRgCIsImZhbWlseV9uYW1lIjoi0KHRg9C80LXQvdC60L4iLCJpYXQiOjE2NDI5NDAyOTIsImV4cCI6MTY0Mjk0Mzg5MiwianRpIjoiYzkzNWEwMjA1ZmVkOWQ3MTNjNmEwM2EzNjdlMDExYWJmNzllZDFkYiJ9.o4hL1UpXiT_fUkd_pTmBzeWnXKtFJTa-KmxzICzDG6JmrhS-LGYBUJ6Fv5CV0oghom3bFwH2sKLw4mYCTWUHYnEGUHNg47JyS8UyNhN3Y22jdEJjoiRWXjPosjwfmHKD80r42Qt-_DS8gesptE9yLFc8yTRQ5BoyNf-SPfhss1Osa2ABp5UOeAntSO-j9fCiDXIfML-74haTV8ybX30tD75ghvWl9i8s9oqeLhWMvi2mFGO5-6fZ9DUzT-WXpFMwWGUH6r23lC1zIvjhySD2bKNyQaxV-EU7JEMrwIrACS2xS4vtPkTPAd_87OtIlafSSZD76HL9hytFCMvzSbas6Q
HOST = 'localhost:8000/'
export const getPosts = () => {
    return dispatch => {
        dispatch({type: Types.POSTS_LOADING, payload: true})
        axios.get(HOST+'api/posts')
        .then(response => {
                dispatch({type: Types.GET_POSTS, payload: response.data})
            })
        .catch(err => 
            console.log('my: ' + err))
            dispatch({type: Types.POSTS_LOADING, payload: false})
    }
}

export const deletePost = (id, cb) => {
    return dispatch => {
        dispatch({type: Types.POSTS_LOADING, payload: true})
        axios.delete(HOST + '/api/posts/{id}')
            .then(response => {
                dispatch({type: Types.DELETE_POST, payload: id});
                cb();
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const createPost = (data, cb) => {
    return dispatch => {
        dispatch({type: Types.POSTS_LOADING, payload: true})
        axios.post(HOST+ '/api/posts/', data)
            .then(response =>{
                dispatch({type: Types.CREATE_POST, payload: data})
                cb();
            })
            .catch(err => {
                console.log(err)
                dispatch({type: POSTS_LOADING, payload: false})
            })

    }
}