// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    let sum = nums.reduce(function (acc, cur) {
        return acc + cur
    })
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0;
    for (; number > 0; number = Math.trunc(number / 10)) {
        sum += number % 10
    }
    return sum
    // let sum = 0;
    // while (number) {
    //     sum += number % 10;
    //     number = (number - number % 10) / 10;
    // }
    // return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {

    let result = 0
    arr.forEach((elm, i) => i % 2 ? result -= elm : result += elm)
    return result > 0
    // export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //     const sums: Array<number> = arr.reduce((acc, el, i) => {
    //         acc[i % 2] += el
    //         return acc
    //     }, [0, 0])
    //     return sums[0] > sums[1]
    // }
    // В return стоит "заглушка", чтоб typescript не ругался
    return true
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(n => n > 0 && n % 2 === 0).map(n => Math.pow(n, 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if(N===0){
        return 0
    }
    return sumFirstNumbers(N-1)+N
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}