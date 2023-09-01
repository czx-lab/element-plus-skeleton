import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: ''
    }),
    getters: {
        getToken(state) {
            const token = localStorage.getItem('token')
            return token ? token : state.token
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
            localStorage.setItem('token', token)
        },
        clearToken() {
            this.token = ''
            localStorage.removeItem('token')
        }
    }
})