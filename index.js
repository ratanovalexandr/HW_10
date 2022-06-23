function askInput() {

    let texts = [];
  
    while(true) {
  
      let message = prompt("Enter yuor texts");
       
      if (message === null || message === "") break;
  
      texts.push(message);
    }

  const upperCasedArray = texts.map((string) =>{
    return `${string[0].toUpperCase()}${string.slice(1)}`
    console.log(upperCasedArray());
  });

  const sortedArray = upperCasedArray.sort((first, second) =>{
    return first.length - second.length;
  });
    return sortedArray;

  }
  
  askInput();
  console.log(askInput());