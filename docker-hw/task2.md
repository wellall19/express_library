## 1. Загрузите образ node версии 15.14

C:\web-development\node.js\express_library>docker pull node:15.14
15.14: Pulling from library/node
4b57d41e8391: Pull complete 
989c5d2d2313: Pull complete 
55fab5cadd3c: Pull complete 
dc05be471d51: Pull complete 
6041b69671c6: Pull complete 
bfde2ec33fbc: Pull complete 
787f5e2f1047: Pull complete 
7b6173a10eb8: Pull complete 
bd821d20ef8c: Pull complete 
Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Status: Downloaded newer image for node:15.14
docker.io/library/node:15.14

## Запустите контейнер node в интерактивном режиме подключения терминала, поименуйте его mynode, передайте две переменные среды NAME=<ваше имя> и SURNAME=<ваша фамилия>

C:\web-development\node.js\express_library>docker run --name mynode -it --env NAME=Masha --env SURNAME=Tomilova node:15.14
Welcome to Node.js v15.14.0.
Type ".help" for more information.

## В интерактивной среде выполнения node выполните скрипт, который выведет на экран приветсвтие: Привет, <ваше имя> <ваша фамилия>!, эти данные должны быть получены из переменных среды

> console.log(`Привет, ${process.env.NAME} ${process.env.SURNAME}!`)
Привет, Masha Tomilova!
undefined
> 
What's next:
    Debug this container error with Gordon → docker ai "help me fix this container error"

## 4. Остановите контейне

C:\web-development\node.js\express_library>docker stop mynode

## 5. Удалите образ node версии 15.14

C:\web-development\node.js\express_library>docker rm mynode     
mynode

C:\web-development\node.js\express_library>docker rmi node:15.14
Untagged: node:15.14
Deleted: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627