const doWork = async () => {
    throw new Error('Error')
    return 'Dinesh'
}

doWork(result).then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e);
})

//console.log(doWork())