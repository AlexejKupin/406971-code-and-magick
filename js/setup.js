
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow','green',];
var FIREBALL_COLOR = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848']

var GamePlayer = function (n, c, e) {
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

var getRandCoat = function() {
  return WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];
};

var getRandEyes = function() {
  return WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];
};

var getRandFireballColor = function() {
  return FIREBALL_COLOR[Math.floor(Math.random() * FIREBALL_COLOR.length)];
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

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupSubmit = document.querySelector('.setup-submit');

setupOpen.addEventListener('click', function() {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden');

  document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
  setup.classList.add('hidden');
  }
});
});

setupClose.addEventListener('keydown', function(evt) {
 if (evt.keyCode === 13) {
   setup.classList.add('hidden');
 };
});

setupSubmit.addEventListener('click', function() {
  setup.classList.add('hidden');

  document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
  setup.classList.add('hidden');
  }
});
});

var wizardCoat = setup.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function(){
  wizardCoat.setAttribute('style', 'fill:' + getRandCoat());
});

var wizardEyes = setup.querySelector('.wizard-eyes');

wizardEyes.addEventListener('click', function(){
  wizardEyes.setAttribute('style', 'fill:' + getRandEyes());
});


var SetupFireballWrap = setup.querySelector('.setup-fireball-wrap');

SetupFireballWrap.addEventListener('click', function(){
  SetupFireballWrap.setAttribute('style', 'background:' + getRandFireballColor());
});