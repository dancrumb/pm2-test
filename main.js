const main = async () => {
    while (true) {
        console.log('Version: ' + process.version);
        await new Promise(res => setTimeout(res, 1000))
    }
};

main();

