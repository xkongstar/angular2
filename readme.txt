this is my first demo for git
1. git init
2. git add  git commit -m "注释"
3.git status 查看状态 git diff 修改了什么
4.git log 可以查看提交历史 --pretty=online 精简
5.git reset --hard HEAD^^  HEAD~100 版本回滚
6.git reflog 查看命令历史 助于回滚 
7.git checkout -- file 工作区回滚，未保存到缓存区
8.git reset HEAD file 从缓存区回滚到工作区，撤回add
9.git rm file 删除工作区文件 在提交
10.误删文件，版本库有 git checkout -- file
11.$ ssh-keygen -t rsa -C "youremail@example.com" 创建ssh key
12.在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub,将id_rsa.pub添加到GitHubssh
13.git remote add origin git@github.com:xkongstar/angular2.git将本地库同步到远程库
14.git push -u origin master 把本地库的所有内容推送到远程库上
15.git pull --rebase origin master 将远程库的同步过来
16.git push origin master 以后提交远程库
