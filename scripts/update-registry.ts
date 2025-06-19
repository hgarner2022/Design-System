import fs from 'fs';
import path from 'path';

interface UIConfig {
  framework: string;
  builder: string;
  language: string;
  styling: {
    framework: string;
    configPath: string;
    globalCSS: string;
  };
  tokens: {
    source: string;
    output: string;
  };
  fonts: {
    body: string;
    headings: string;
  };
  rsc: boolean;
  tsx: boolean;
  components: string[];
}

function scanComponents(dir: string): string[] {
  const components: string[] = [];
  
  if (!fs.existsSync(dir)) {
    return components;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      components.push(...scanComponents(filePath));
    } else if (file.endsWith('.tsx') && !file.endsWith('.stories.tsx') && !file.endsWith('.test.tsx')) {
      // Extract component name from filename
      const componentName = path.basename(file, '.tsx');
      components.push(componentName);
    }
  }
  
  return components;
}

function updateUIConfig(components: string[]) {
  const configPath = path.join(__dirname, '../ui.config.json');
  
  const config: UIConfig = {
    framework: 'Next.js/React',
    builder: 'Next.js',
    language: 'TypeScript',
    styling: {
      framework: 'Tailwind CSS v4',
      configPath: './tailwind.config.js',
      globalCSS: './src/app/globals.css',
    },
    tokens: {
      source: './tokens/tokens.json',
      output: './src/styles/theme.css',
    },
    fonts: {
      body: 'Plus Jakarta Sans',
      headings: 'Petrona',
    },
    rsc: true,
    tsx: true,
    components: components,
  };
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`Updated ui.config.json with ${components.length} components:`, components);
}

// Main execution
const componentsDir = path.join(__dirname, '../src/components');
const components = scanComponents(componentsDir);

if (components.length === 0) {
  console.log('No components found in src/components directory');
} else {
  updateUIConfig(components);
} 