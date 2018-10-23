<template>
	<div class="device">
				<div class="el-input-demo">
	          <el-input placeholder="冰箱编码" v-model="device.new_deviceid"></el-input>
	          <el-input placeholder="蓝牙锁编号" v-model="device.new_bleid"></el-input>
	          <el-input placeholder="位置" v-model="device.new_position"></el-input>
	          <el-input placeholder="状态" v-model="device.new_state"></el-input>
	      </div>
	      <div class="el-input-demo">
	          <el-input placeholder="使用者" v-model="device.new_owner"></el-input>
	          <el-input placeholder="被授权人" v-model="device.new_licensor"></el-input>
	          <el-input placeholder="今日使用次数" v-model="device.new_usetimetoday"></el-input>
	          <el-input placeholder="累计使用次数" v-model="device.new_usetimetotal"></el-input>
	          <el-button type="primary">查询</el-button>
	          <el-button type="primary">添加</el-button>
	      </div>
	        <!--表单-->
	        <el-main>
	          <el-table :data="Device">
	
	            <el-table-column label="冰箱编号" width="200" sortable prop="deviceid">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.deviceid}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.deviceid"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="蓝牙锁编号" width="200" sortable prop="bleid">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.bleid}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.bleid"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="状态" width="200" sortable prop="state">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.state}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.state"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="使用者" width="200" sortable prop="owner">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.owner}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.owner"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="被授权人" width="300" sortable prop="licensor">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.licensor}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.licensor"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="今日使用次数" width="200" sortable prop="usetimetoday">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.usetimetoday}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.usetimetoday"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="累计使用次数" width="200" sortable prop="usetimetotal">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.usetimetotal}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.usetimetotal"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="位置" width="200" sortable prop="position">
	              <template slot-scope="scope">
	                <span v-show="scope.row.isShow">{{scope.row.position}}</span>
	                <el-input v-show="!scope.row.isShow" v-model="scope.row.position"></el-input>
	              </template>
	            </el-table-column>
	            <el-table-column label="操作" width="70" fixed="right">
	              <template slot-scope="scope">
	                <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">{{scope.row.isShow?'编辑':'完成'}}</el-button>
	                <div style="clear:both;margin-top: 10px;"></div>
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
				device:{
					new_deviceid:'',
					new_bleid:'',
					new_position:'',
					new_state:'',
					new_owner:'',
					new_licensor:'',
					new_usetimetoday:'',
					new_usetimetotal:''
				},
				Device:[{
				isShow:true,
				deviceid:'0jf0j0f2',
				bleid:'fj200f3f',
				position:'武汉理工大学',
				state:'正常',
				owner:'李雷',
				licensor:'韩梅梅',
				usetimetoday:'3',
				usetimetotal:'5'
				}]
			}
		},
		methods:{
			add_device(){
				alert("添加成功");
			}
		}
		
		
	 }
	
</script>