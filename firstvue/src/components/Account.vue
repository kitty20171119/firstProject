<template>
	<div class="account">
	<div class="input-container">
		<el-input v-model="account.new_id" placeholder="userid"></el-input>
		<el-input v-model="account.new_payamount" placeholder="支付金额"></el-input>
		<el-input v-model="account.new_paychannel" placeholder="支付渠道"></el-input>
		<el-input v-model="account.new_paynumber" placeholder="支付流水号"></el-input>
		<el-input v-model="account.new_deviceid" placeholder="对应设备编号"></el-input>
		<el-input v-model="account.new_deviceposition" placeholder="对应设备位置"></el-input>
	</div>
	<!--日期选择-->
	<div class="block">
		<span class="demonstration">支付日期</span>
		<el-date-picker 
			v-model="value1" 
			type="daterange" 
			range-separator="至" 
			start-placeholder="选择日期"
			end-placeholder="结束日期">	
		</el-date-picker>
		<span class="demonstration">绑定日期</span>
		<el-date-picker 
			v-model="value2" 
			type="daterange" 
			range-separator="至" 
			start-placeholder="选择日期"
			end-placeholder="结束日期">	
		</el-date-picker>
	</div>
	<div class="block">
		<span class="demonstration">有效日期</span>
		<el-date-picker
			v-model="value3"
			type="daterange"
			range-separator="至"
			start-placeholder="选择日期"
			end-placeholder="结束日期"
		></el-date-picker>
		<el-button type="primary" @click="select">查询</el-button>
		<el-button type="primary" @click="add">新增</el-button>
	</div>
          <!--自定义模板表格-->
          <template>
            <el-table :data="Account">
              <el-table-column label="userid" width="150" sortable prop="id">
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.id}}</span>
                  <el-input v-model="scope.row.id" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="支付日期" width="150" prop="paytime" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.paytime}}</span>
                  <el-input v-model="scope.row.paytime" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="支付金额" width="100" prop="payamount" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.payamount}}</span>
                  <el-input v-model="scope.row.payamount" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="支付渠道" width="100" prop="paychannel" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.paychannel}}</span>
                  <el-input v-model="scope.row.paychannel" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="支付流水号" width="200" prop="paynumber" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.paynumber}}</span>
                  <el-input v-model="scope.row.paynumber" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="绑定日期" width="150" prop="bindingtime" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.bindingtime}}</span>
                  <el-input v-model="scope.row.bindingtime" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="有效日期" width="150" prop="expirytime" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.expirytime}}</span>
                  <el-input v-model="scope.row.expirytime" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="设备编号" width="150" prop="deviceid" sortable>
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.deviceid}}</span>
                  <el-input v-model="scope.row.deviceid" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="对应设备位置" width="300">
                <template slot-scope="scope">
                  <span v-show="scope.row.isShow">{{scope.row.deviceposition}}</span>
                  <el-input v-model="scope.row.device0osition" v-show="!scope.row.isShow"></el-input>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="70">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow==true?'编辑':'完成'}}</el-button>
                  <div style="clear: both;margin-top: 10px;"></div>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
		</div>	
	</div>	
</template>
<script>
	//import {title} from '../../commonFunction/common.js'
	export default {
		name:'',
		data(){
			return {
				value1:'',
				value2:'',
				value3:'',
				account:{
					new_payamount:'',
					new_paychannel:'',
					new_paynumber:'',
					new_deviceid:'',
					new_deviceposition:''
				},
				Account:[{
					isShow:true,
					id:'123456',
					paytime:'2018-10-01',
					payamount:'300',
					paychannel:'微信',
					paynumber:'39938279572',
					bindingtime:'2018-01-01',
					expirytime:'1019-01-01',
					deviceid:'3928942eavw',
					deviceposition:'武汉理工大学',
					
				}]
			}
		},
		mounted:function(){
			
		},
		methods:{
			select(){
				
			},
			add(){
			},
			handleEdit(index,row){
				if (row.isShow == true) {
					row.isShow = false;
				} else {
					row.isShow = true;
					this.$message({
						message: '更新成功',
						type: 'success'
					})
				}
			},
			handleDelete(index,row){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					if(this.$router.history.current.path=='/detail/account'){
						this.Account.splice(index, 1);
					}
					if(this.$router.history.current.path=='/detail/info'){
						this.Info.splice(index, 1);
					}
					if(this.$router.history.current.path=='/detail/device'){
						this.Device.splice(index, 1);
					}
					if(this.$router.history.current.path=='/detail/deposit'){
						this.Deposit.splice(index, 1);
					}
					if(this.$router.history.current.path=='/detail/rent'){
						this.Rent.splice(index, 1);
					}
					if(this.$router.history.current.path=='/detail/repair'){
						this.Repair.splice(index, 1);
					}
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		
		
		}
	}
</script>
<style>
	.account{
		width: calc(100%-255px);
	}
	.input-container{
		display: flex;	
		
	}
	.demonstration{
		font-size: 10px;
	}
</style>
