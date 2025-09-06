const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/aftl logo (1).svg');
  const publicDir = path.join(__dirname, '../public');
  
  // Check if SVG exists
  if (!fs.existsSync(svgPath)) {
    console.error('SVG logo not found at:', svgPath);
    return;
  }

  console.log('Generating favicon files from SVG...');

  try {
    // Read SVG content
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' },
      { size: 96, name: 'favicon-96x96.png' },
    ];

    // Generate PNG files
    for (const { size, name } of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, name));
      console.log(`✓ Generated ${name}`);
    }

    // Generate ICO file (multi-size)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    // Update web app manifest icons
    const webManifestPath = path.join(publicDir, 'web-app-manifest-192x192.png');
    const webManifest512Path = path.join(publicDir, 'web-app-manifest-512x512.png');
    
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(webManifestPath);
    console.log('✓ Generated web-app-manifest-192x192.png');

    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(webManifest512Path);
    console.log('✓ Generated web-app-manifest-512x512.png');

    console.log('\n🎉 All favicon files generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
