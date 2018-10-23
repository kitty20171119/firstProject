<template>
  <div class="hello">
		<div class="satic-area">
			<div class="dynamic-area1"></div>
			<div class="dynamic-area2"></div>
			<!--效果html开始-->
		<div class="htmleaf-container">
			<div class="wrapper">
				<div class="container">
					<h1>灰猫科技</h1>
					<div id="app">			
						<form class="form">
							<input type="text" placeholder="Username" v-model="username">
							<input type="password" placeholder="Password" v-model="password">				
							<button type="submit" id="login-button" @click="login">Login</button>	
						</form>
					</div>
				</div>
			</div>
		</div>
	</div> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
			username:'',
			password:''     
    }		
  },
	methods:{
		login:function(){
			if(this.username=='admin'&&this.password=='123456'){
				this.$router.replace('/detail/account')
			}else{
				alert("用户名或密码错误");
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, html { font-size: 100%; 	padding: 0; margin: 0;width: 100%;height: 100%;}

/* Reset */
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

body{
	font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif;
}

.satic-area {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/poster-about.jpg) no-repeat center;
  background-size: cover;
}

.dynamic-area1   {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(../assets/poster-drop-animate2.png) repeat-x 0px 0px;
  background-size: cover;
  animation: posterDrop1 6000s linear infinite;
}

@keyframes posterDrop1 {
  from { background-position: 0 0; }
  to { background-position: 4000% 0; }
}

.dynamic-area2   {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(../assets/poster-drop-animate1.png) repeat-x 0px 0px;
  background-size: cover;
  animation: posterDrop2 8000s linear infinite;
}

@keyframes posterDrop2 {
  from { background-position: 0 0; }
  to { background-position: 30000% 0; }
}

.wrapper {
  
  opacity: 0.8;
  position: relative;
  left: 0;
  width: 100%;
  height: 560px;
  overflow: hidden;
}

.wrapper.form-success .container h1 {
  -webkit-transform: translateY(85px);
  -ms-transform: translateY(85px);
  transform: translateY(85px);
}

.container {
  max-width: 350px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;

}

.container h1 {
  font-size: 40px;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  color: #85a5e7;
}

.form {
  position: relative; 
  z-index: 2;
  margin-top: 50px;
  
}


.form input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid #cccccc;
  background-color: rgba(255, 255, 255, 0.7);
  width: 290px;
  border-radius: 8px;
  padding: 10px 5px;
  margin: 0 auto 15px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: #85a5e7;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  font-weight: 310;

}

.form input:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.form input:focus {
  background-color: white;
  width: 300px;
  color: #53e3a6;
}

.form button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background-color:#85a5e7;
  border: 0;
  padding: 10px 15px;
  color: #ffffff;
  border-radius: 3px;
  width: 290px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  margin-top: 15px;
  border-radius: 8px;
}

.form button:hover {
  background-color: #f5f7f9;
  color: #85a5e7;
  border: 1px solid #cccccc;
}
</style>
