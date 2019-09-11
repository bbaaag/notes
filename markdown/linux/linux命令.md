### 系统管理

#### systemctl



```

systemctl list-units --all --type=service 
//列出所管理的服务

# systemctl enable crond.service // 让某个服务开机自启(.service可以省略)
# systemctl disable crond // 不让开机自启

# systemctl status crond // 查看服务状态

# systemctl start crond // 启动某个服务
# systemctl stop crond // 停止某个服务
# systemctl restart crond //重启某个服务

# systemctl reload * # 重新加载服务配置文件

# systemctl is-enabled crond // 查询服务是否开机启动
```



### 系统用户和用户组管理



​		 useradd  添加用户

​		  adduser  添加用户

​		  userdel  删除用户

​          passwd  设置密码



- `groupadd` 增加一个用户组

- `chgrp` 更改所属组

  ```
  $ chgrp -R grpA filename/dir  
  # 将 filename/dir 的所属组改为 grpA 组
  
  ```

  

- `chown` 更改所属主，除了可以更改所属用户外，还可更改所属组



```
chown - R userA filename/dir  
*# 将 filename/dir 的所属用户改为 userA 用户* 
```



- `chmod` 改变用户对文件的读写执行权限，如744
- `umask` 改变新建文件/目录的默认读写执行权限



​			sudo

​				配置一个用户可以使用sudo

​				1.执行visudo

​				2.编辑

```
Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
bsy     ALL=(ALL)      NOPASSWD:ALL
```



​				





### yum安装和源码包安装



### 进程

#### 查找进程

##### ps

##### top

#### 杀死进程

##### kill 

`kill -9  pid`

### 文件系统

#### 查找



##### `which`

  查询命令所在的路径和别名（不包括内置命令）

##### whereis     

查询命令所在目录及帮助文档路径whereis  ls



##### locate

`locate`，针对已生成的全局文件树索引对文件名进行搜索，但使用前需要先安装`mlocate`且执行`updatedb`来生成文件树索引；该命令仅支持按文件名进行搜索



##### `find`

`find`，遍历查找指定目录（不指定就针对整个系统进行查找）；该命令支持多种筛选条件（可按`与或否`的逻辑关系进行串联）进行查找，如：

- 文件名，通过`-name`和`-iname`参数传入，支持通配符。
- 所属用户，通过`-user`参数传入。
- 所属组，通过`-group`参数传入。
- 文件时间戳的相关属性，通过`-atime`(Access time)/`-ctime`(Change time)/`-mtime`(Modify time)参数传入，其中`-mtime`参数比较常用。
- 文件类型，通过`-type`参数传入。
- 文件大小，通过`-size`参数传入。



#### 操作

ls  

查看目录下文件

touch 

新建文件

mkdir 

新建文件夹

cd

进入目录

rm 

删除文件或文件夹

cp 

复制

mv 

移动和重命名



#### 文件读取

tail   从文件尾部开始读

head  从文件头部读

cat  读取整个文件

more  分页读取

less    可控分页

grep  搜索关键字

find   查找文件

wc  统计个数













### 文件压缩与解压

#### tar
tar            打包文件压缩或解压  文件或目录成  tar.gz
tar  -c       英文create      生成打包
tar   -v       英文verbose   显示过程
tar    -z       --zip      --gunzip      压缩 或解压
tar    -f      指定文件名      或指定解压文件
tar    -x     英文  extract (提取)
tar    -j       对bzip2格式的文件进行压缩和解压

```shell

普通压缩   tar  -cf   nba.tar(压缩后的文件名)    nba（待压缩的文件）
普通解压  tar   -xf   nba.tar

打包压缩    tar  -zcvf   nba.tar.gz  nba
解包解压   tar    -zxvf      nba.tar.gz

只解压一部分
1.先列出压缩包的所有文件 tar -tf redis.tar
2.解压其中的一部分   tar -xvpf redis.tar redis/changes





```

#### zip

zip  压缩文件夹

```
zip  -r html.zip /home/Blinux/html
```

unzip 解压文件

```
unzip test.zip
```


#### gzip
gzip      英文 gun zip   压缩成.gz文件    （只能压缩文件）


gunzip   英文  gun  unzip         解压.gz 的文件

#### bzip2 

bzip2              压缩.bz2        (只针对文件）


-k    保留文件
bzip -k  linux
tar   -cjf  liunx.tar.bz2  linux


bunzip2      解压.bz2

bunzip2 -k linux.tar.bz2
tar   -xjf    linux.tar.bz2





### 网络系统状态(端口)

#### ss

-a, --all       显示所有套接字（sockets）
-l, --listening 显示监听状态的套接字（sockets）

-n, --numeric   不解析服务名称

-m, --memory    显示套接字（socket）的内存使用情况
-p, --processes 显示使用套接字（socket）的进程
-i, --info      显示 TCP内部信息

ss -tln 查看本机监听的端口

ss -an      查看本届所有的网络链接

ss -tlnp   **查看所有tcp端口的详细信息**

#### netstat(已不在维护)

netstat            显示网络相关信息 

netstat -tlnp（**打印当前系统启动哪些端口）**

netstat -tlun    **查看本机监听的端口**

netstat -anpl     查看本届所有的网络链接

netstat  -rn     查看本机路由表



#### ngrep











### IP配置









### xshell使用技巧

#### history



1. !!：重复执行上一条指令
2. !a：重复执行上一条以a为首的指令
3. !number：重复执行上一条在history表中记录号码为number的指令
4. !-number：重复执行前第number条指令
5. !$：表示获得上一条命令中的最后一项内容
6. 用Ctrl + r 组合键来进入历史搜索模式在history表中查询某条过往指令，找到需要重复执行的命令后，按回车键即可重复命令参数(即上一点中的第5条)

#### xsehll使用

ctrl + l 清屏

ctrl +a 移动到当前行的开头
ctrl +e 移动到当前行的结尾



### 管道符，重定向，xargs

#### 管道符

管道符的标识为`|`，它用于将前一个指令的输出作为后一个指令的输入，格式如下：`command1 | command2`，举例说明：`yum list | grep zip | head -n 5`

#### 重定向

重定向分为“输入重定向”和“输出重定向”，重定向一般通过在命令间插入特定的符号来实现。

- `command1 > file1`，这个命令执行command1然后将执行后输出的内容存入file1。注意任何file1内的已经存在的内容将被新内容替代。如果要将新内容添加在文件末尾，请使用>>操作符。
- `command1 < file1`，执行command1，使用file1作为用来替代键盘的输入源。
- `command1 < infile > outfile`，同时替换输入和输出，执行command1，从文件infile读取内容，然后将输出写入到outfile中。

另外，上述的“输出内容”仅指命令执行的结果，若命令执行中出现错误，则错误信息需要另行处理：

- `command1 2> file1`，执行command1，然后将标准错误输出重定向到文件file1。
- 另外一个很有用的功能是将标准错误输出融合到标准输出中去，这样错误信息可以和其他普通的输出信息一起处理。例如：`command > file 2>&1`，这表示将command执行后的结果与错误信息均写入到file里。

#### xargs

xargs命令：将stdin转换成传入其它命令的参数

`xargs`命令的作用在于给别的命令传递参数，其一般配合管道符`|`来使用，把前一命令的stdout作为自己的stdin，再转换成`command line`形式的参数传给其它命令。

```
find /tmp -name "*.log" -type f -print | xargs /bin/rm -f
```

上面这是`xargs`命令的常用场景，配合`find`命令，找到`/tmp`目录下所有日志文件并予以删除。

### xargs命令的意义

- 虽然管道能把别的命令的stdout作为下个命令的stdin传入，但毕竟并非所有的命令都接受stdin的，如`ls`；比较常见接受stdin的命令有`cat`、`less`；而`xargs`命令能转化stdin的命令正好弥补了这些不接受stdin的命令的不足。
- 对于大数据量的操作来说，如上面的例子，一次性删除大量文件，若直接使用`rm -f /tmp/*.log`，很可能会报错`/bin/rm Argument list too long`，而如果我们用上`xargs`命令，`xargs`会帮我们把待删的文件分批交给`rm`命令来执行。
- 某些命令针对`xargs`调用的方式进行了优化，达到更进一步的效果，如



### SSH



### 系统日志

#### 核心系统日志文件/var/log/messages

Linux的核心系统日志文件是`/var/log/messages`，它包含了以下内容：

- 系统启动时的引导消息
- I/O错误
- 网络错误
- 其它系统运行时发送的错误
- 单纯的操作记录

`/var/log/messages`是由**rsyslogd**这个守护进程生成的，如果**rsyslogd**被停止了，则系统将不会生成新的`/var/log/messages`。

#### 定时任务/var/log/cron

定时任务的运行日志





### 别名

我们可以通过`alias`命令把一个常用的并且很长的指令另取名为一个简单易记的指令；如果不想用了，还可以使用`unalias`来取消。

- 使用`alias`命令，可以列出系统当前所有的别名。
- 使用`alias [命令别名]=['具体的命令']`可以自定义别名，例如：`alias aming='pwd'`。
- 使用`unalias`可以取消别名，例如`unalias aming`



### 服务器硬件资源信息

#### 内存

​	free -m

#### 硬盘

​	df -h



#### cpu

cat   /proc/cpuinfo





文件的上传下载

wget

curl

scp 上传



windows 利用xshell

```
yum -y installl lrzsz
 rz 选择文件上传到当前终端所在的位置
 sz 文件名   选择下载的位置

```

