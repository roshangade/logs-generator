var i = 0

var timer = setInterval(() => {
    logger()
}, 25)

var stop = (i) => {
    console.log('============================', i)
    if (i == 1000000000) {
        clearInterval(timer)
    }
}

var logger = () => {
    for (var x = 0; x < 100; x++) {
        console.log((new Date).toISOString(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", x, i)
    }
    stop(i++)
}
