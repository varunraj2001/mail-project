<template>
    <el-container >
        
        <!-- MAIN HEADER -->
        <el-header style="margin-top: -1%; margin-left: -1.8%; width: 100% ; height: 12px;" >
            
            <el-row style="width:1534px">
                <el-menu model="horizontal" text-color="#fff" 
                style="width: 1538px; margin-top: 0%;background-color: rgb(241,240,240);">
                
                <el-menu-item index="1" v-show="isCollapse == true" @click="isCollapse = !isCollapse">
                    <el-icon style="color: #454545"><Expand /></el-icon>
                </el-menu-item>

                <el-menu-item v-show="isCollapse == false" index="1" @click="isCollapse = !isCollapse">
                    <el-icon style="color: #454545"><Fold /></el-icon>
                </el-menu-item>

                <el-menu-item index="3">
                    <el-image style="margin-left: 4%; margin-top: -8%" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" ></el-image>
                </el-menu-item>
                
                <el-menu-item index="4">
                    <el-input v-model="search" 
                    style="width:700px;
                    margin-left: 12%;
                    height:40px;
                    margin-top: 2%;
                    margin-bottom: 16%;" 
                    placeholder=" Search mail"
                    :prefix-icon="Search" :suffix-icon="Operation">
                    </el-input>
                </el-menu-item>

                <el-menu-item index="5" style="margin-left:82%; color: #454545; margin-top: -10%">
                    <el-icon :size="25"><QuestionFilled /></el-icon>
                </el-menu-item>

                <el-menu-item index="6" style="margin-left: 85%; color: #454545; margin-top: -3.75%">
                    <el-icon :size="25"><Setting /></el-icon>
                </el-menu-item>

                <el-menu-item index="7" style="margin-left: 88%; color: #454545; margin-top: -3.6%">
                    <el-icon :size="25" @click="menu = !menu"><Grid /></el-icon>
                </el-menu-item>

                <el-menu-item index="8" style="margin-left: 91%; color: #454545; margin-top: -3.6%">
                    <el-avatar :size="29" @click="accounts = true">
                        <UserFilled/>
                    </el-avatar>
                </el-menu-item>
                </el-menu>
            </el-row>
        </el-header>
        <el-container>

            <!-- CONTENT TOP BAR -->

            <el-header style="margin-left: 10%">
                <el-row style="margin-left: -1%; margin-top: 6%">
                <el-dropdown v-model="lan" trigger="click">
                    <span >{{ lan }}
                        <el-icon><CaretBottom /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu><span v-for="lang of langs">
                            <el-dropdown-item @click="lan = lang">{{ lang }}</el-dropdown-item></span>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                    <el-icon style="margin-left: 2%"><RefreshLeft /></el-icon>
                    <el-icon style="margin-left: 2%"><More /></el-icon>
                </el-row>
            </el-header>

            <!-- SIDE CONTENT -->
            
            <el-aside @mouseenter="isCollapse = false"
            style="width: min-content; margin-left: -1%;margin-top: 0%;"
            @mouseleave="isCollapse=true">

            <el-menu :collapse="isCollapse"
            style="margin-left: 0%;margin-top: -10%; background-color: rgb(241, 240, 240)">

                <el-menu-item index="0"
                style="margin-top: 10%"
                 @click="visible = !visible">
                    <el-icon style="margin-right: 0%"><EditPen /></el-icon>
                    <template #title>Compose </template>
                </el-menu-item>

                <el-menu-item index="1" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><Picture /></el-icon>
                    <template #title>Inbox</template>
                </el-menu-item>

                <el-menu-item index="2" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><Star /></el-icon>
                    <template #title>Starred</template>
                </el-menu-item>

                <el-menu-item index="3" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><clock /></el-icon>
                    <template #title>Snoozed</template>
                </el-menu-item>
                
                <el-menu-item index="4" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><Promotion /></el-icon>
                    <template #title>Direct</template>
                </el-menu-item>

                <el-menu-item index="5" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><document /></el-icon>
                    <template #title>Drafts</template>
                </el-menu-item>

                <el-menu-item index="6" style="margin-top: 0%">
                    <el-icon style="margin-right: 7%"><Setting /></el-icon>
                    <template #title>Setting</template>
                </el-menu-item>

                <el-menu-item index="7" style="margin-top: 0%" @click="text = !text">
                    <el-icon style="margin-right: 7%"><ChatLineSquare /></el-icon>
                    <template #title>Text</template>
                </el-menu-item>
                
                <el-menu-item index="8" style="margin-top: 0%" @click="group = true">
                    <el-icon style="margin-right: 7%"><User /></el-icon>
                    <template #title>Group</template>
                </el-menu-item>
            </el-menu>
            </el-aside>
        
            <el-main>
                <el-table 
                
                :data="tableData"
                style="width:90%;position:fixed;font-family:Arial, Helvetica, sans-serif;margin-left: 8%;margin-top: -31%;">
                    <el-table-column width="40">
                        <template #default="scope">
                            <el-icon v-show="scope.row.select == true" size="16"><CircleCheckFilled/></el-icon>
                            <el-icon v-show="scope.row.select == false" size="16"><CircleCheck/></el-icon>
                        </template>
                    </el-table-column>

                    <el-table-column width="40">
                        <template #default="scope">
                            <el-icon v-show="scope.row.star == true" size="15"><StarFilled/></el-icon>
                            <el-icon v-show="scope.row.star == false"><Star /></el-icon>
                        </template>
                    </el-table-column>

                    <el-table-column property="name" width="200" />

                    <el-table-column width="1000">
                        <template #default="scope"><b>{{ scope.row.sub }}</b>-{{ scope.row.main }}</template>
                    </el-table-column>

                    <el-table-column width="70">
                        <template #default="scope">{{ scope.row.date }}</template>
                    </el-table-column>

                </el-table>
            </el-main>
        </el-container>
    </el-container>
    
    <!-- COMPOSE MAIL DIALOG BOX -->
    <el-dialog v-model="visible" style="  width: 600px; height: 500px; margin-left: 58%; margin-top: 14%; border-radius: 9px;">
        <el-row style="margin-top: -10.7%; background-color: rgb(225, 236, 236);
            margin-left: -3.6%; width: 600px; margin-right: 9%; height: 45px;">
            <p style=" margin-top: 3%; margin-left: 2.5%; font-family: Arial, Helvetica, sans-serif;">
            <b>New message</b>
            </p>
            <el-icon style="margin-top: 3%; margin-left: 65%"><Minus /></el-icon>
            <el-icon style="margin-top: 2.4%; margin-left: 5%"><TopRight /></el-icon>
            <el-icon style="margin-top: 3.7%; margin-left: -3.7%"><BottomLeft/></el-icon>
            <el-icon style="margin-top: 3%; margin-left: 4%" @click="visible = false"><Close /></el-icon>
        </el-row>
        <el-row>
            <p style="font-family: Arial, Helvetica, sans-serif">Recipients</p>
        </el-row>
        <hr style="margin-top: -1%; opacity: 0.2" />
        <el-row style="margin-top: -1%">
            <p style="font-family: Arial, Helvetica, sans-serif; margin-top: 2%">Subject</p>
        </el-row>
        <hr style="margin-top: -1%; opacity: 0.2" />
        <el-row style="margin-top: 58%">
            <el-button type="primary" round style="width: 80px; background-color: blue">Send
                <el-icon style="margin-left: 6%"><CaretBottom />
                </el-icon>
            </el-button>

            <span style="margin-left: 1%; margin-top: 1%"><b>A</b></span>
            <el-icon style="margin-top: 3%; margin-left: -2.6%" size="20"><SemiSelect/></el-icon>

            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><Paperclip/></el-icon>

            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><Link/></el-icon>
            
            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><Picture/></el-icon>
            
            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><Lock/></el-icon>
            
            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><EditPen/></el-icon>
            
            <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"><MoreFilled/></el-icon>
            
            <el-icon size="16" style="margin-left: 39%; margin-top: 1%; color: black"><Delete/></el-icon>
        </el-row>
    </el-dialog>

    <!-- MENU DIALOG BOX -->

    <el-dialog v-model="menu" style=" width: 300px; height: 362px; margin-left: 80%; margin-top: 4%; border-radius: 9px;" :show-close="false">
        <el-row style="margin-left: 11%; margin-top: -11%">
            <el-avatar :size="40"><UserFilled /></el-avatar>
            <el-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-eslJQ6txuLxpbjFtkzMxU5_zVPGoQ_-urCSknw&s"
                style="width: 40px; height: 40px; margin-left: 22%"/>
            <el-image src="https://www.pngitem.com/pimgs/m/2-29389_google-maps-logo-hd-png-download.png"
                style="width: 40px; height: 40px; margin-left: 20%"/>
        </el-row>
        <el-row style="margin-top: -6%">
            <p style=" margin-left: 10%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Account</p>

            <p style=" margin-left: 18%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Search</p>
      
            <p style=" margin-left: 17%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Maps</p>
        </el-row>

        <el-row style="margin-top: 5%">
            <el-image src="https://t4.ftcdn.net/jpg/03/04/06/01/360_F_304060171_OUUSKIITlOLRgnDI1EFO8eSZqOHab6Iq.jpg"
                style="width: 50px; height: 50px; margin-left: 9%"/>
            <el-image src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-logo-google-play-game-google-play-store-app-00.jpg"
                style="width: 50px; height: 50px; margin-left: 19%"/>
            <el-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                style="width: 40px; height: 40px; margin-left: 12%; margin-top: 4%"/>
        </el-row>
        
        <el-row style="margin-top: -6%">
            <p style=" margin-left: 10%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Youtube</p>
        
            <p style=" margin-left: 21%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;"> Play</p>
      
            <p style=" margin-left: 18%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif; ">Gmail</p>
        </el-row>
    
        <el-row style="margin-top: 5%">
            <el-image src="https://download.logo.wine/logo/Google_Meet/Google_Meet-Logo.wine.png"
                style="width: 50px; height: 50px; margin-left: 10%"/>
            <el-image src="https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx"
                style="width: 50px; height: 50px; margin-left: 19%"/>
            <el-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/2048px-Google_Drive_logo.png"
                style="width: 50px; height: 50px; margin-left: 10%"/>
        </el-row>
        
        <el-row style="margin-top: -6%">
            <p style=" margin-left: 15%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Meet</p>
            
            <p style=" margin-left: 23%; margin-top: 7%; font-family: Arial, Helvetica, sans-serif;">Chat</p>
      
            <p style=" margin-left: 20%;margin-top: 7%;font-family: Arial, Helvetica, sans-serif;"> Drive</p>
        </el-row>
    </el-dialog>

    <!-- TEXT DIALOG BOX -->

    <el-dialog v-model="text" style=" width: 200px; height: 500px; margin-left: 4%; margin-top: 9%; border-radius: 9px;" :show-close="false">
        <el-row style=" margin-top: -37%; background-color: rgb(225, 236, 236); margin-left: -12%; width: 198px; margin-right: 9%; height: 45px; border-radius: 5px;">
            <el-icon style="margin-top: 6.6%; margin-left: 16%" size="20"><ChatSquare/></el-icon>
            <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif"><b> New Text</b></p>
        </el-row>
    
        <el-icon style="margin-top: 100.6%; margin-left: 35%" size="30"><ChatSquare/></el-icon>
            <p style="margin-top: 6.6%; margin-left: 16%">No conversations</p>
            <el-link type="primary" style="margin-top: -10%; margin-left: 24%">Start a text</el-link>
    </el-dialog>

    <!-- GROUP DIALOG BOX -->

    <el-dialog v-model="group" style=" width: 200px; height: 500px; margin-left: 4%; margin-top: 9%; border-radius: 9px;" :show-close="false">
        <el-row style="margin-top: -37%;background-color: rgb(225, 236, 236);margin-left: -12%;width: 198px;margin-right: 9%;height: 45px;border-radius: 5px;">
            <el-icon style="margin-top: 6.6%; margin-left: 16%" size="20"><Plus/></el-icon>
            <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif">
                <b> New group</b>
            </p>
        </el-row>
        <el-icon style="margin-top: 100.6%; margin-left: 35%" size="30"><Notebook/></el-icon>
        <p style="margin-top: 6.6%; margin-left: 21%">No groups yet</p>
        <el-link type="primary" style="margin-top: -10%; margin-left: 10%">Create or find group</el-link>
    </el-dialog>

    <!-- ACCOUNT DIALOG BOX -->

    <el-dialog v-model="accounts" style=" width: 400px; height: 370px; margin-left: 73%; margin-top: 3.7%; border-radius: 15px;" :show-close="false">
        <el-row style="margin-left: 1%; margin-top: -11%">
            <el-avatar :size="50" :src="circleUrl" />
            <p style=" margin-left: 2%;margin-top: 2%;font-size: medium;font-weight: 400;font-family: Arial, Helvetica, sans-serif;">Varunraj</p>
            <p style="margin-left: -15%; margin-top: 7%">varunraj@gmail.com</p>
        </el-row>
        <el-button plain style="border-radius: 5px; margin-left: 17%; margin-top: 5%; width: 250px">Manage your Google account</el-button>
        <hr style="margin-top: 8%; opacity: 0.5" />
        <el-row style="margin-left: 4%; margin-top: 3.4%">
            <el-avatar :size="30" :src="circleUrl" />
            <p style=" margin-left: 5%;margin-top: 0%;font-size: medium;font-weight: 400;font-family: Arial, Helvetica, sans-serif;">Chandrasekaran</p>
            <p style="margin-left: -35%; margin-top: 6%">chandrasekaran@gmail.com</p>
        </el-row>
        <el-row style="margin-left: 4%; margin-top: 3%">
            <el-icon :size="20" style="margin-left: 2%; margin-top: 1.3%"><Avatar/></el-icon>
            <el-icon :size="10" style="margin-left: -1.6%; margin-top: 1.9%"><Plus/></el-icon>
            <p style="margin-left: 5%;margin-top: 1.9%;font-size: small;font-weight: 500;font-family: Arial, Helvetica, sans-serif;">Add another account</p>
        </el-row>
        <el-row style="margin-left: 4%; margin-top: 3%">
            <el-icon :size="20" style="margin-left: 2%; margin-top: 1.3%"><RemoveFilled/></el-icon>
            <p style="margin-left: 5%;margin-top: 1.9%;font-size: small;font-weight: 500;font-family: Arial, Helvetica, sans-serif;">Sign out of all accounts</p>
        </el-row>
        <hr style="margin-top: 5%; opacity: 0.3" />
        <el-row style="margin-left: 23%; margin-top: -3%">
            <el-link>Privacy policy</el-link>
            <p style="margin-left: 3%"><b>.</b></p>
            <el-link style="margin-left: 3%"> Terms of Service</el-link>
        </el-row>
    </el-dialog>


</template>

<script lang="ts" setup>
import { ref } from 'vue'; 

import { Search, Operation, QuestionFilled, Delete, ChatLineSquare, Plus, RemoveFilled }from '@element-plus/icons-vue'

const circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

const group = ref(false);
const text = ref(false);

const visible = ref(false);

const lan = ref("All");
const langs = ref(["All", "None", "Read", "Unread", "Starred", "Unstarred"]);

const menu = ref(false);
const search = ref("");
const isCollapse = ref(false);
const accounts = ref(false);

const tableData:User[]=[
    {
        date: "Feb 01",
        name: "SLACK",
        sub: "No Attendance Logged ",
        main: " New messages from your Avow Solutions Inc coworkers",
        star: false,
        select: true,
    },
    {
        date: "Jan 31",
        name: "SWIGGY",
        sub: "Meal on the way ",
        main: " Order your fav meal of the day",
        star: false,
        select: false,
    },
    {
        date: "Jan 30",
        name: "AVOW",
        sub: "Weekly Off ",
        main: " One day Weekly off is provided",
        star: true,
        select: false,
    },
    {
        date: "Jan 29",
        name: "ZOMATO",
        sub: "Order delivered ",
        main: " The order has been delivered in the given location",
        star: false,
        select: true,
    },
    {
        date: "Jan 29",
        name: "ZOMATO",
        sub: "Order successful ",
        main: " Your is been taken successfully",
        star: false,
        select: false,
    },
    {
        date: "Jan 28",
        name: "SLACK",
        sub: "No Attendance Logged ",
        main: " New messages from your Avow Solutions Inc coworkers",
        star: false,
        select: true,
    },
    {
        date: "Jan 28",
        name: "SWIGGY",
        sub: "Meal on the way ",
        main: " Order your fav meal of the day",
        star: false,
        select: false,
    },
    {
        date: "Jan 27",
        name: "AVOW",
        sub: "Weekly Off ",
        main: " One day Weekly off is provided",
        star: true,
        select: false,
    },
    {
        date: "Jan 27",
        name: "ZOMATO",
        sub: "Order delivered ",
        main: " The order has been delivered in the given location",
        star: false,
        select: true,
    },
    {
        date: "Jan 27",
        name: "ZOMATO",
        sub: "Order successful ",
        main: " Your is been taken successfully",
        star: false,
        select: false,
    },
    {
        date: "Jan 28",
        name: "SLACK",
        sub: "No Attendance Logged ",
        main: " New messages from your Avow Solutions Inc coworkers",
        star: false,
        select: true,
    },
    {
        date: "Jan 28",
        name: "SWIGGY",
        sub: "Meal on the way ",
        main: " Order your fav meal of the day",
        star: false,
        select: false,
    },
    {
        date: "Jan 27",
        name: "AVOW",
        sub: "Weekly Off ",
        main: " One day Weekly off is provided",
        star: true,
        select: false,
    },
    {
        date: "Jan 27",
        name: "ZOMATO",
        sub: "Order delivered ",
        main: " The order has been delivered in the given location",
        star: false,
        select: true,
    }
]
</script>