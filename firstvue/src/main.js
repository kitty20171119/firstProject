// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'



Vue.config.productionTip = false

Vue.use(ElementUI);
var Main = {
		methods:{
			handleOpen(key,keyPath){
				console.log(key,keyPath);
			},
			handleClose(key,keyPath){
				console.log(key,keyPath);
			},
			
		}
	}
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');

var Date = {
	data(){
		return {
			pickerOptions1:{
				disableDate(time) {
					return time.getTime()>Date.now();
				},
				shortcuts:[{
					text:'今天',
					onClick(picker){
					picker.$emit('pick',new Date());
					}
				},{
					text:'昨天',
					onClick(picker){
						const date = new Date();
						date.setTime(date.getTime()-3600*1000*24);
						picker.$emit('pick',date);
					}
				},{
					text:'一周前',
					onClick(picker){
						const date = new Date();
						date.setTime(date.getTime()-3600*1000*24*7);
						picker.$emit('pick',date);
					}
				}]
			},
			
		}
	}
};

var Date = Vue.extend(Date);
new Date().$mount('#app');

Vue.prototype.handleEdit = function(index, row) {
				if (row.isShow == true) {
					row.isShow = false;
				} else {
					row.isShow = true;
					this.$message({
						message: '更新成功',
						type: 'success'
					})
				}
			}
Vue.prototype.handleDelete=function(index,row){
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



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
