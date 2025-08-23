let input = document.querySelector("#input");
const error = document.querySelector(".error");

input.addEventListener("input", (e) => {
  // Remove anything that's not a digit
  let str = input.value;
  let val = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      // check if character is a digit
      val += str[i];
    }
  }

  if (val.length > 6) {
    input.value = `+(${val.substring(0, 3)}) ${val.substring(
      3,
      6
    )}-${val.substring(6, 10)}`;
  } else if (val.length > 3) {
    input.value = `+(${val.substring(0, 3)}) ${val.substring(3, 6)}`;
  } else {
    input.value = val;
  }
});
