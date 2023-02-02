// const qqq: string = "안녕하세요";

// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppdataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122",
  port: 5002,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppdataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!");
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: ", error);
  });
