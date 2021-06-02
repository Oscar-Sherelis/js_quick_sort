const quickSort = (array, ascOrDesc) =>
  (function qsort(arr, start, end) {
    if (start >= end) return arr;
    let swapPos = start;
    if (ascOrDesc === "asc") {
      for (let i = start; i <= end; i++) {
        if (arr[i] <= arr[end]) {
          [arr[swapPos], arr[i]] = [arr[i], arr[swapPos]];
          swapPos++;
        }
      }
    } else if (ascOrDesc === "desc") {
        for (let i = start; i <= end; i++) {
          if (arr[i] >= arr[end]) {
            [arr[swapPos], arr[i]] = [arr[i], arr[swapPos]];
            swapPos++;
          }
        }
    }
    qsort(arr, start, --swapPos - 1);
    qsort(arr, swapPos + 1, end);

    return arr;
  })(Array.from(array), 0, array.length - 1);

function display(arr, htmlSelector) {
    let displayString = "[ ";
    arr.map((number) => {
      displayString += number + " ";
    });
    displayString += "]"
    console.log(displayString)
    document.querySelector(htmlSelector).append(displayString)
}

let m = [1, 55, 22, 22, 1, -2, 0, -123, 66, 22, 11];

display(m, ".asc .test")
display(quickSort(m, "asc") ,".asc .result");

m = [21, 1, -2, 0, -123, 66, -22, 10]

display(m, ".desc .test")
display(quickSort(m, "desc"), ".desc .result");