// 1. HOF - 일반함수
function first<T, U>(arg1: T) {
  return function second(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

//
//
// 1. HOF - 일반함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2]
}

const result = first2("영희")(8);

//
//
// 1. HOF - 일반함수
// prettier-ignore
const 로그인체크 = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props]
}

const result = 로그인체크("영희")(8);
