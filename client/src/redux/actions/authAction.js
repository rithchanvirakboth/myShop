import ACTIONS from './index';

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN
  }
}

export const fetchUser = async (token) => {
  const res = await fetch('/user/infor', {
    headers: {Authorization: token}
  })

  const data = await res.json()
  return data
}

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role === 1 ? true : false
  }
  }
}