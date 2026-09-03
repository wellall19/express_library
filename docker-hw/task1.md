## 1. Загрузите образ busybox последней версии

C:\web-development\node.js\express_library>docker pull busybox:latest
latest: Pulling from library/busybox
b05093807bb0: Pull complete 
7270b3e1860c: Download complete 
Digest: sha256:dc2d74b28e4cf8984fa52af1f39bc7c3d9c73760b41a74d629f5d11b1ab28616
Status: Downloaded newer image for busybox:latest
docker.io/library/busybox:latest

## 2.Запустите новый контейнер busybox с командой ping сайта netology.ru, и количеством пингов 7, поименуйте контейнер pinger

C:\web-development\node.js\express_library>docker run --name pinger busybox ping -c 7 netology.ru
PING netology.ru (51.250.51.8): 56 data bytes
64 bytes from 51.250.51.8: seq=0 ttl=63 time=65.840 ms
64 bytes from 51.250.51.8: seq=1 ttl=63 time=55.154 ms
64 bytes from 51.250.51.8: seq=2 ttl=63 time=61.520 ms
64 bytes from 51.250.51.8: seq=3 ttl=63 time=62.294 ms
64 bytes from 51.250.51.8: seq=4 ttl=63 time=59.755 ms
64 bytes from 51.250.51.8: seq=5 ttl=63 time=66.881 ms
64 bytes from 51.250.51.8: seq=6 ttl=63 time=63.352 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 55.154/62.113/66.881 ms

## 3. Выведите на список всех контейнеров - запущенных и остановленных

C:\web-development\node.js\express_library>docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                          PORTS     NAMES
a5659a6cc3ca   busybox   "ping -c 7 netology.…"   About a minute ago   Exited (0) About a minute ago             pinger

## 4. Выведите на экран логи контейнера с именем pinger

C:\web-development\node.js\express_library>docker logs -t  pinger  
2026-09-03T11:58:13.207003676Z PING netology.ru (51.250.51.8): 56 data bytes
2026-09-03T11:58:13.207127666Z 64 bytes from 51.250.51.8: seq=0 ttl=63 time=65.840 ms
2026-09-03T11:58:14.195548298Z 64 bytes from 51.250.51.8: seq=1 ttl=63 time=55.154 ms
2026-09-03T11:58:15.202175880Z 64 bytes from 51.250.51.8: seq=2 ttl=63 time=61.520 ms
2026-09-03T11:58:16.203284121Z 64 bytes from 51.250.51.8: seq=3 ttl=63 time=62.294 ms
2026-09-03T11:58:17.201912158Z 64 bytes from 51.250.51.8: seq=4 ttl=63 time=59.755 ms
2026-09-03T11:58:18.210187982Z 64 bytes from 51.250.51.8: seq=5 ttl=63 time=66.881 ms
2026-09-03T11:58:19.207669348Z 64 bytes from 51.250.51.8: seq=6 ttl=63 time=63.352 ms
2026-09-03T11:58:19.211838753Z 
2026-09-03T11:58:19.211949443Z --- netology.ru ping statistics ---
2026-09-03T11:58:19.211957223Z 7 packets transmitted, 7 packets received, 0% packet loss
2026-09-03T11:58:19.211962575Z round-trip min/avg/max = 55.154/62.113/66.881 ms

## 5. Запустите второй раз контейнера с именем pinger

C:\web-development\node.js\express_library>docker start pinger   
pinger

## 6. Выведите на список всех контейнеров - запущенных и остановленных

C:\web-development\node.js\express_library>docker ps -a          
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                          PORTS     NAMES
a5659a6cc3ca   busybox   "ping -c 7 netology.…"   5 minutes ago   Exited (0) About a minute ago             pinger

## 7. Выведите на экран логи контейнера с именем pinger

C:\web-development\node.js\express_library>docker logs -t  pinger   
2026-09-03T11:58:13.207003676Z PING netology.ru (51.250.51.8): 56 data bytes
2026-09-03T11:58:13.207127666Z 64 bytes from 51.250.51.8: seq=0 ttl=63 time=65.840 ms
2026-09-03T11:58:14.195548298Z 64 bytes from 51.250.51.8: seq=1 ttl=63 time=55.154 ms
2026-09-03T11:58:15.202175880Z 64 bytes from 51.250.51.8: seq=2 ttl=63 time=61.520 ms
2026-09-03T11:58:16.203284121Z 64 bytes from 51.250.51.8: seq=3 ttl=63 time=62.294 ms
2026-09-03T11:58:17.201912158Z 64 bytes from 51.250.51.8: seq=4 ttl=63 time=59.755 ms
2026-09-03T11:58:18.210187982Z 64 bytes from 51.250.51.8: seq=5 ttl=63 time=66.881 ms
2026-09-03T11:58:19.207669348Z 64 bytes from 51.250.51.8: seq=6 ttl=63 time=63.352 ms
2026-09-03T11:58:19.211838753Z 
2026-09-03T11:58:19.211949443Z --- netology.ru ping statistics ---
2026-09-03T11:58:19.211957223Z 7 packets transmitted, 7 packets received, 0% packet loss
2026-09-03T11:58:19.211962575Z round-trip min/avg/max = 55.154/62.113/66.881 ms
2026-09-03T12:02:23.109030208Z PING netology.ru (51.250.51.8): 56 data bytes
2026-09-03T12:02:23.109112713Z 64 bytes from 51.250.51.8: seq=0 ttl=63 time=55.384 ms
2026-09-03T12:02:24.125230519Z 64 bytes from 51.250.51.8: seq=1 ttl=63 time=71.075 ms
2026-09-03T12:02:25.113552843Z 64 bytes from 51.250.51.8: seq=2 ttl=63 time=58.972 ms
2026-09-03T12:02:26.114405868Z 64 bytes from 51.250.51.8: seq=3 ttl=63 time=59.204 ms
2026-09-03T12:02:27.114999054Z 64 bytes from 51.250.51.8: seq=4 ttl=63 time=58.725 ms
2026-09-03T12:02:28.121378926Z 64 bytes from 51.250.51.8: seq=5 ttl=63 time=64.454 ms
2026-09-03T12:02:29.118597556Z 64 bytes from 51.250.51.8: seq=6 ttl=63 time=59.949 ms
2026-09-03T12:02:29.118666990Z 
2026-09-03T12:02:29.118672852Z --- netology.ru ping statistics ---
2026-09-03T12:02:29.118676399Z 7 packets transmitted, 7 packets received, 0% packet loss
2026-09-03T12:02:29.118679901Z round-trip min/avg/max = 55.384/61.109/71.075 ms

## 8. Определите по логам общее количество запусков команды ping и какое общее количество отправленых запросов

Запусков ping 2, количество отправленных запросов - 14, по 7 на каждый запуск.

## 9. Удалите контейнер с именем pinger

C:\web-development\node.js\express_library>docker rm pinger
pinger

## 10. Удалите образ busybox

C:\web-development\node.js\express_library>docker rmi busybox
Untagged: busybox:latest
Deleted: sha256:dc2d74b28e4cf8984fa52af1f39bc7c3d9c73760b41a74d629f5d11b1ab28616!