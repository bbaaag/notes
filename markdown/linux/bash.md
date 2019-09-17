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

```
-rw-rw-r-- 1 nick nick 0 May 12 16:05 demo.php

- 第 1 列代表文件类型
rw- 第 2-4 列代表所属用户的权限
rw- 第 5-7 列代表所属用户组的权限
r-- 第 8-11 其他用户所属权限
1 第 11 列代表文件被引用的次数
nick 第 12 列代表文件所属用户名称
nick 第 13 列代表文件所属用户组名称
0 第 14 列代表文件大小
May 12 16:05 第 15-17 列代表文件最后的修改时间
demo.php 第 18 列代表文件名称

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

### rm(*)

用于删除给定的文件和目录

```
rm index.php #删除文件

rm -i index.php #执行删除询问 y 代表删除 n 代表取消

rm -r test #递归删除目录

rm -f test #强制删除目录

rm -rf php #强制递归删除目录

```

## 权限



 

#### Linux 的 3 种权限

- `r` 代表 `read` 读权限，数字代表为 `4`
- `w` 代表 `wirte` 写权限，数字代表为 `2`
- `x` 代表 `execute` 执行权限，数字代表为 `1`

#### Linux 的 3 种用户

- 拥有者（owner）
- 用户组（group）
- 其它人（others）



#### chmod

```
chmod 755 filename #将文件权限修改为 755 ,即拥有者有读写执行权限，用户组有读执行权限，其他人有读执行权限 

chmod -R 755 dirname #递归修改目录的权限

```



#### chown

用来变更文件或目录的拥有者或所属群组

```

chown nick:nick index.php #将文件拥有者和用户组修改为 nick

chown -R nick:nick php #递归将目录拥有者和用户组修改为 nick

```

#### chgrp

```
chgrp nick demo #改变目录的所属用户组

chgrp nick test.php #改变文件的所属用户组

chgrp -R nick demo #递归改变目录的所属用户组

```

## 用戶

#### users 命令

```
users #查看当前在线的用户名称列表
```

#### 用户分 3 种

1. `root` 用户，即超级管理员
2. 拥有 `root` 权限的用户，可以执行 `sudo` 命令
3. 普通用户

#### 用户文件与配置

- /etc/passwd
- /etc/shadow

#### adduser 命令

```
adduser demo #添加账号
```

补充：此命令在 CentOS7.2 系统中为软连接，源目标是 adduser 命令。在 Ubuntu16.04 中是独立的命令，添加账号时会有友好的提示，设置密码账号信息等。

#### useradd 命令

```
useradd demo #添加用户，默认家目录在 /home/ 目录下 demo 目录，与用户名一致

passwd demo #设置密码，默认添加用户之后没设置密码不允许登录

useradd -u 2333 demo #添加用户并指定用户 id ，一般情况很少使用

useradd -d /home/testuser demo #添加用户并指定家目录，一般情况很少使用

useradd -G xxx,xxx demo #添加用户并加入多个附加组
```

#### usermod 命令

```
usermod -L demo #锁定用户，不允许登录，相当于手动修改 /etc/shadow 文件中用户密码前加入 ! 一个感叹号

usermod -U demo #解除锁定
```

#### userdel 命令

```
userdel demo #删除用户，不删除用户家目录数据

userdel -r demo #删除用户并删除用户家目录

userdel -rf demo #强制删除用户无论是否登录，并删除用户家目录
```

#### passwd 目录

```
passwd -l demo #锁定用户，不允许登录，相当于手动修改 /etc/shadow 文件中用户密码前加入 !! 双感叹号

passwd -u demo #解除锁定
```

#### groups 命令

```
groups #查看当前用户的用户组名称
```

#### 用户组分 2 种

1. 初始组（默认组）
2. 其他组（附加组）

#### 用户组文件与配置

- /etc/group
- /etc/gshadow

#### groupadd 命令

```
groupadd test #添加用户组
```

#### groupmod 命令

```
groupmod -n new_test test #讲 test 组名修改为 new_test
```

#### gpasswd 命令

```
gpasswd -a nick new_test #将 nick 用户添加到 new_test 组

gpasswd -d nick new_test #将 nick 用户从 new_test 组删除
```

#### groupdel 命令

```
groupdel new_test #删除用户组
```

补充：每添加一个用户会自动创建一个用户组，称为默认组或初始组，这个组是不允许删除的，默认组一般不修改最好，用户 id 也一样。

#### sudo 命令

```
sudo vim /etc/passwd #以另一个用户身份执行命令，通常是 root 用户
```

补充：普通用户添加执行 `sudo` 的方法，在 `/etc/sudoers` 文件中添加 `username ALL=(ALL) ALL` 即可。

#### su 命令

```
su   #切换到 root 用户，仅切换路径

su - #切换到 root 用户，环境变量和路径一起切换

su - nick #切换到 nick 用户，环境变量和路径一起切换
```

#### whoami 命令

```
whoami #查看当前用户的名称
```

#### id 命令

```
id #查看当前用户的 id 、组 id 、附加组 id 

id -un #查看当前用户的名称

id -g #当前用户的组 id

id -G #当前用户的附加组 id

id -u root #查看指定用户的 id

id root #查看指定用户的 id gid groupsid
```

#### who 命令

```
who #查看当前的在线用户、终端号、IP、登录时间

who -q #查看在线的用户的用户名，用户数
```

## 备份

### dump

```
yum -y install  dump
```



### restore



```
yum -y install rmt
```



### xfsfump



```
yum  -y install xfsdump

```

### xfsrestore



```

```





























## 主要参考

tldr ：https://github.com/tldr-pages/tldr

最好用的命令查询网站：http://wangchujiang.com/linux-command/







