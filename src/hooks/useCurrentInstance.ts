import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue'

export default function useCurrentInstance() {
    // @ts-ignore
    const { proxy } = getCurrentInstance()
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const globalProperties = appContext.config.globalProperties
    return {
        globalProperties,
        proxy,
        ref
    }
}