require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6105de963fdb3011a49d1596', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 28 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const update = async (id, age) => {
    const userAgeupdate = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age: 12 })
    return count
}

update('6105de963fdb3011a49d1596', 12).then((result) => {
    console.log('result')
}).catch((e) => {
    console.log(e)
})
