const bootText = `
Initializing project    
Codename:    
    
    Luka Oostdam Mabasa
    
Release date:             27-11-2025 11:36
Weight:                   2460g
Eye color:                BROWN
Disposition               CHILL
Oxygen levels:            OK
Gastrointestinal system:  FULLY FUNCTIONAL
Favorite food:            MOM'S MILK
    
...OPENING EYES...
    
...HELLO WORLD...
`;
const lines = bootText.split('\n');
const bootDiv = document.getElementById('boot');
let lineIdx = 0;
let charIdx = 0;
let output = '';

function typeLine() {
  // Fade in image and fade text to black after text is done
  if (lineIdx >= lines.length) {
    const img = document.getElementById('luka-img');
    img.style.display = 'block';
    setTimeout(() => {
      img.style.opacity = 1;
      bootDiv.style.color = '#000';
    }, 100);
    return;
  }
  const line = lines[lineIdx];
  if (charIdx < line.length) {
    output += line[charIdx];
    bootDiv.textContent = output + '\u2588'; // Unicode full block
    charIdx++;
    setTimeout(typeLine, 55 + Math.random() * 40);
  } else {
    output += '\n';
    bootDiv.textContent = output;
    lineIdx++;
    charIdx = 0;
    setTimeout(typeLine, 300);
  }
}
typeLine();