<template>
	<div class="repair">
		<div class="input-demo">
			<el-input placeholder="设备编号" v-model="orderMangement.new_deviceid"></el-input>
			<el-input placeholder="使用者" v-model="orderMangement.new_userid"></el-input>
			<el-input placeholder="问题描述" v-model="orderMangement.new_problem"></el-input>
			<el-input placeholder="设备位置" v-model="orderMangement.new_position"></el-input>
			<el-input placeholder="上报时间" v-model="orderMangement.new_reporttime"></el-input>
		</div>
		<div class="input-demo">
			<el-input placeholder="工单状态" v-model="orderMangement.new_reportstate"></el-input>
			<el-input placeholder="派单时间" v-model="orderMangement.new_singletime"></el-input>
			<el-input placeholder="接单人员" v-model="orderMangement.new_handler"></el-input>
			<el-input placeholder="接单人员联系方式" v-model="orderMangement.new_handlerphone"></el-input>
			<el-input placeholder="工单反馈" v-model="orderMangement.new_reportfeedback"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary" @click="add_manage">新增</el-button>
		</div>
		<el-main>
			<el-table :data="Repair">
				<el-table-column label="设备编号" width="200" sortable prop="deviceid">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.deviceid}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.deviceid"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="使用者" width="200" sortable prop="userid">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.userid}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.userid"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="问题描述" width="300" sortable prop="problem">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.problem}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.problem"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="设备位置" width="200" sortable prop="position">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.position}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.position"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="上报时间" width="200" sortable prop="reporttime">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.reporttime}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.reporttime"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="工单状态" width="200" sortable prop="reportstate">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.reportstate}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.reportstate"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="派单时间" width="200" sortable prop="singletime">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.singletime}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.singletime"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="接单人员" width="200" sortable prop="handler">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.handler}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.handler"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="接单人员联系方式" width="200" sortable prop="handlerphone">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.handlerphone}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.handlerphone"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="工单反馈" width="200" sortable prop="reportfeedback">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.reportfeedback}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.reportfeedback"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="操作" fixed="right" width="70">
					<template slot-scope="scope" width="50;">
						<el-button size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow?'编辑':'完成'}}</el-button>
						<div style="clear: both;margin-top:10px;"></div>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				orderMangement:{
					new_deviceid:'',
					new_userid:'',
					new_problem:'',
					new_position:'',
					new_reporttime:'',
					new_reportstate:'',
					new_singletime:'',
					new_handler:'',
					new_handlerphone:'',
					new_reportfeedback:''
				},
				Repair:[{
					isShow:true,
					deviceid:'390J0M0M0',
					userid:'13309897839',
					problem:'无',
					position:'武汉工程大学',
					reporttime:'2018-09-01',
					reportstate:'正常',
					singletime:'2018-10-01',
					handler:'李明',
					handlerphone:'13309890730',
					reportfeedback:'无'
				}]
			}
		},
		methods:{
			add_manage(){
				
			}
		}
	}
</script>
<style>
	.input-demo{
		display: flex;
	}
	.el-input{
		width: 150px;
	}
</style>