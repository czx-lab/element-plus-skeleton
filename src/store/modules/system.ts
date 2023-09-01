import { defineStore } from 'pinia'
import { Themes } from '~/constants/system'

export const useSystemStore = defineStore('system', {
    state: () => ({
        themes: Themes.Light
    }),
    getters: {
        getThemes: state => {
            const theme = localStorage.getItem('themes')
            if (theme) {
                return theme
            }
            localStorage.setItem('themes', state.themes)
            return state.themes
        }
    },
    actions: {
        setThemes(status: Themes) {
            this.themes = status
            localStorage.setItem('themes', status)
        }
    }
})