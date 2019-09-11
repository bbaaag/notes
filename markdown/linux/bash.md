# 命令



## 简介

我并不会列出一条命令的所有选项，如果有需要可以参考http://wangchujiang.com/linux-command/



约定

.   (*)  必须掌握

.   (-)   一些好用的命令，需要自己安装（awesome-line）



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

### touch

​           1.新建新的空文件

2. 更改文件访问和修改时间

```
touch index.html #新建空文件
touch -t 201909111623 filename  #设置文件的访问时间和修改时间
```

### file  

确认文件的类型

```
file filename #显示文件类型
file -i filename #显示文件编码

```

### stat 

显示文件的属性(包含size, inode,修改时间，创建时间，访问时间)

```
stat filename #
```

### lsattr

查看文件特殊属性



```
lsattr filename
```

chattr

修改文件的多种特殊属性(与lsatrr对应)













## 参考

tldr







