# 注意要使用Git bash
# 安装cross-env
npm i --save-dev cross-env -g
# 启动脚本-没有安装cross
set NODE_ENV = dev&& nodemon ./bin/www.js
# 启动脚本-安装cross
cross-env NODE_ENV=dev nodemon ./bin/www.js