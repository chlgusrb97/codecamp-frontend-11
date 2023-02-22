import axios from "axios";
import { useState } from "react";

export default function CallbackPage() {
  const [contents, setContents] = useState([]);

  const onClickCallback = () => {
    const qqq = new XMLHttpRequest();
    qqq.open("get", "http://numbersapi.com/random?min=1&max=200");
    qqq.send();
    qqq.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];

      const www = new XMLHttpRequest();
      www.open("get", `https://koreanjson.com/posts/${num}`);
      www.send();
      www.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const eee = new XMLHttpRequest();
        eee.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        eee.send();
        eee.addEventListener("load", (res: any) => {
          setContents(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then(() => {
        return axios.get("http://numbersapi.com/random?min=1&max=200");
      })
      .then((qqq) => {
        const num = qqq.request.response.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((www) => {
        const userId = www.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((eee) => {
        setContents(eee.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const result1 = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    const num = result1.data.split(" ")[0];

    const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = result2.data.UserId;

    const result3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );

    setContents(result3.data);
  };

  return (
    <>
      결과: <button onClick={onClickCallback}>Callback</button>
      <br />
      결과: <button onClick={onClickPromise}>Promise</button>
      <br />
      결과: <button onClick={onClickAsyncAwait}>Async/Await</button>
      <br />
      {contents.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
    </>
  );
}
