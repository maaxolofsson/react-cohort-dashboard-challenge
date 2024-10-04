import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import * as API from "./API"
import { createContext, useEffect, useState } from 'react';

const PostCrudContext = createContext()
const CommentCrudContext = createContext()
const LoggedInContactContext = createContext()

function App() {
  const [posts, setPosts] = useState([])
  const [loggedInContact, setLoggedInContact] = useState({})

  useEffect(() => async function () {
    setPosts((await API.get("post")).data.toReversed());
    setLoggedInContact((await API.get("contact/5")).data) // Hard coded logged in user for now..
  }, [])

  const getOnePost = async (id) => {
    const response = await (await API.get("post/" + id)).data
    switch (response.httpRes.status) {
      case 200:
        console.log("200 ok")
        break;
      case 400:
        console.log("400 bad request")
        break;
      case 401:
        console.log("401 username provided not part of boolean org")
        break;
      default:
        console.log("Unknown status code received in getOnePost.")
    }
    console.log(response)
    return response;
  }

  /*
  post = {
    "title": string,
    "content": string,
    "contactId": number
  }
  */
  const addPost = async (post) => {
    const response = await API.post("post", post)
    switch (response.httpRes.status) {
      case 201:
        console.log("201 created")
        setPosts((await API.get("post")).data.toReversed());
        break;
      case 400:
        console.log("400 bad request")
        break;
      case 401:
        console.log("401 username provided not part of boolean org")
        break;
      default:
        console.log("Unknown status code received in addPost.")
    }
    console.log(response)
  }

  const getAllComments = async (postId) => {
    const response = await API.get("post/" + postId + "/comment")
    switch (response.httpRes.status) {
      case 200:
        console.log("200 ok")
        return response.data
      case 401:
        console.log("401 username provided not part of boolean org")
        break;
      default:
        console.log("Unknown status code received in getAllComments.")
    }
    console.log(response)
  }

  return (
    <LoggedInContactContext.Provider value={{ loggedInContact }}>
      <CommentCrudContext.Provider value={{ getAllComments }}>
        <PostCrudContext.Provider value={{ posts, getOnePost, addPost }}>
          <Routes>
            <Route path="/" element={<Container />}></Route>
          </Routes>
        </PostCrudContext.Provider>
      </CommentCrudContext.Provider>
    </LoggedInContactContext.Provider>
  )
}

export { App, PostCrudContext, CommentCrudContext, LoggedInContactContext }
