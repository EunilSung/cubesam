# 큐브수삼 랜딩 페이지

광고 A(수삼 라떼)/B(삼계탕·백숙) 수요 검증용 출시 알림 신청 페이지. 결제·판매 없음.

## 구성
- `index.html` — 페이지 전체 (외부 의존: Pretendard 폰트 CDN, 메타 픽셀)
- `assets/` — 대표컷 2장, 제품 사진, 자막 없는 영상 2편(소리 없음, 540px)
- `apps-script.gs` — 응답(이메일은 선택)을 Google 스프레드시트에 저장하는 코드

## A/B 연결
| 광고 | 랜딩 URL 예시 |
|---|---|
| A 수삼 라떼 | `https://<주소>/?utm_source=meta&utm_medium=paid&utm_campaign=cubesam_test&utm_content=a_latte` |
| B 삼계탕·백숙 | `https://<주소>/?utm_source=meta&utm_medium=paid&utm_campaign=cubesam_test&utm_content=b_soup` |

`utm_content` 에 `b` 또는 `soup` 가 들어가면 B 화면(첫 이미지·문구·영상 순서)이 나오고, 아니면 A 화면입니다. `?v=b` 로도 확인할 수 있습니다.

## 배포 전 할 일
1. **신청 저장:** 새 Google 스프레드시트 → 확장 프로그램 → Apps Script → `apps-script.gs` 붙여 넣기 → 배포 › 새 배포 › 웹 앱(실행: 나, 액세스: 모든 사용자) → URL을 `index.html` 의 `FORM_ENDPOINT` 에 입력
2. **메타 픽셀:** 메타 이벤트 관리자에서 픽셀 생성 → ID를 `META_PIXEL_ID` 에 입력 (신청 완료 시 `Lead` 이벤트)
3. **문의 이메일:** `CONTACT_EMAIL` 입력
4. **배포:** 이 폴더를 그대로 GitHub Pages / Vercel / Netlify 중 하나에 올림 (무료, 도메인 구입 없이)
5. **확인:** 배포 주소에서 테스트 신청 1건 → 스프레드시트에 들어오는지 확인 후 삭제

## 측정 지표
- 메타 광고 관리자: 노출, 클릭률(CTR), 랜딩 페이지 조회, 리드(신청) — 광고 A/B별
- 스프레드시트: 응답 수, 이메일 남긴 수, 선택 용도(라떼/탕), 연령대, 구매 빈도 — `variant`·`utm_content` 별

## 로컬 미리보기
`.claude/launch.json` 의 `landing` (python http.server, 8791 포트). 로컬에서는 `FORM_ENDPOINT` 가 비어 있어도 완료 화면까지 확인됩니다. 배포 주소에서 비어 있으면 신청이 막힙니다.
