const express = require("express");

const app = express();

// 기본적으로 익스프레스는 json을 못 받는다. 아래 선언해야 함.
app.use(express.json());

// form을 통해서 전송된 데이터를 req.body로 받으려면 아래 선언해줘야 함.
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("안녕 시퀄라이즈");
})

app.post("/user", (req, res) => {
    console.log(req.body);
})

app.listen(3085, () => {
    console.log(`백엔드 서버 ${3085}번 포트에서 작동중`);
});