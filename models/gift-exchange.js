
class GiftExchange {
    static pairs(names) {
        let shuffledNames = names.slice()
        shuffledNames.sort(function() {return 0.5 - Math.random()})
        let second_shuffled = []
        let return_arr = []
        if(shuffledNames.length % 2 != 0){
            throw new Error("Amount of names cannot be odd.")
        }
        for( let i = shuffledNames.length - 1; i > -1; i--) {
            second_shuffled.push(shuffledNames[i])
        }
        for (let i = 0; i < shuffledNames.length; i++) {
            return_arr.push([shuffledNames[i], second_shuffled[i]])
        }
        console.log(return_arr)
        return return_arr
    }

    static traditional(names) {
        const pairs = this.pairs(names);
        const descript = ' is giving a gift to '

        let return_arr = []
        let end = []

        for( let i = 0; i < pairs.length; i++) {
            if (return_arr.length > 0 && pairs[i][1] != return_arr[0][0]) {
                return_arr.push(pairs[i])
            }
            else if(return_arr.length == 0) {
                return_arr.push(pairs[i])
            }
            else if (pairs[i][1] == return_arr[0][0]) {
                end = pairs[i]
            }
        }
        return_arr.push(end)
        for ( let i = 0; i < return_arr.length; i++) {
            return_arr[i] = return_arr[i][0] + descript + return_arr[i][1]
        }
    return return_arr
}
}

module.exports = GiftExchange;
