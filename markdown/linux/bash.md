# 命令



## 简介

我并不会列出一条命令的所有选项，如果有需要可以详见文末的主要参考



**约定**

.   (*)  必须掌握

.   (-)   一些好用的命令，需要自己安装（awesome-line）

. （%）了解熟悉

## 目录操作

### cd (*)

 命令 change dirname 的缩写形式，进入指定目录

```
cd /usr/local #进入 /usr/local 目录

cd / #进入 / 目录

cd ~ #进入当前用户家目录

cd - #进入执行上一条命令所在目录

cd ../ #进入当前目录的上一级目录

```

###  tree (-)

以树的形式显示当前目录的内容

```
安装  yum -y install tree

tree -s -h  #以友好的方式显示文件大小
```

### ls (*)

列出目录的内容

```
 ls -l    # 列出当前目录可见文件详细信息
 ls -hl   # 列出详细信息并以可读大小显示文件大小
 ls -al   # 列出所有文件（包括隐藏）的详细信息
 ls -i    # 列车inode(索引节点)
```

### pwd(*)

打印当前目录



## 文件操作

### touch（*）

​           1.新建新的空文件

2. 更改文件访问和修改时间

```
touch index.html #新建空文件
touch -t 201909111623 filename  #设置文件的访问时间和修改时间
```

### file  （%）

确认文件的类型

```
file filename #显示文件类型
file -i filename #显示文件编码

```

### stat （%）

显示文件的属性(包含size, inode,修改时间，创建时间，访问时间)

```
stat filename #
```

### lsattr（*）

查看文件特殊属性



```
lsattr filename
```

### chattr（*）

修改文件的多种特殊属性(与lsatrr对应)

```
a：让文件或目录仅供附加用途；
b：不更新文件或目录的最后存取时间；
c：将文件或目录压缩后存放；
d：将文件或目录排除在倾倒操作之外；
i：不得任意更动文件或目录；
s：保密性删除文件或目录；
S：即时更新文件或目录；
u：预防意外删除。
-R：递归处理，将指令目录下的所有文件及子目录一并处理；
-v<版本编号>：设置文件或目录版本；
-V：显示指令执行过程；
+<属性>：开启文件或目录的该项属性；
-<属性>：关闭文件或目录的该项属性；
=<属性>：指定文件或目录的该项属性。
```

```
chattr +i path  #使文件不可更改和删除，即使超级用户
chattr -i path  #使文件可更改
chattr -R +i folder  #递归地使整个文件夹和内容不可更改
```

### mkdir(*)

 用来创建目录

```

mkdir -m 755 test  #指定权限创建
mkdir -p bin/os    #递归创建目录

```



### rmdir（%）

```
rmdir demo #删除空目录，如果目录有文件无法删除
```

### cp(*)

复制文件

```
cp index.php php #复制 index.php 文件到当前 php 目录下

cp -a index.php php #复制 index.php 文件到当前 php 目录下,保留文件的属性、权限、软连接自动指向目标文件

cp index.php ~/app.php #复制文件到指定目录下并修改文件名

cp -R php app #递归复制 php 目录下所有文件到 app 目录

```











## 主要参考

tldr ：https://github.com/tldr-pages/tldr

最好用的命令查询网站：http://wangchujiang.com/linux-command/







