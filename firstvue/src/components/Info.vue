<template>
	<div class="info">
		<div class="demo-input-size">
			<el-input v-model="info.new_id" placeholder="手机号码"></el-input>
			<el-input v-model="info.new_nickname" placeholder="用户昵称"></el-input>
			<!--时间插件-->
			<template>
				<el-date-picker style="width:150px" v-model="info.new_registertime" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
					type="date" placeholder="注册时间" :picker-options="pickerOptions4"></el-date-picker>
			</template>
		</div>
		<div class="demo-input-size">
			<el-input v-model="info.new_webid" placeholder="微信id"></el-input>
			<el-input v-model="info.new_sex" placeholder="性别"></el-input>
			<el-input v-model="info.new_college" placeholder="地区"></el-input>
			<el-button type="primary" @click="select_user">查询</el-button>
			<el-button type="primary" @click="add_user">新增</el-button>
		</div>
		<el-main class="main1">
		<el-table :data="Info">
			<el-table-column label="手机号" width="180" sortable prop="id">
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.id}}</span>
					<el-input v-model="scope.row.id" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="用户昵称" width="180" prop="nickname" sortable>
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.nickname}}</span>
					<el-input v-model="scope.row.nickname" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="注册时间" width="180" prop="registertime" sortable>
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.registertime}}</span>
					<el-input v-model="scope.row.registertime" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="微信id" width="180" prop="webid" sortable>
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.webid}}</span>
					<el-input v-model="scope.row.webid" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="性别" width="180" prop="sex" sortable>
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.sex}}</span>
					<el-input v-model="scope.row.sex" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="地区" width="180" prop="college" sortable>
				<template slot-scope="scope">
					<span v-show="scope.row.isShow">{{scope.row.college}}</span>
					<el-input v-model="scope.row.college" v-show="!scope.row.isShow"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="操作" fixed="right" width="70">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow==true?'编辑':'完成'}}</el-button>
					<div style="clear: both;margin-top: 10px;"></div>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-main>
</div>
</template>
<script>
	export default {
		data (){
			return {
				pickerOptions4:'',
				info:{
					new_id:'',
					new_nickname:'',
					new_webid:'',
					new_sex:'',
					new_college:'',
					new_registertime:''
				},
				Info:[{
					isShow:true,
					id:'13598282847',
					nickname:'林姐',
					webid:'03fenoe20nd2',
					sex:'女',
					college:'理工大学',
					registertime:'2018-10-01'
				}]
			}
		},
		methods:{
			select_user(){
				
			},
			add_user(){
				
			},
		}
	}
</script>
<style>
	.demo-input-size{
		display: flex;
	}
	.el-input{
		width: 150px;
	}
</style>