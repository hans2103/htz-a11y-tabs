/* eslint-disable import/no-unresolved */
import tabs from 'htz-a11y-tabs';
/* eslint-enable import/no-unresolved */

const tabs1 = document.getElementById('tabs1');
const tabs2 = document.getElementById('tabs2');


window.tabs1 = tabs(tabs1);
window.tabs2 = tabs(tabs2, true);
