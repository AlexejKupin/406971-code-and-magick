
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow','green',];

function GamePlayer(n, c, e) {
    this.name = n;
    this.coatColor = c;
    this.eyesColor = e;
};

var wizards = [];

for (i = 0; i <= 4; i++) {
var randName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] +' '+ WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
var randCoat = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];
var randEyes = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];
  wizards[i] = new GamePlayer(randName,randCoat,randEyes);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');