import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src/assets');

async function optimizeImages() {
    if (!fs.existsSync(assetsDir)) {
        console.error('Assets directory not found:', assetsDir);
        return;
    }

    const files = fs.readdirSync(assetsDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to convert.`);

    for (const file of pngFiles) {
        const filePath = path.join(assetsDir, file);
        const fileName = path.parse(file).name;
        const destPath = path.join(assetsDir, `${fileName}.webp`);

        try {
            await sharp(filePath)
                .webp({ quality: 80, effort: 6 }) // effortless lossless? No, slight lossy for size. 80 is good.
                .toFile(destPath);

            console.log(`Converted: ${file} -> ${fileName}.webp`);
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
}

optimizeImages();
