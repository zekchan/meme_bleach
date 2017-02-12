// CONFIG TODO: перенести в отдельную страницу и хранить в chromeStorage

const usersBlackList = [
  '22904165' // Гарданов
];
const anotherSelectors = [
  '.nim-dialog_muted .nim-dialog--text-preview', // превью замьюченных чатов
  '.nim-dialog_muted ._im_dialog_unread_ct' // счетчик непрочитанных сообщений у замьюченных чатов
];

const makeUserSelector = id => `[data-peer="${id}"]`;
const selectors = [
  ...usersBlackList.map(makeUserSelector),
  ...anotherSelectors
].join(',');

const styleSheet = `${selectors}{display: none !important;}`;
function addStyleSheet() {
  const style = document.createElement('style');
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addStyleSheet, false);