
const ConcatGreeter = (names: string[] ): string => {
    const namesString = names.join(", ");
    return (`Hello ${namesString}`)
}

export default ConcatGreeter;