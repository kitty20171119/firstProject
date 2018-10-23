<template>
	<div>
		 <div class="demo-input-size">
		          <el-input placeholder="手机号码" v-model="financical_deposit.new_id"></el-input>
		          <el-input placeholder="押金金额" v-model="financical_deposit.new_total"></el-input>
		          <el-input placeholder="是否有申请退还押金需求" v-model="financical_deposit.new_applyreturn"></el-input>
		          <el-input placeholder="申请时间" v-model="financical_deposit.new_applytime"></el-input>
		        </div>
		        <div class="demo-input-size">
		          <el-input placeholder="处理状态" v-model="financical_deposit.new_applystate"></el-input>
		          <el-input placeholder="审核人员" v-model="financical_deposit.new_reviewer"></el-input>
		          <el-input placeholder="是否已经通过审核" v-model="financical_deposit.new_isapproved"></el-input>
		          <el-input placeholder="审核费用是否已退还" v-model="financical_deposit.new_isreturned"></el-input>
		          <el-button type="primary">查询</el-button>
		          <el-button type="primary" @click="add_deposit">新增</el-button>
		        </div>
		        <el-main>
		          <el-table :data="Deposit">
		            <el-table-column label="手机号码" width="200" sortable prop="id">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.id}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.id"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="押金金额" width="200" sortable prop="total">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.total}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.total"></el-input>
		              </template>
		
		            </el-table-column>
		            <el-table-column label="是否有申请退还押金需求" width="200" sortable prop="applyreturn">
		              <template slot-scope="scope" width="200">
		                <span v-show="scope.row.isShow">{{scope.row.applyreturn}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.applyreturn"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="申请时间" width="200" sortable prop="applytime">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.applytime}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.applytime"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="处理状态" width="150" sortable prop="applystate">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.applystate}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.applystate"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="审核人员" width="150" sortable prop="reviewer">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.reviewer}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.reviewer"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="是否已经通过审核" width="100" sortable prop="isapproved">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.isapproved}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.isapproved"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="审核费用是否已退还" width="100" sortable prop="isreturned">
		              <template slot-scope="scope">
		                <span v-show="scope.row.isShow">{{scope.row.isreturned}}</span>
		                <el-input v-show="!scope.row.isShow" v-model="scope.row.isreturned"></el-input>
		              </template>
		            </el-table-column>
		            <el-table-column label="操作" width="70" fixed="right">
		              <template slot-scope="scope" width="50">
		                <el-button type="plain" size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow?'编辑':'完成'}}</el-button>
		                <div style="clear:both;margin-top:10px;"></div>
		                <el-button type="danger" size="mini" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
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
				financical_deposit:{
					new_id:'',
					new_total:'',
					new_applyreturn:'',
					new_applytime:'',
					new_applystate:'',
					new_applyreviewer:'',
					new_isapproved:'',
					new_isreturned:''
				},
				Deposit:[{
					isShow:true,
					id:'13708592920',
					total:'350',
					applyreturn:'是',
					applytime:'2018-09-10',
					applystate:'正常',
					reviewer:'李雷',
					isapproved:'审核通过',
					isreturned:'是'
				}]
			}
		},
		methods:{
			add_deposit(){
				
			}
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