# File Compression Using Huffman Coding

**Course:** Design & Analysis of Algorithms  
**Programme:** B.Tech CSE (AI & ML)  
**Section:** G  
**Student:** Navraj Amgai  
**Roll Number:** 2501730493  
**University:** K.R. Mangalam University

## Open the project

The complete website is contained in **one file: `index.html`**. The page design (CSS), Huffman Coding algorithm, file handling, compression, decompression, and verification are all included inside that HTML file.

1. Download or open `index.html` in a modern web browser.
2. The sample text is already loaded.
3. Click **Compress text**.
4. Review the original size, compressed `.huff` size, and space saved.
5. Click **Restore and check** to verify that the recovered text matches the original.

You can also choose a text-based file such as TXT, CSV, JSON, MD, or LOG. The website processes files locally in the browser; it does not upload the selected text to a server.

## GitHub Pages

Keep `index.html` at the root of the GitHub repository. To publish it, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. GitHub Pages will publish the website.

## Files in this repository

- `index.html` — the only application file; all HTML, CSS, and JavaScript are embedded here.
- `Navraj_Amgai_Capstone_Report.pdf` — the project report.
- `screenshots/` — screenshots of the website and successful compression/restoration result.

No Node.js installation, npm command, separate stylesheet, or separate JavaScript file is required.

## Algorithm summary

Huffman Coding is a greedy, lossless compression algorithm. It counts byte frequencies, repeatedly combines the two least-frequent nodes using a min-heap, and generates prefix-free binary codes from the resulting tree. The compressed file stores the frequency metadata and encoded bits, allowing the same tree to be rebuilt during decompression.

## Validation

The embedded algorithm was checked with seven cases: normal text, empty input, one repeated symbol, all 256 byte values, UTF-8 text, an invalid file signature, and truncated metadata. All seven checks passed. A sample run reduced the sample input from 1,308 bytes to 1,115 bytes (14.8% saved), and the restored bytes matched the original.

*Note: Huffman Coding does not make every file smaller. Small files may grow because the compressed format stores metadata needed for restoration.*
