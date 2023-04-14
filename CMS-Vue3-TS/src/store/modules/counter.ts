import { defineStore } from "pinia"

const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 15
    }),
    getters: {
        doubleCounter(): number {
            return this.count * 2
        }
    },
    actions: {
        changeCountAction(newCount: number) {
            this.count = newCount
        }
    }
})

export default useCounterStore
