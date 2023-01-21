export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile> // IProfile 안에 ? 전부 붙이기

// 2. Required 타입
type bbb = Required<IProfile> // IProfile 안에 있는 ? 삭제됨

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age"> // 선언한 값만 빼오기

// 4. Omit 타입
type ddd = Omit<IProfile, "school"> // 선언한 값만 없애기

// 5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입 ( 합집합 )
let child1: eee = "철수" // Union 타입으로 선언을 해주면 선언되어있는 Union 안에 값만 가져올 수 있음.
let child2: string = "사과" // 원하는 문자 아무거나 넣어도 돼서 Union과의 차이가  있다.

type fff = Record<eee, IProfile> // Record 타입 : 선언한 Union타입을 가져와 key로 선언할 수 있음.

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby"

// 7. type vs interface 차이  =>  interface는 선언병합 가능
export interface IProfile {
  candy: Number // 선언병합으로 추가됨
}

// 8. 배운것 응용
let profile: Partial<IProfile> = {
  candy: 10
}