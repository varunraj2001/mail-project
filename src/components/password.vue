<template>
    <el-container class="box">
        <el-card class="card">
            <el-header><el-image style="width: 125px;margin-left: 30%;margin-top: 1%;" src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" />
            <h4 style="margin-left: 30%;margin-top: 1%;font-size: x-large;">Enter Password</h4>
            <p>Enter the password for the entered email ID</p>
        </el-header>
        <el-main >
            <el-input class="input" :type="check? 'text' : 'password'" v-model='inputpassword' placeholder="Input Password"></el-input>
            <el-checkbox class="checkbox" label="Show Password" size="large" v-model="check"/>
            <el-link type="primary" @click="router.push('/forgotpassword')" class="link">Forgot password?</el-link>
            <el-button class="but" @click="router.push('/mainPage')" type="primary">Next</el-button>
        </el-main>
        </el-card>
    </el-container>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const inputpassword = ref('')

const check = ref(false)

</script>


<style scoped>
.box
{
    margin-left: 35%;
    margin-top: 10%;
}
.card
{
    width: 400px;
    height: 500px;
}
.input
{
    margin-top: 35% ;
    width: 300px ;
    height: 50px;
}
.link
{
    margin-top: 30%;
    margin-left: -40% ;
}
.but
{
    margin-top: 30%;
    margin-left: 45%;
}
.para
{
    margin-top: 12%;
}
.checkbox
{
    margin-left: 0%;
    margin-top: 1%;
}
</style>