function runCode() {
    let html = document.getElementById('html').value;
    let css = '<style>' + document.getElementById('css').value + '</style>';
    let js = '<script>' + document.getElementById('js').value + '<\/script>';
    let preview = document.getElementById('preview').contentWindow.document;
    preview.open();
    preview.write(html + css + js);
    preview.close();
}
