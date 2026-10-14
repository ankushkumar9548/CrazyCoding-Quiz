# 📊 CrazyCoding Quiz — Spreadsheet System Guide
**Evaluator:** Mr. Ankush (Assistant Professor, CSE)  
**Portal:** CrazyCoding Quiz Practice (HTML & CSS — 100 Questions)  
**WhatsApp:** +91 9568326772  

---

## 🌟 Aapko 2 Zabardast Features Mil Chuke Hain:

### 1. 🖥️ Instant Live Spreadsheet Dashboard (`spreadsheet.html`)
- **Direct Link:** Apne folder se `spreadsheet.html` par double click karein ya Quiz ke top header mein **"📊 Spreadsheet"** button click karein.
- **Features:**
  - 📊 **Real-time Stats:** Total Students, Pass Count, Fail Count, Average Score, Section I/J/L breakdown.
  - 🔍 **Live Search & Filters:** Student ke Name, Quiz ID (QUID), ya Phone number se search karein.
  - 🏛️ **Filter by Section:** Section I, J, ya L ke according filter karein.
  - 📥 **Export to Excel / CSV:** 1 click mein poori class ka result `.csv` file mein download karein (Excel mein direct open hota hai).
  - 🖨️ **Print Sheet:** Printable format mein sheet print ya PDF save karein.
  - 💬 **Direct WhatsApp:** Har student ke phone number par click karke direct WhatsApp open karein.

---

### 2. 🌐 Google Drive Online Google Sheets Setup (Optional Cloud Sync)
Agar aap chahte hain ki saare students ka data online Google Sheets mein bhi automatically save ho:

#### Step 1: Blank Google Sheet banayein
1. Apne browser mein [sheets.new](https://sheets.new) open karein.
2. Sheet ka naam rakh dein: `CrazyCoding Quiz Submissions`.

#### Step 2: Google Apps Script Code Dalein
1. Ussi sheet ke upar menu mein **Extensions $\rightarrow$ Apps Script** par click karein.
2. Wahan jo pehle se code ho usse mita kar aapke project folder ki file **`GoogleSheet_Code.gs`** ka code paste kar dein.

#### Step 3: Web App Deploy Karein
1. Upar blue button **Deploy $\rightarrow$ New deployment** click karein.
2. Gear icon par click karke **Web app** select karein:
   - **Description:** `CrazyCoding Quiz API`
   - **Execute as:** `Me` (Aapka Google account)
   - **Who has access:** `Anyone` *(taaki har student bina login kiye apna score bhej sake)*
3. **Deploy** click karein aur permission allow karein.
4. Jo **Web app URL** aayega (`https://script.google.com/macros/s/.../exec`), usse copy kar lein.

#### Step 4: URL Save Karein
- `spreadsheet.html` open karein, wahan blue button **"🌐 Google Sheets Sync"** par click karein aur apna Web App URL paste karke **Save** par click kar dein!
- *(Ya fir `script.js` mein line 2212 par `GOOGLE_SHEET_WEBAPP_URL = 'Aapka_URL_Here'` paste kar sakte hain).*

---

### 📁 Summary of Files Created:
1. **`spreadsheet.html`** $\rightarrow$ Teacher's visual dashboard and interactive spreadsheet.
2. **`GoogleSheet_Code.gs`** $\rightarrow$ Ready-to-use Google Apps Script backend.
3. **`index.html`** $\rightarrow$ Quiz frontend with direct links to the spreadsheet & CSV export.
4. **`script.js`** $\rightarrow$ Automatically saves every student's score upon quiz submission.
