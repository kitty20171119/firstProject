//编辑用户信息
function edit(index,row){
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
function delete(index,row){
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
export {
	edit
	delete
}