
let initialState = {
    username: 'test',
    dataUser: []
}
const useUser = (set, get) => ({
   ...initialState,
    setUser: (params) => {
        set(() => ({
            dataUser: params
        }))
    },
    setUsername: (params) => {
        set(()=>({
            username: params?.username 
        }))
    },
    clearUsername: () => {
        set(() => ({
            username: undefined
        }))
    }
})
export default useUser
