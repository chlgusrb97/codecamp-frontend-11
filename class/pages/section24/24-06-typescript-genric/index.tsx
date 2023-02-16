// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//
//
// 1. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result = getAny("철수", 123, true);

//
//
// 1. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result = getUnknown("철수", 123, true);

//
//
// 1. generic 타입
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  // 값이 들어간 타입에 따라 타입이 변한다.
  return [arg3, arg2, arg1];
}

const result = getGeneric<string, string, number>("철수", 123, true);
// 직접 타입을 설정해주려면 <> 안에 해당 자릿수에 타입을 정해주면 된다.

// ex)
// const [count, setCount] = useState<number>(0);

//
//
// 1. generic 타입
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric2<string, string, number>("철수", 123, true);

//
//
// 1. generic 타입
const getGeneric3 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  // 값이 들어간 타입에 따라 타입이 변한다.
  return [arg3, arg2, arg1];
};

const result = getGeneric3<string, string, number>("철수", 123, true);
