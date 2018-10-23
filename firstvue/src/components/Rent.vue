<template>
	<div class="rent">
		<div class="input-demo">
			<el-input placeholder="手机号码" v-model="financical_rent.new_id"></el-input>
			<el-input placeholder="租赁到期日" v-model="financical_rent.new_expirytime"></el-input>
			<el-input placeholder="账户余额" v-model="financical_rent.new_balance"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary" @click="add_rent">新增</el-button>
		</div>
		<el-main>
			<el-table :data="Rent">
				<el-table-column label="手机号码" sortable prop="id">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.id}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.id"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="租赁到期日" sortable prop="expirytime">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.expirytime}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.expirytime"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="账户余额" sortable prop="balance">
					<template slot-scope="scope">
						<span v-show="scope.row.isShow">{{scope.row.balance}}</span>
						<el-input v-show="!scope.row.isShow" v-model="scope.row.balance"></el-input>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="70">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow?'编辑':'完成'}}</el-button>
						<div style="clear: both;margin-top: 10px;"></div>
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
				financical_rent:{
					new_id:'',
					new_expirytime:'',
					new_balance:''
				},
				Rent:[{
					isShow:true,
					id:'13708890782',
					expirytime:'2018-09-10',
					balance:'200'
				}]
			}
		},
		methods:{
			add_rent(){
				
			}
		}
	}
</script>
<style>
	.input-demo{
		display: flex;
	}
</style>