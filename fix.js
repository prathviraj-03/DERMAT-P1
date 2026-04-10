
const fs = require("fs");

function replaceFile(path, oldText, newText) {
  const content = fs.readFileSync(path, "utf8");
  if (content.includes(oldText)) {
    fs.writeFileSync(path, content.replace(oldText, newText));
    console.log("Updated", path);
  } else {
    console.log("Not found in", path);
  }
}

function replaceRegex(path, regex, newText) {
  const content = fs.readFileSync(path, "utf8");
  fs.writeFileSync(path, content.replace(regex, newText));
  console.log("Regex updated", path);
}

// 1. GLOBAL PADDING & OVERFLOW PREVENTION (globals.css)
let css = fs.readFileSync("src/app/globals.css", "utf8");
css += `
.page-section { padding: 6vw 5vw; width: 100%; box-sizing: border-box; }
.fluid-btn-global {
  display: block !important;
  width: calc(100% - 10vw) !important;
  margin: 0 5vw 3vw 5vw !important;
  padding: 4vw !important;
  min-height: 52px !important;
  box-sizing: border-box !important;
  text-align: center;
}
@media (min-width: 768px) {
  .fluid-btn-global {
    width: auto !important;
    margin: 0 !important;
    padding: 0 2rem !important;
    display: inline-flex !important;
  }
}
.fluid-newsletter-row {
  display: flex;
  flex-direction: column;
  gap: 3vw;
  padding: 0 5vw;
}
@media (min-width: 768px) {
  .fluid-newsletter-row {
    flex-direction: row;
    gap: 0.5rem;
    padding: 0;
  }
}
.fluid-newsletter-row input, .fluid-newsletter-row button {
  width: 100%;
  padding: 4vw;
}
@media (min-width: 768px) {
  .fluid-newsletter-row input, .fluid-newsletter-row button {
    width: auto;
    padding: auto;
  }
}
.collage-container-fix {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.collage-container-fix img { max-width: 85% !important; }
.text-overflow-fix {
  padding-right: 5vw;
  word-break: break-word;
  overflow-wrap: break-word;
  width: 100%;
  max-width: 100%;
}
.stats-row-fix {
  padding: 0 5vw;
  display: flex;
  justify-content: flex-start;
  gap: 8vw;
}
.stats-row-fix > div { text-align: left; }
.stats-row-fix > div > div:first-child { font-size: clamp(20px, 6vw, 26px); font-weight: 700; }
.stats-row-fix > div > div:last-child { font-size: clamp(10px, 2.8vw, 12px); letter-spacing: 0.1em; }
`;
fs.writeFileSync("src/app/globals.css", css);

// 3. TEXT OVERFLOW CUT OFF ON RIGHT (PAGE 6, Cosmetic Dermatology, maybe sticky-scroll-section.tsx or vision-section.tsx)
// Wait, "Cosmetic Dermatology" is... let me find it.

