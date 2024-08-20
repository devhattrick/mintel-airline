const starLoop = () => {
    const input = 5;
    const convertInput = input * 2;

    for (i = 1; i <= convertInput; i++) {
      let starLine = '';
      for (j = 1; j <= i; j++) {
        if (i % 2 != 0) {
          starLine += '*';
        }
      }
      console.log(starLine);
    }
  };
  console.log(starLoop());