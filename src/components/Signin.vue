<template>
    <el-container class="box">
        <el-card class="card">
                <el-header><el-image style="width: 125px;margin-left: 30%;margin-top: 1%;" src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" />
            <h4 style="margin-left: 35%;margin-top: 1%;font-size: x-large;"> Sign In</h4>
            <p class="content">to continue to Gmail</p>
        </el-header>
        <el-main >
            <el-input class="input" v-model="input" placeholder="Enter the Gmail id"></el-input>
            <p class="para">Not your computer? Use Guest mode to sign in privately.<el-link type="primary">Learn more.</el-link></p>
            <el-link type="primary" class="link" @click="router.push('/createacc')">Create new account?</el-link>
            <el-button class="but"  @click="router.push('/password')" type="primary">Next</el-button>
        </el-main>
        </el-card>
    </el-container>
    <el-row>
        <el-col :span="3" offset="0" style="margin-top: 1%;margin-left: 35%;">
            <el-dropdown v-model="lan" trigger="click">
            <span>
            {{ lan }}
            <el-icon><CaretBottom /></el-icon>
            </span>
        <template #dropdown>
            <el-dropdown-menu>
                <span v-for="lang of langs">
                    <el-dropdown-item @click="lan = lang">{{lang}}
                    </el-dropdown-item>
                </span>
            </el-dropdown-menu>
        </template>
        </el-dropdown>
    </el-col>
  
    <el-col :span="3" offset="0" style="margin-left: 2%; margin-top: 16px">
        <el-button type="" text plain size="small">Help</el-button>
        <el-button type="" text plain size="small">Privacy</el-button>
        <el-button type="" text plain size="small">Terms</el-button>
    </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const input= ref('');

const lan = ref("English (United Kingdom)");
const langs = ref([
    "English (United Kingdom)",
    "Português(Portugal)",
    "தமிழ்",
    "Chinese",
    "English (United States)",
]);
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
.content
{
    margin-top: -10%;
    margin-left: 30%;
}
.input
{
    margin-top: 35% ;
    width: 300px ;
}
.link
{
    margin-top: 40%;
}
.but
{
    margin-top: 35%;
    margin-left: 40%;
}
.para
{
    margin-top: 12%;
}

</style>