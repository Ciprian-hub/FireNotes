import {watch} from "vue";

export function useWatchCharacters(valueToWatch) {
    watch(valueToWatch, (newVal) => {
        if (newVal.length === 99) {
            alert("Only 100 characters")
        }
    })
}
