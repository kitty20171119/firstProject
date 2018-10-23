<template>
	<div class="detail">
		<div class="header">
			<div class="title">共享冰箱</div>
			<div class="user">
				<div class="name">admin</div>
				<div class="img">
					<img src="../../build/logo.png" />
				</div>
			</div>
		</div>
		<div class="content">
			<div class="aside" ref="aside">
				<el-row class="tac">
					<el-col :span="12">
					<el-menu default-active="1" router class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-submenu index="1" >
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group style="padding-left: 20px;">
							<el-menu-item index="/detail/account" @click="changeView(this)">{{user.account}}</el-menu-item>
							<el-menu-item index="/detail/info" @click="changeView(this)">{{user.info}}</el-menu-item>
						</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2" router>
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span slot="title">设备管理</span>
						</template>
						<el-menu-item index="/detail/device" style="padding-left:55px;">{{device}}</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span slot="title">财务管理</span>
						</template>
						<el-menu-item index="/detail/deposit" style="padding-left:55px;">{{financial.deposit}}</el-menu-item>
						<el-menu-item index="/detail/rent" style="padding-left:55px;">{{financial.rent}}</el-menu-item>
						</el-submenu>
						<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-setting"></i>
							<span slot="title">工单管理</span>
						</template>
						<el-menu-item index="/detail/repair" style="padding-left:55px;">{{repair}}</el-menu-item>
						</el-submenu>
					</el-menu>
					</el-col>
				</el-row>
			</div>
			<div style="width: calc(100% - 251px)">
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/account'">
					<p class="left">{{user.account}}</p>
					<p class="right">{{user.account}}/用户管理</p>		
				</div>
				
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/info'">
					<p class="left">{{user.info}}</p>
					<p class="right">{{user.info}}/用户管理</p>
				</div>
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/device'">
					<p class="left">{{device}}</p>
					<p class="right">{{device}}/设备管理</p>
				</div>
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/deposit'">
					<p class="left">{{financial.deposit}}</p>
					<p class="right">{{financial.deposit}}/财务管理</p>
				</div>
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/rent'">
					<p class="left">{{financial.rent}}</p>
					<p class="right">{{financial.rent}}/财务管理</p>
				</div>
				<div class="content-header" v-show="this.$router.history.current.path=='/detail/repair'">
				<p class="left">{{repair}}</p>
				<p class="right">{{repair}}/工单管理</p>		
			</div>
			<router-view></router-view>
			<!--调整每页显示的条数-->
			<!--分页功能-->
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-change="currentPage1"
					:page-sizes="[5,10,15,20]" :page-size="100" layout="total,sizes,prev,pager,next,jumper" :total="totalSize">
				</el-pagination>
			</div>
		</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		name:'Detail',
		data(){
			return {
				currentPage1:'',
				totalSize: 0,
				user:{
					account:'账户管理',
					info:'用户信息查询'
				},
				device:'共享冰箱',
				financial:{
					deposit:'押金明细',
					rent:'租金明细'
				},
				repair:'用户报修'
				
			}
		},
		mounted: function(){
				this.totalSize = this.Account.length;	
			
			
		},
		methods:{
			changeView(key,keyPath){
				console.log(this.$router.history.current.path);
				
			},
			handleSizeChange(val){
				this.totalSize=Account.length;

			},
			handleCurrentChange(val){
				
			},

		
		
		}	
		
	}	
</script>
<style scoped>
	.el-menu{
		width: 250px;
	}
	.el-submenu{
		width: 250px;
	}
	.content{
		width: 100%;
		display: flex;
	}
	.header{
		width: 100%;
		height: 60px;
		background-color: #53E3A6;
		display: flex;
		font-size: 20px;
		color: #fff;
		line-height: 60px;
	}
	.title{
		width: 50%;
		font-size: 18px;
		margin-left: 10px;
		justify-content: flex-start;
	}
	.user{
		width: 50%;
		justify-content: flex-end;
		display: flex;
	}
	.name,.img{
		float: left;
		display: flex;	
	}
	.img{
		width: 40px;
	  height: 40px;
		display: flex;
		margin-top: 10px;
		margin-right: 10px;
		border-radius: 50%;
		overflow: hidden;
	}
	.img img{
		width: 100%;
	}
	.aside{
		float: left;
	}
	.content-header{
		width: 100%;
		height: 40px;
		background-color: #3db0b6;
		display: flex;	
	}
	.content-header p{
		width: 100%;
		line-height: 1;
		font-size: 12px;
	}
	.content-header .left{
		display: flex;
		justify-content: flex-start;
		margin-left: 10px;
	}
	.content-header .right{
		display: flex;
		justify-content: flex-end;
		margin-right: 10px;
	}

</style>