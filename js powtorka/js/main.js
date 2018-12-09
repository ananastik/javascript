// let likes = (["John", "Tomek", "Asia", "Jakub", "Klaudia"]);

// const showLikes = (likes) =>{
//     let size = likes.length;

//         if(size === 1){
//             return(likes[0]+" polubil twoje zdjecie");
//         } else if (size===2) {
//             return(likes[0]+" i "+likes[1]+ " polubili twoje zdjecie");
//         } else {
//             return(likes[0]+", "+likes[1]+" i "+(size-2)+" inne osoby polubily twoje zdjecie")
//         }
//     }

//     console.log(showLikes(likes));

    let numbers = ([-2, -4, 5]);

const showLikes = (likes) =>{
    let size = numbers.length;
    let biggest = numbers[0];
    let nextBiggest = numbers[0];
       for(let i=0; i<size; ++i) {
        if (numbers[i]>biggest){
            nextBiggest=biggest;
            biggest=numbers[i];
        }
        else if (numbers[i]>nextBiggest && numbers[i]!==biggest){
            nextBiggest=numbers[i];
        }
        }
        return(nextBiggest);
       }

    console.log(showLikes(numbers));

    // sort(), filter()