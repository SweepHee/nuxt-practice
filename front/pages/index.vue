<template>
    <div>
        <section class="main1" data-aos="fade-down" data-aos-duration="1500">
            <div class="bg">
                <div class="container">
                    <div class="text-wrap">
                        <div class="fs-47">
                            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">수퍼트리,</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">블록체인으로 연결된</p>
                            <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">새로운 게임 세상을</p>
                            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">만들어갑니다</p>
                        </div>
                        <div class="fs-19">
                            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Our mission is to create a world Digital assets are</p>
                            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">more valuable and accessible to everyone</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
            <div class="test">
                <button type="button" @click="test">클릭!</button>
                {{ user }}
            </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            user: ["data"]
        }
    },
    mounted() {
        this.user = this.$store.dispatch("users/getUserList", {});
    },
    methods: {
        test() {
            const list = this.$store.state.users.list;
            this.user = list;
        }
    }

}
</script>


<style>

    section.main1 .bg {
        background: url("~assets/img/main_01_bg.png") no-repeat;
        width: 100%;
        height: 980px;
        text-align: right;
    }

    section.main1 .bg .text-wrap {
        padding-top: 340px;
    }

    section.main1 .bg .text-wrap > div {
        color: #ffffff;
        line-height: 1.2;
        font-family: 'S-CoreDream-6Bold';
    }

     section.main1 .bg .text-wrap > div.fs-19 {
         margin-top: 30px;
        font-family: 'S-CoreDream-4Regular';
        line-height: 1.3;
    }




    
</style>