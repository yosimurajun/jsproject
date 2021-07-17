// algorithm

document.write('Look at console log');
// 1. Hello World
console.log('1. Print \'Hello World\'');
console.log('Hello world');


// 2. 강한친구 대한육군
console.warn(' ');
console.log('2. print 강한친구 대한육군');
console.log('강한친구 대한육군');
console.log('강한친구 대한육군');


// 3. print cat
console.warn(' ');
console.log('3. print cat');
console.log('\\    /\\');
console.log(' )  ( \')');
console.log('(  /  )');
console.log(' \\(__)|');

// 4. print dog
console.warn(' ');
console.log('4. print dog');
console.log('|\_/|');
console.log('|q p|   /}');
console.log('( 0 )"""\\');
console.log('|"^"`    |')
console.log('||_/=\\\\__|');
// 5. A + b
const a = 1;
const b = 2;
const sum = a + b;
// console.warn(' ');
console.log('5. +, - X, / ');
console.log(`sum : ${sum}`);


// 5. A - b
const sub_a = 3;
const sub_b = 2;
const sub = sub_a - sub_b;
// console.warn(' ');
console.log(`sub : ${sub}`);

// 5. A * b
const mul_a = 1;
const mul_b = 2;
const mul = mul_a * mul_b;
// console.warn(' ');
console.log(`mul : ${mul}`);

// 5. A / b
// const div_a = 1;
// const div_b = 3;
// const div = div_a / div_b;
// console.warn(' ');
// console.log(`div : ${div}`);


const div_a = 4;
const div_b = 5;
const div = div_a / div_b;
// console.warn(' ');
console.log(`div : ${div}`);

// 6. multiple

const mul_number_1 = 472;
const mul_number_2 = 385;
console.warn(' ');
console.log('6. multiple');
console.log(mul_number_1 * (mul_number_2 % 10));
console.log(mul_number_1 * Math.floor((mul_number_2 / 10) % 10));
console.log(mul_number_1 * Math.floor((mul_number_2 / 100)));
console.log(mul_number_1 * mul_number_2);

// 7. if
console.warn(' ');

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} > ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} < ${num2}`);
    } else {
        console.log(`${num1} == ${num2}`);
    }
}

console.log('7. if');
compare(1, 2);
compare(10, 2);
compare(5, 5);

// 8. test grade

function gradeByScore(num = 0) {

    if (num < 0 || num > 100) {
        console.log('score is not number');
    }
    if (num >= 90) {
        console.log('A');
    } else if (num >= 80) {
        console.log('B');
    } else if (num >= 70) {
        console.log('C');
    } else if (num >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
}

gradeByScore(100);


// 9. years

function getYear(num = 2000) {
    if ((num % 4 == 0 && num % 100 == 0) && num % 400 == 0) {
        console.log(`${num} 1`);
    } else {
        console.log(`${num} 0`);
    }
}

console.warn();
getYear();
getYear(1999);


// 10. quadrant 1 ~ 4

console.warn();
console.log('10. quadrant 1 ~ 4');

function quadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else {
        console.log(4);
    }
}

quadrant(12, 5);
quadrant(9, -13);


// 11.alarm

console.warn();
console.log('11. alarm');

function alarm(h, m) {
    let hour = 0;
    let min = 0;


    if (m < 45) {
        if (h == 0) {
            hour = 23;
        } else {
            hour = h - 1;
        }
        min = (m + 60) - 45;
    } else {
        hour = h;
        min = m - 45;
    }

    console.log(`${hour} : ${min}`);
}

alarm(10, 10);
alarm(0, 30);
alarm(23, 40);


// 12.multiplication 
console.warn();
console.log('12. mulitplicaion');

function multipllication(num) {
    for (let i = 1; i < 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multipllication(2);

// 13. A + B -3

console.warn();
console.log('13. A + B - 3');

function test(str) {
    const numbers = str.split(' ');
    if (numbers[1]) {
        console.log(Number(numbers[0]) + Number(numbers[1]))
    }

}


test('5');
test('1 1');
test('3 4');
test('9 8');
test('5 2');

// 14. n sum
console.warn();
console.log('14. n sum');

function n_sum(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log(`sum is ${sum}`);
}

n_sum(3);

//15. fast A+B


function test2(str) {
    const number = str.split(' ');
    const num = Number(number[0]);
    // let sum = 0;
    for (let i = 1; i <= num + 4; i += 2) {
        // sum += Number(number[i]) + Number(number[i + 1]) + '\n';
        console.log(Number(number[i]) + Number(number[i + 1]) + '\n');
    }
    // console.log(sum);
}

test2('5 1 1 12 34 5 500 40 60 1000 1000');

// 16. 1 ~ N

console.warn();
console.log('16. 1 ~ N list');

function from_One_To_N(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i + '\n');
    }
}

from_One_To_N(5);

// 17. N ~ 1 whip
console.warn();
console.log('17. from N to one whip : N = 5');

function from_N_To_One(number) {
    let result = '';
    for (let i = number; i > 0; i--) {
        result += i + '\n';
        //  console.log(i + '\n');
    }
    return result;
}

const N_1_result = from_N_To_One(5);
console.log(N_1_result);


// 18. A + B -7
console.warn();
console.log('18. A + B - 7');

function test3(str) {
    const arr = str.split("\n");
    console.log(arr);

    for (let i = 1; i <= arr[0]; i++) {
        let numbers = arr[i].split(' ');

        console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
    }

}

const result = test3('5\n1 1\n2 3\n3 4\n9 8\n5 2');

// 19. A + B -8
console.warn();
console.log('19. A + B - 8');

function test4(str) {
    const arr = str.split('\n');
    for (let i = 1; i <= Number(arr[0]); i++) {
        let numbers = arr[i].split(' ');
        console.log(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${Number(numbers[0]) + Number(numbers[1])}`);
    }

}
test4('5\n1 1\n2 3\n3 4\n9 8\n5 2');


// 20. left star 
console.warn();
console.log('20. left Star');
function left_star(height) {
    let result = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j <= i; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);


}

left_star(5);


// 21. right star 
console.warn();
console.log('21. left Star');
function right_star(height) {
    let result = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) {
            result += ' ';
        }

        for (let k = 0; k <= i; k++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);


}

right_star(5);


// 22. less than X
console.warn();
console.log('22. less than X');

function less_than(str) {
    const input = str.split('\n');
    const N = input[0].split(' ');
    const X = Number(N[1]);
    let result = '';
    let numbers = input[1].split(' ');
    // console.log(numbers);
    for (let i = 0; i < Number(N[0]); i++) {
        if (Number(numbers[i]) < X) {
            result += numbers[i] + ' ';
        } else {
            continue;
        }
    }
    console.log(result);
}


less_than('10 5\n1 10 4 9 2 3 8 5 7 6');

// 23. A+B - 5
console.warn();
console.log('10952:: A + B - 5');

function test5(str) {
    const num_arr = str.split('\n');
    let i = 0;
    let result = '';
    while (i < num_arr.length - 1) {
        let numbers = num_arr[i].split(' ');
        result += Number(numbers[0]) + Number(numbers[1]) + '\n';
        i++;
    }
    console.log(result);
}

test5('1 1\n2 3\n3 4\n9 8\n5 2\n0 0');


// 24. A+B - 4
console.warn();
console.log('10951:: 24. A + B - 4');

function test6(str) {
    const num_arr = str.split('\n');
    let i = 0;
    let result = '';
    while (i < num_arr.length - 1) {
        let numbers = num_arr[i].split(' ');
        result += Number(numbers[0]) + Number(numbers[1]) + '\n';
        i++;
    }
    console.log(result);
}

test6('1 1\n2 3\n3 4\n9 8\n5 2\n');


// 25. 1110 cycle plus number
console.warn();
console.log('1110:: 25. cycle plus number');

function test7(number) {

    let numbers = number.toString().split('');
    let i = 1;
    let status = true;
    let num = 26;



    while (status) {
        num = Number(numbers[0]) + Number(numbers[1]);

        if (num < 10) {
            num = numbers[1] + num;
        } else {
            num = numbers[1] + num.toString().split('')[1];
        }
        if (Number(number) === Number(num)) {
            status = false;
            break;
        }
        console.log(num);
        i++;
        numbers = num.toString().split('');
    }

    console.log(i);
}

test7(26);


// 26. 10818:: min, max
console.warn();
console.log('26. 10810:: Min, Max');

function minAndMax(str) {
    const arr = str.split('\n');
    const numbers = arr[1].split(' ');
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i <= Number(arr[0]); i++) {
        if (min > Number(numbers[i])) {
            min = Number(numbers[i]);
        }
        if (max < Number(numbers[i])) {
            max = Number(numbers[i]);
        }
    }

    console.log(`min: ${min}, max: ${max}`);
}

minAndMax('5\n20 10 35 30 7');


// 27.2562:: max, position
console.warn();
console.log('26. 2562:: max, position');

function get_Max_Position(arr) {
    let max = arr[0];
    let position = 0;
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            position = arr.indexOf(max);
        }
    }

    console.log(`max: ${max}, position: ${position + 1}`);
}

const input_arr = [3, 29,38,12,57,74,40,85,61];

get_Max_Position(input_arr);


// 28. 2577 number of numbers
console.warn();
console.log('28. 2577 number of numbers');

function number_of_numbers(a, b, c){
    let multiple_number = a * b * c;
    const numbers = multiple_number.toString().split('').map(n => Number(n));
    let zero = 0;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let seven = 0;
    let eight = 0;
    let nine = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0 ) {
            zero++;
        } else if(numbers[i] === 1) {
            one++;
        }  else if(numbers[i] === 2) {
            two++;
        } else if(numbers[i] === 3) {
            three++;
        } else if(numbers[i] === 4) {
            four++;
        } else if(numbers[i] === 5) {
            five++;
        } else if(numbers[i] === 6) {
            six++;
        } else if(numbers[i] === 7) {
            seven++;
        } else if(numbers[i] === 8) {
            eight++;
        } else {
            nine++;
        }
        
    }
    console.log(`${zero} ${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine}`);
}

number_of_numbers(150, 266, 427);

//29. 3052:: remainder
console.warn();
console.log('3053:: remainder');

function remainder(arr) {
    let remainder_numbers = arr.split(',').map(n => Number(n));
    console.log(remainder_numbers);
    let temp = [];
    let remainder_num = 0;
    let count = 0;
    for(let i = 0; i < remainder_numbers.length; i++) {
        remainder_num = remainder_numbers[i] % 42;
        if(!temp.includes(remainder_num)) {
            temp.push(remainder_num);
            count++;
        } 
    }
    console.log(temp);
    console.log(count);
}

remainder('1,2,3,4,5,6,7,8,9,10');


// 30. 1546:: average grade
console.warn();
console.log('30. 1546:: average grade ');

function average_grade(str) {
    let input = str.split('\n');
    let N = input[0];
    let scores = input[1].split(' ');
    let sum = 0;
    let M = Math.max(...scores);
    let avg = 0;
    for(let i = 0; i < N; i++) {
        // if(M < scores[i]) {
        //     M = scores[i];
        // }

        sum += scores[i] / M * 100;
        
    }
    
    avg = sum / N;
    console.log(avg);

}

average_grade('3\n10 20 30');

// 31. 8958:: OX quiz
console.warn();
console.log('31.8958:: O / X Quiz');

function O_X_quiz(str) {
    let input = str.split('\n');
    let n = input[0];
    let OX_arr = input[1].split(' ');
    let count = 0;
    let temp = [];
    let sum = [];
    for(let i = 0; i < n; i++) {
        let detail_arr = OX_arr[i].split('');
        console.log(detail_arr);
        temp.push([]);
        for(let j = 0; j < detail_arr.length; j++) {
            if (OX_arr[i][j] === 'O') {
                count++;
                temp[i].push(count);
            } else {
                count = 0;
                temp[i].push(count);
            }
        }
        count = 0;
        sum.push(temp[i].reduce((prev, curr)=> prev + curr));
        
    }
    console.log(temp);
    console.log(sum);
}

O_X_quiz('5\nOOXXOXXOOO OOXXOOXXOO OXOXOXOXOXOXOX OOOOOOOOOO OOOOXOOOOXOOOOX');


//32. 4344:: hmm, over aberage score?
console.warn();
console.log('32. 4344:: hmm, over aberage score?');

function over_average(str) {
    let input = str.split('\n');
    let length = input[0];
    let sum = 0;
    let temp = [];
    let count = 0;
    let avg = 0;
    for(let i = 1; i <= length; i++) {
        let second_input = input[i].split(' ');
        // console.log(second_input);
        let second_length = Number(second_input[0]);
        temp.push([]);
        // console.log('second_length', second_length);
        for(let j = 1; j <= second_length; j++) {
            // console.log(second_input[j]);
            // second_input]
            sum += Number(second_input[j]);
            // console.log(second_input[j]);
            avg = sum /second_length;
            
            
        }

        for(let k = 1; k <= second_length; k++) {
            if(second_input[k] > avg) {
                count++;
            }
        }
        
        temp[i] = (count / second_length * 100).toFixed(3) + '%';
        // console.log(second_input);
        temp[0] = length;
        // console.log(avg);
        count = 0;
        sum = 0;
    }
    console.log(temp);
    
}

over_average('5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91');