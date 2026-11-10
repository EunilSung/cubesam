// 큐브수삼 랜딩 페이지 응답 → Google 스프레드시트 저장
// 1) 새 Google 스프레드시트 > 확장 프로그램 > Apps Script 에 이 코드를 붙여 넣기
// 2) 배포 > 새 배포 > 유형: 웹 앱, 실행 사용자: 나, 액세스 권한: 모든 사용자 > 배포
// 3) 나온 웹 앱 URL을 index.html 의 FORM_ENDPOINT 에 넣기

var HEADERS = ['ts', 'email', 'use', 'age', 'freq', 'variant',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'referrer', 'ua'];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  var d = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow(HEADERS.map(function (k) { return String(d[k] || '').slice(0, 300); }));
  return ContentService.createTextOutput('ok');
}
