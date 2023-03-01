<template>
    <el-container class="box">
        <el-card class="card">
            <el-header><el-image style="width: 125px;margin-left: 30%;margin-top: 1%;" src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" />
            <h4 style="margin-left: 25%;margin-top: 1%;font-size: x-large;">Change password</h4>
            <p>Create new password for the email ID</p>
        </el-header>
        <el-main >
            <el-input class="input" :type="check? 'text' : 'password'" v-model='passwordInput' placeholder="Input new Password"></el-input>
            
            <el-input style="margin-top: 1%;margin-left: 0%;width: 297px;height:50px" v-model='passwordInput2' placeholder="Confirm new Password"></el-input>
            <el-checkbox style="margin-top: 0%; margin-left: 0%;" label="Show Password" size="large" v-model="check"/>
            <el-link type="primary" style="margin-left: -40%; margin-top: 40%;">Try another way</el-link>
            <el-button style="margin-left: 70%;margin-top: -10%;" @click="router.push('/')" type="primary">Next</el-button>
        </el-main>
        </el-card>
    </el-container>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const passwordInput = ref('')
const passwordInput2 = ref('')

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

</style>