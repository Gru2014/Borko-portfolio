const likes = (names) => {
    switch (names.length) {
        case 0: return "no one like this"; break
        case 1: return `${names[0]} likes this`; break
        case 2: return `${names[0]} and ${names[1]} like this`; break
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; break
    }
}

// console.log(likes(['dk','dds']));

function digitalRoot(n) {
    if (n < 10) {
        console.log(n);
        return n
    } else {
        let root = 0
        while (n) {
            root += n % 10
            n = Math.floor(n / 10)
        }
        return digitalRoot(root)

    }
}

// digitalRoot(1254678903)

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

// console.log(digital_root(123));

//function sumTwoSmallestNumbers(numbers) {
//Code here
//     const sortedNumbers = numbers.sort((a, b) => a - b)
//     console.log(sortedNumbers);
//     const result = sortedNumbers[0] + sortedNumbers[1]
//     console.log(result);
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22])

const sumTwoSmallestNumbers = (numbers) => {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((total, number) => total += number)
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

function persistence(num) {
    //code me

    if (num < 10) {
        console.log(num);
        return num
    } else {
        let multi = 1
        while (num) {
            multi *= num % 10
            num = Math.floor(num / 10)
        }
        return persistence(multi)
    }
}
// persistence(25)

function findShort(s) {
    return Math.min(...s.split(' ').map(word => word.length))
}

// console.log(findShort("I've been working as a software engineer."));

// function solution(string) {
//     const arrStr = string.split('')
//     let newArr = []
//     arrStr.forEach((str) => {
//         if (str === str.toUpperCase()) {
//             str = " " + str
//         }
//         newArr.push(str)
//     })
//     console.log(newArr.join(''));
// }

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')

}

solution("toUpperCase")

function pigIt(str) {
    //Code here
    // const arrStr = str.split(" ");
    // let newWord = ""
    // const translateWord = (word) => {
    //     if(/^[a-zA-Z]+$/.test(word)){
    //         return word.slice(1)+word.charAt(0)+'ay'
    //     } else{
    //         return word
    //     }
    // }
    // const translateWords = arrStr.map(translateWord)
    // return translateWords.join(' ')
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// console.log(pigIt("Hello World !"));

var countBits = function(n) {
    // Program Me
    const binary = n.toString(2)
    let count = 0
    binary.split("").map((number)=>{
      if(number)count++
    })
    console.log(binary.split(""));
    return count
  };
  countBits(2)
