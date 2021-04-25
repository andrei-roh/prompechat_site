const footer = document.createElement('div');
const companyNameBel = document.createElement('div');
const companyAdressBel = document.createElement('div');
const companyRequisitesBel = document.createElement('div');
const companyNameRu = document.createElement('div');
const companyAdressRu = document.createElement('div');
const companyRequisitesRu = document.createElement('div');
const footerDate = document.createElement('div');

footer.classList.add('BLOCK_BOTTOM', 'PAGE_PADDING', 'CONTENT_CENTER', 'TEXT_WHITE', 'BACKGROUND_DBLUE', 'PADDING_T_2', 'PADDING_B_2', 'TEXT_SMALL');
companyNameBel.classList.add('HIDDEN');
companyAdressBel.classList.add('HIDDEN');
companyRequisitesBel.classList.add('MARGIN_B_1', 'HIDDEN', 'TEXT_CENTER');
companyNameRu.classList.add('HIDDEN');
companyAdressRu.classList.add('HIDDEN');
companyRequisitesRu.classList.add('HIDDEN', 'TEXT_CENTER');
footerDate.classList.add('MARGIN_T_1');

companyNameBel.innerHTML = 'Адкрытае акцыянернае таварыства "Прамдрук"&nbsp;';
companyAdressBel.innerHTML = '220049, г. Мiнск, вул. Чарняхоўскага, д. 3, УНП 100722731';
companyRequisitesBel.innerHTML = 'р/р BY64 AKBB 3012 0146 3128 2530 0000, ЦБП 514 ААТ "ААБ Беларусбанк" г. Мiнск, вул. Сурганава, 47а, БIК AKBBBY2X, АКПВ 373137455000';
companyNameRu.innerHTML = 'Открытое акционерное общество "Промпечать"&nbsp;';
companyAdressRu.innerHTML = '220049, г. Минск, ул. Черняховскога, д. 3, УНП 100722731';
companyRequisitesRu.innerHTML = 'р/сч BY64 AKBB 3012 0146 3128 2530 0000, ЦБУ 514 ОАО "АСБ Беларусбанк" г. Минск, ул. Сурганова, 47а, БИК AKBBBY2X, ОКПО 373137455000';
footerDate.innerHTML = '&copy;2020 Минск';

document.body.appendChild(footer);
footer.appendChild(companyNameBel);
footer.appendChild(companyAdressBel);
footer.appendChild(companyRequisitesBel);
footer.appendChild(companyNameRu);
footer.appendChild(companyAdressRu);
footer.appendChild(companyRequisitesRu);
footer.appendChild(footerDate);
