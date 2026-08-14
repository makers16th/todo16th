// 설치성(installability) 호환용 최소 서비스워커 — 구버전 Chrome의 PWA 설치 조건 충족 목적.
// 캐싱·오프라인 없음: fetch를 가로채지 않고 네트워크로 그대로 통과시킨다.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* passthrough */ });
