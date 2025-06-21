console.log("Hello world");


let a = fetch("http://127.0.0.1:5500/Songs/")

async function main(){
        let a = await fetch("http://127.0.0.1:5500/Songs/");
        let response = await a.text();
        console.log(response);
        let div = document.createElement('div');
        div.innerHTML = response;
        let aArray = div.querySelectorAll("a");
        console.log(aArray)

        let songArray = [];
        for(let i=0; i<aArray.length; i++){
                    let element = aArray[i]
                    if(element.href.endsWith('.mp3')){
                              songArray.push(element.href);
                    }
        }
        console.log(songArray);
}

main();         
