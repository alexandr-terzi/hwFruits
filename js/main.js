let price = 0;

//Fruit prices
const applePrice = 10;
const orangePrice = 12;
const kiviPrice = 15;

// Enter if you need fruit
const isFruit = prompt("Do you want fruits?");

if (isFruit =="yes"){
    alert("Ok, let's start! \u{1F609}");
    //Do you need apple?
    const isApple = prompt("Do yoy want \u{1F34E}?");
    if (isApple == "yes") {
        //if yes enter count of apple
        const countApple = +prompt("Enter count of \u{1F34E}");
        console.log(countApple);
        //total price with apple
        // price = price + (countApple * applePrice);
        price += countApple * applePrice;
        console.log(price, " - cost apples");
        

        //Do you need oranges?
        const isOrange = prompt("Do yoy want \u{1F34A}?");
        if (isOrange == "yes") {
            //if yes enter count of orange
            const countOrange = +prompt("Enter count of \u{1F34A}");
            console.log(countOrange);
            //total price with orange
            // price = price + (countOrange * orangePrice);
            price += countOrange * orangePrice;
            console.log(price, " - cost apple + oranges");

            
            //Do you need kiwi?
            const isKiwi = prompt("Do yoy want \u{1F95D}?");
            if (isKiwi == "yes") {
                //if yes enter count of kiwi
                const countKiwi = +prompt("Enter count of \u{1F95D}");
                console.log(countKiwi);
                //total price with kiwi
                // price = price + (countKiwi * kiwiPrice);
                price += countKiwi * kiviPrice;
                console.log(price, " - cost apples + oranges + kiwi");
            }
        }

        else {
            //Do you need kiwi?
            const isKiwi = prompt("Do yoy want \u{1F95D}?");
            if (isKiwi == "yes") {
                //if yes enter count of kiwi
                const countKiwi = +prompt("Enter count of \u{1F95D}");
                console.log(countKiwi);
                //total price with kiwi
                // price = price + (countKiwi * kiwiPrice);
                price += countKiwi * kiviPrice;
                console.log(price, " - cost apples + oranges + kiwi");
            }
        }
    }
    //if no next question
    else {
        //Do you need oranges?
        const isOrange = prompt("Do yoy want \u{1F34A}?");
        if (isOrange == "yes") {
            //if yes enter count of orange
            const countOrange = +prompt("Enter count of \u{1F34A}");
            console.log(countOrange);
            //total price with orange
            // price = price + (countOrange * orangePrice);
            price += countOrange * orangePrice;
            console.log(price, " - cost apple + oranges");
        }       
    }
    
} else {
    alert("Oh, bye \u{1F614}.");
    }

//Back total price of fruits
document.write(`<h2>Final price is ${price}</h2>`);    
//end