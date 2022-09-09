<template>
	<div class="hello">
		<img class="logo" src="../asset/img/logo.png">
		<h1>{{ msg }}</h1>
		<h2>功能模版</h2>
		<nav>
			<router-link to="">身份校验</router-link>
			<router-link to="">消息详情</router-link>
			<router-link to="">服务协议</router-link>
			<router-link to="">用户隐私协议</router-link>
		</nav>
		<h2>相关链接</h2>
		<ul>
			<li>
				<a href="" target="_blank">Zeus CLI 文档</a>
			</li>
			<li>
				<a href="" target="_blank">Web 编码规范</a>
			</li>
			<li>
				<a href="" target="_blank">Web 项目目录结构规范</a>
			</li>
			<li>
				<a href="" target="_blank">ESLint 接入指南</a>
			</li>
			<li>
				<a href="" target="_blank">UI 组件库</a>
			</li>
			<li>
				<a href="" target="_blank">Team Blog</a>
			</li>
			<li>
				<a href="" target="_blank"></a>
			</li>
		</ul>
		<footer>
			<p>© 2018 </p>
		</footer>
	</div>
</template>

<script>

export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Zeus CLI'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.hello .logo {
	width: 80px;
}

h1 {
	font-size: 2em;
	padding: 5px 0;
	margin-bottom: 50px;
}
h2 {
	font-size: 0.8em;
	padding: 2px 0;
	margin-bottom: 15px;
}

nav{
	margin-bottom: 15px;
}

nav a {
	display: inline-block;
	font-size: 1rem;
	padding: 5px 0;
}
nav a:after {
	content: ' |'
}
nav a:last-child:after {
	content: ''
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 5px 10px;
	font-size: 0.8rem;
}
li a {
	text-decoration: underline;
}
a {
	color: #4fc08d;
}

footer{
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	padding-bottom: 25px;
	font-size: 12px;
	color: rgba(0, 0, 0, .45);
	text-align: center;
}
</style>
