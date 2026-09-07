## 1. Загрузите образ node версии 15.14

C:\web-development\node.js\express_library>docker pull node:15.14
15.14: Pulling from library/node
4b57d41e8391: Pull complete 
7b6173a10eb8: Pull complete 
55fab5cadd3c: Pull complete 
bd821d20ef8c: Pull complete 
989c5d2d2313: Pull complete 
6041b69671c6: Pull complete 
dc05be471d51: Pull complete 
bfde2ec33fbc: Pull complete 
787f5e2f1047: Pull complete 
Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
Status: Downloaded newer image for node:15.14
docker.io/library/node:15.14

## 2. Запустите контейнер с именем first_node из образа node версии 15.14 в фоновом режиме, подключив папку data из текущей директории в /var/first/data контейнера

C:\web-development\node.js\express_library>docker run --name first_node -dit -v "%cd%/data:/var/first/data"  node:15.14
ed74c5a4969ab56242c2040192dbda390d274e2fc6caf95a8112c04c65843029

## 3. Запустите контейнер с именем second_node из образа node версии 15.14 в фоновом режиме, подключив папку data из текущей директории в /var/second/data контейнера

C:\web-development\node.js\express_library>docker run --name second_node -dit -v "%cd%/data:/var/second/data"  node:15.14
b58f1bc0cadcbae60eff9712ae86b5b589a8af0a1cca652e2a9c05905a70efa8

## 4. Подключитесь к контейнеру first_node с помощью exec и создайте текстовый файл любого содержания в /var/first/data

C:\web-development\node.js\express_library>docker exec -it first_node bash
root@ed74c5a4969a:/# cd /var/first/data
root@ed74c5a4969a:/var/first/data# echo 'in c
ontainer' > note.txt

## 5. Добавьте еще один файл в папку data на хостовой машине

Добавила файл newFile.txt

## 6. Подключитесь к контейнеру second_node с помощью exec и получите список файлов в директории /var/second/data, выведете на экран содержимое файлов

C:\web-development\node.js\express_library>docker exec -it second_node bash
root@b58f1bc0cadc:/# ls -1 var/second/data
Library.js
newFile
note.txt
user.js

## 7. Остановите оба контейнера

root@ed74c5a4969a:/# exit
root@b58f1bc0cadc:/# exit

## 8. Удалите оба контейнера

C:\web-development\node.js\express_library>docker rm -f  first_node
first_node

C:\web-development\node.js\express_library>docker rm -f  second_node
second_node

## 9. Удалите образ node версии 15.14

C:\web-development\node.js\express_library>docker rmi node:15.14
Untagged: node:15.14
Deleted: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627