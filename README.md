# messagebox #
自己做的小插件

## 使用 ##

### 初始化 ###
`var messagebox = new MsgBox({el,options});`

### options ###
<table>
	<thead>
		<tr>
			<th>参数</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>top</td><td>高度</td>
		</tr>
		<tr>
			<td>color</td><td>字体颜色</td>
		</tr>
		<tr>
			<td>fontSize</td><td>字体大小</td>
		</tr>
		<tr>
			<td>bgColor</td><td>背景颜色</td>
		</tr>
		<tr>
			<td>message</td><td>显示的信息</td>
		</tr>
		<tr>
			<td>shown</td><td>显示的时候调用的方法</td>
		</tr>
		<tr>
			<td>hidden</td><td>隐藏的时候调用的方法</td>
		</tr>
	</tbody>
</table>

### 事件绑定 ###

使用on绑定事件
<table>
	<tbody>
		<tr>
			<td>shown</td><td>显示的时候调用的方法</td>
		</tr>
		<tr>
			<td>hidden</td><td>隐藏的时候调用的方法</td>
		</tr>
	</tbody>
</table>
`messagebox.on('shown',function(){...})` <br/>
`messagebox.on('hidden',function(){...})`

