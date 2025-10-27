const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const outDir = path.join(process.cwd(), '.next/server/app');
  
  if (!fs.existsSync(outDir)) {
    console.log('No .next directory found. Skipping console capture injection.');
    return;
  }
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('dashboard-console-capture.js')) {
          content = content.replace(
            '</head>',
            '<script src="/dashboard-console-capture.js"></script></head>'
          );
          fs.writeFileSync(filePath, content);
          console.log(`Injected console capture into ${filePath}`);
        }
      }
    });
  }
  
  processDirectory(outDir);
}

injectConsoleCapture();