import { useSystemStore } from '~/store/modules/system'
import { Themes as ThemesConstants } from '~/constants/system'
import { useDark, useToggle } from '@vueuse/core'
import dayjs from 'dayjs'

export default function AppCollectFunc() {
    // 暗黑模式切换
    const applyThemes = () => {
        const systemStore = useSystemStore()
        const useDarkHandler = useDark({
            attribute: 'themes'
        })
        const hour = dayjs().hour()
        if (hour >= 9 && hour <= 18) {
            if(systemStore.getThemes === ThemesConstants.Dark) {
                useToggle(useDarkHandler)()
                systemStore.setThemes(ThemesConstants.Light)
            }
        } else {
            if (systemStore.getThemes === ThemesConstants.Light) {
                useToggle(useDarkHandler)()
                systemStore.setThemes(ThemesConstants.Dark)
            }
        }
    }
    return {
        applyThemes
    }
}
