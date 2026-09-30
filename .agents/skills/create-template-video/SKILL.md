---
name: create-template-video
description: Tạo video tin tức/giới thiệu 9:16 bằng TEMPLATE HyperFrames chuyên nghiệp (poster editorial) từ URL bài báo, thông tin app, hoặc file .txt tiếng Việt. Trigger khi user muốn tạo video, làm short news, video giới thiệu app, video kiểu template/poster đẹp. Output: video.mp4 + voice.mp3 + script.txt cho CapCut.
---

# Create Template Video Skill

Sinh video ngắn 9:16 dùng các template HyperFrames. Claude chỉ điền **chữ vào slot** của template — toàn bộ thiết kế/animation do template lo.

> **QUAN TRỌNG:** Toàn bộ công cụ tạo video nằm trong thư mục `tools/video-generator`. Bạn MẶC ĐỊNH phải thực hiện mọi thao tác đọc/ghi/chạy script (bao gồm cả `npm run pipeline`) bên trong thư mục `tools/video-generator`.

## Input
1 tham số: URL bài báo (`http://`/`https://`), thông tin text mô tả, hoặc đường dẫn file `.txt`.

## Workflow (theo đúng thứ tự)

### Step 1–3: Lấy nội dung + tạo output dir
Phát hiện input rồi lấy nội dung:
- **URL** (bắt đầu `http://`/`https://`) → Lấy nội dung từ trang web.
- **File `.txt` / nội dung được cung cấp** → title = dòng đầu, content = phần còn lại.
- slug = ASCII không dấu (bỏ dấu tiếng Việt, đ→d), ≤40 ký tự; timestamp = `YYYYMMDD-HHmm`.
- Thư mục output sẽ là: `tools/video-generator/output/<slug>-<timestamp>/`. Nhớ tạo thư mục này `mkdir -p`.

### Step 4: Đọc danh mục template
Đọc `tools/video-generator/templates/CATALOG.md` để biết template nào có + slot inputs của mỗi cái.
**Chỉ dùng templateId có trong CATALOG.** Hiện có:

**HOOK (chỉ 1):**
- `frame-liquid-bg-hero` — hero aurora (blob động + headline + CTA). LUÔN dùng cho scene hook.

**BODY (Claude tự chọn theo nội dung — xem Step 5):**
- `frame-vignelli` — 1 con số nền tối charcoal + đỏ.
- `frame-pentagram-stat` — 1 con số nền tối neon.
- `frame-bold-poster` — tuyên bố mạnh nhiều dòng + figure số lớn.
- `frame-build-minimal` — câu chốt mạnh nền tối.
- `frame-creative-voltage` — câu sáng tạo/khẩu hiệu, split xanh điện + chữ viết tay.
- `frame-glitch-title` — cyberpunk glitch RGB-split.
- `frame-aicoding-list` — **DANH SÁCH** 2–5 mục (mỗi mục có icon + tag mức độ).
- `frame-aicoding-comparison` — **SO SÁNH 2 thứ**.

**OUTRO:**
- `frame-logo-outro` — **outro mặc định** / end-card thương hiệu.
- `frame-statement-outro` — outro thay thế (card đỏ trên nền giấy).

### Step 5: Sinh script.json (template mode)
Cấu trúc bắt buộc:
```json
{
    "version": "1.0",
    "renderer": "hyperframes",
    "aspect": "9:16",
    "metadata": {
        "title": "...",
        "source": { "url": "...", "domain": "...", "image": null },
        "channel": "Portfolio"
    },
    "voice": { "provider": "omnivoice", "speed": 1.0 },
    "scenes": [
        /* 8–12 scene: 1 hook + 6–10 body + 1 outro */
    ]
}
```
- `provider`: luôn là `omnivoice` (TTS local duy nhất; không cần `voiceId`/API key).
- Mỗi scene: `{ id, type, voiceText, templateId, inputs }`. `inputs` khớp slot trong CATALOG.
- scenes[0].type = `hook`; scene cuối .type = `outro` (templateId = `frame-logo-outro`).
- **8–12 scene**; tổng voiceText ~270–360 từ (~90–120s). Mỗi body scene **~25–40 từ**.
- **`inputs` (HIỂN THỊ)** có thể chứa emoji. **`voiceText` (ĐỌC)** KHÔNG ĐƯỢC CHỨA emoji, và số/ký hiệu phải VIẾT BẰNG CHỮ (vd: "200MP" -> "hai trăm megapixel").

### Step 6: Ghi script.json
Ghi file script vào `<outputDir>/script.json` bên trong thư mục `tools/video-generator/output/...`.

### Step 7: Chạy pipeline
Chạy bash command trong thư mục `tools/video-generator`:
```bash
cd tools/video-generator && npm run pipeline -- output/<slug>-<timestamp>/script.json
```

### Step 8: Báo kết quả
Báo cáo lại cho người dùng vị trí các file kết quả (`video.mp4`, `voice.mp3`, `script.txt`).
