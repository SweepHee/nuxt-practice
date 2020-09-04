<template>
    <section id="SECTION1">
        <div class="form-wrap">
            <form method="post" name="signupForm" @submit.prevent="signupAction">
                <table>
                    <tr>
                        <td><label for="email">이메일</label></td>
                        <td><input type="text" v-model="email" name="email" id="email"></td>
                    </tr>
                    <tr>
                        <td><label for="name">이름</label></td>
                        <td><input type="text" v-model="name" name="name" id="name"></td>
                    </tr>
                    <tr>
                        <td><label for="password">비밀번호</label></td>
                        <td><input type="password" v-model="password" name="password" id="password"></td>
                    </tr>
                    <tr>
                        <td><label for="passwordCheck">비밀번호확인</label></td>
                        <td><input type="password" v-model="passwordCheck" name="passwordCheck" id="passwordCheck"></td>
                    </tr>
                </table>
                <div class="btn-wrap">
                    <button>sign up</button>
                </div>
            </form>
        </div>
        <FlashMessage :position="'right bottom'"/>
    </section>
</template>  

<script>
export default {
    data() {
        return {
            email: "",
            name: "",
            password: "",
            passwordCheck: "",
        }
    },
    methods: {
        signupAction() {

            let msg = [];
            const f = document.signupForm;
            
            this.flashMessage.setStrategy('multiple');

            if(this.email === "") {
                msg.push("이메일을 입력해주십시오.");
                f.email.focus();
            }

             if(this.name === "") {
                msg.push("이름을 입력해주십시오.");
                f.name.focus();
            }

            if(this.password === "") {
                msg.push("비밀번호를 입력해주십시오.")
                f.password.focus();
            }

            if(this.passwordCheck === "") {
                msg.push("비밀번호 확인을 입력해주십시오.");
                f.passwordCheck.focus();
            }

            if(this.password !== this.passwordCheck) {
                msg.push("비밀번호가 일치하지 않습니다.");
            }
            
            if(msg[0] != undefined) {

                msg.forEach((item, index) => {
                    this.flashMessage.show({
                           // title: 'Custom Styled Message',
                            message: item,
                            icon: '/custom_style.svg',
                            time: 3000,
                            blockClass: 'onlyMessage1'
                        }
                    );
                })

                return false;
            }

            this.$store.dispatch("users/signUp", {
                email: this.email,
                password: this.password,
                name: this.name
            })
        }
    }
}
</script>

<style>
    #SECTION1 {
        width: 100%;
        height: 100vh;
        background-color: #34495e;
    }

    #SECTION1 .form-wrap {
        width:100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 14px;
    }

    .btn-wrap {
        text-align: center;
        margin: 10px auto;
    }
    .btn-wrap button {
        background-color: #ffffff;
        border: 1px solid;
        padding: 4px;
    }


    .onlyMessage1 {
        border: 1px solid red;
    }

    .onlyMessage1 ._vue-flash-msg-body__content {
        padding: 0;
    }

    .onlyMessage1 ._vue-flash-msg-body__icon {
        padding: 0;
    }

    .onlyMessage1 h3 {
        margin: 0;
        height: 0;
        padding:0;
        width: 0;
    }

    .onlyMessage1 p {
        padding: 15px;
    }
</style>