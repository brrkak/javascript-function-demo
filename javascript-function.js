/*
1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
*/

// 1
function foo(arg){
    arg();
}
function bar(){
    console.log('bar');
}
foo(bar) // bar

// 2.
function foo(arg){
    return arg;
}
function bar(){
    console.log('bar');
}
foo(bar)() // bar

// 3, 4
const foo = function (arg){
    return console.log(arg);
}
foo(1)





/*
1. 기본값 매개변수 default function parameter
2. 나머지 매개변수 Rest parameter
3. arguments 객체
 */

// 1 
function foo(arg = 1){
    console.log(arg);
}
foo(); // 1

// 2
function foo(arg, ...rest){
    console.log(rest); // [2,3]
    return console.log(arg) // 1
}
foo(1,2,3)

// 3
function foo(arg, ...rest){
    console.log(arguments);
}
foo(1,2,3)
// [Arguments] { '0': 1, '1': 2, '2': 3 }

/*
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수 표현식
*/
// 1.
function foo(){
    console.log('foo');
}
foo(); // foo

// 2.
const foo = function(){
    console.log('foo2');
};
foo();

// 3.
const foo = new Function("console.log('foo3')" );

foo()


// 4. 
const foo = () => {
    console.log('foo4');
}

foo(); // foo4

/* 
1. IIFE (즉시 실행 함수)
2. 재귀 함수
3. 중첩 함수
4. 콜백 함수    
*/

// 1.
function foo() {
    console.log('foo');
}

// 2.
function foo(arg){
    if(arg === 3) return;
    console.log(arg);
    foo(arg + 1)
}
foo(1) // 1, 2

// 3.
function foo(arg){
    function bar(){
        console.log(arg);
    }
    bar(1); // 1
}

// 4.
function foo(arg){
    arg();
}

foo(() => {
    console.log(1);
}) // 1

