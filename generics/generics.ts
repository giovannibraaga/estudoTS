interface Array<T> {
    includes (searchElement: T, fromIndex?: number): boolean
}

const names: Array<string> = ['a', 'b', 'c']

const days: Array<number> = [1, 2, 3]