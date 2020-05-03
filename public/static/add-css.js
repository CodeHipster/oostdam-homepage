/**
 * Because we want to decouple CSS from modules where it is not used we have this function for modules to add their own css.
 * Call this in the beforeCreate function of the vue component.
 * @param {*} fileName: path to the css file from the root of the app. e.g. static/oostdam.css
 */
export default function(fileName) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.href = fileName;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
  }