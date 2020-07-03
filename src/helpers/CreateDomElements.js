export const DomModule = (() => {

  const addHtmlNav = (classArray, id = null) => {
    const newNav = document.createElement('nav');
    for (let i = 0; i < classArray.length; i += 1) {
      newNav.classList.add(classArray[i]);
    }
    if (id != null) newNav.id = id;
    return newNav;
  };

  const addHtmlDiv = (classArray, id = null) => {
    const newDiv = document.createElement('div');
    for (let i = 0; i < classArray.length; i += 1) {
      newDiv.classList.add(classArray[i]);
    }
    if (id != null) newDiv.id = id;
    return newDiv;
  };

  const addHtmlAnchor = (classArray, href, text, id) => {
    const newAnchor = document.createElement('a');
    for (let i = 0; i < classArray.length; i += 1) {
      newAnchor.classList.add(classArray[i]);
    }
    newAnchor.href = href;
    newAnchor.innerHTML = text;
    newAnchor.id = id;
    return newAnchor;
  };

  const addHtmlInput = (classArray, type, placeHolder, id, text = '') => {
    const newInput = document.createElement('input');
    for (let i = 0; i < classArray.length; i += 1) {
      newInput.classList.add(classArray[i]);
    }
    newInput.id = id;
    newInput.setAttribute('type', type);
    newInput.setAttribute('placeholder', placeHolder);
    newInput.value = text;
    return newInput;
  };

  const addHtmlButton = (classArray, type, id, text) => {
    const newButton = document.createElement('button');
    for (let i = 0; i < classArray.length; i += 1) {
      newButton.classList.add(classArray[i]);
    }
    newButton.setAttribute('type', type);
    newButton.id = id;
    newButton.innerHTML = text;
    return newButton;
  };

  return {
    addHtmlDiv,
    addHtmlNav,
    addHtmlAnchor,
    addHtmlInput,
    addHtmlButton,
  };
})();

export default DomModule;