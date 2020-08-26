const express = require("express");
const db = require("./models");
const { sequelize } = require("./models");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("안녕 시퀄라이즈");
})

app.post("/user", async (req, res) => {
    
    let query = "select * from users where :id ";
    let User = await sequelize.query(
        query,
        {
            replacements: { id: "1" },
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    );

    console.log(User);
    res.json(User);
})

app.listen(3085, () => {
    console.log(`백엔드 서버 ${3085}번 포트에서 작동중`);
});