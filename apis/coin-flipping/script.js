function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
        

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            if (attempts >= 100) {
                reject();
            }
            attempts++;
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {headsCount = 0;
                
            }
        resolve("flipped 5 in a row")
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );