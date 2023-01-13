// **043. 마이페이지**

// **`문제 설명`**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a8ffd8-31ed-4d91-ab5e-67df2c64f257/_2021-04-21__3.34.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a8ffd8-31ed-4d91-ab5e-67df2c64f257/_2021-04-21__3.34.42.png)

// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.

// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 

// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 반복문을 통해 문제를 풀어야 합니다.
// - myShopping 내용을 직접 수정하면 안 됩니다.
// - 예상 결과에 나온 문~~구와 형식이 같아야 합니다.~~

// **`예상 결과`**

// ```jsx
// 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.
// ```

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price:10000 },
  { category: "의류", price: 20000},
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000  },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000  },
  { category: "의류", price: 10000 },
]

const ClothesCheck = (shopping) => {
  let count = 0
  let price = 0
  let grade = ""

  for(let i = 0; i < shopping.length; i++) {
    if(shopping[i].category === "의류") {
      count ++;
      price += shopping[i].price;
    }

    if (count >= 5) {
      grade = "Gold";
    } else if (count >= 3 && count <= 4) {
      grade = "Silver";
    } else if(count >= 0 && count <= 2) {
      grade = "Bronze";
    }
  }
  return `의류를 구매한 횟수는 총 ${count}회, 금액은 ${price}원이며 등급은 ${grade}입니다.`
}