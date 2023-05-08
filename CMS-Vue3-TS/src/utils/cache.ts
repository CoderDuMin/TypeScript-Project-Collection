enum cacheEnum {
    local = "local",
    session = "session"
}
class CacheStorage {
    storage: Storage
    constructor(type: cacheEnum) {
        this.storage = type == "local" ? localStorage : sessionStorage
    }
    setCache(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value))
    }
    getCache(key: string) {
        let value = this.storage.getItem(key)
        return value ? JSON.parse(value) : ""
    }
    removeCache(key: string) {
        this.storage.removeItem(key)
    }
    clear() {
        this.storage.clear()
    }
}

const localCache = new CacheStorage(cacheEnum.local)
const sessionCache = new CacheStorage(cacheEnum.session)

export { localCache, sessionCache }
