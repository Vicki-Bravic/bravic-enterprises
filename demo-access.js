(() => {
  const button = document.getElementById('copy-password');
  const password = document.getElementById('demo-password');
  const status = document.getElementById('copy-status');
  let reset;

  function copyFallback(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.readOnly = true;
    field.className = 'clipboard-fallback';
    field.setAttribute('aria-label', 'Visitor password to copy');
    document.body.append(field);
    field.select();
    field.setSelectionRange(0, text.length);
    try {
      return document.execCommand('copy');
    } finally {
      field.remove();
      button.focus({ preventScroll: true });
    }
  }

  button.hidden = false;
  button.addEventListener('click', async () => {
    clearTimeout(reset);
    status.textContent = '';
    let copied = false;
    try {
      await navigator.clipboard.writeText(password.textContent);
      copied = true;
    } catch {
      try { copied = copyFallback(password.textContent); } catch { /* Show manual instructions. */ }
    }
    status.textContent = copied ? 'Password copied!' : 'Please select and copy the visitor password above.';
    if (copied) reset = setTimeout(() => { status.textContent = ''; }, 4000);
  });
})();
