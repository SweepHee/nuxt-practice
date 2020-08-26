module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false, // 필수로 설정
						unique: true, // 중복금지
        },
        nickname: {
            type:DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        // 자동으로 id, createdAt, updatedAt 추가 된다
    }, {
        charset: "utf8", // utf-8 아니고 utf8이더라
        collate: "utf8_general_ci", // 한글 저장
    });
    User.associate = (db) => {
        
    };
    return User;
};