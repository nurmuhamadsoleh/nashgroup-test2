import {devtools, persist} from "zustand/middleware"

import {create} from "zustand"
import useUser from "./useUser"

const store = persist((set, get) => ({
    ...useUser(set, get)
}),
{
    // untuk menyimpan data ke session storage
    // storage: window.sessionStorage,
    name: "user",
    partialize: (state) => ({
        username: state.username,
        dataUser: state.dataUser
    })
})

const createStore = create(devtools(store, {name: "user"}))
export default createStore
