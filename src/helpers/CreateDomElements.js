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

  const addHtmlUl = (classArray, id = null) => {
    const element = document.createElement('ul');
    for (let i = 0; i < classArray.length; i += 1) {
      element.classList.add(classArray[i]);
    }
    if (id != null) element.id = id;
    return element;
  };

  const addHtmlLi = (classArray, id = null) => {
    const element = document.createElement('li');
    for (let i = 0; i < classArray.length; i += 1) {
      element.classList.add(classArray[i]);
    }
    if (id != null) element.id = id;
    return element;
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

  const addHtmlImg = (classArray, srcPath) => {
    const img = new Image();
    img.src = srcPath;

    for (let i = 0; i < classArray.length; i += 1) {
      img.classList.add(classArray[i]);
    }
    return img;
  };

  const addHtmlH2 = (text, classArray = null) => {
    const element = document.createElement('h2');
    const content = document.createTextNode(text);
    element.appendChild(content);
    if (classArray != null) {
      for (let i = 0; i < classArray.length; i += 1) {
        element.classList.add(classArray[i]);
      }
    }
    return element;
  };

  const addHtmlH1 = (text, classArray = null) => {
    const element = document.createElement('h1');
    const content = document.createTextNode(text);
    element.appendChild(content);
    if (classArray != null) {
      for (let i = 0; i < classArray.length; i += 1) {
        element.classList.add(classArray[i]);
      }
    }
    return element;
  };

  const addHtmlH6 = (text, classArray = null) => {
    const element = document.createElement('h6');
    const content = document.createTextNode(text);
    element.appendChild(content);
    if (classArray != null) {
      for (let i = 0; i < classArray.length; i += 1) {
        element.classList.add(classArray[i]);
      }
    }
    return element;
  };

  const addHtmlp = (text, classArray = null) => {
    const element = document.createElement('p');
    const content = document.createTextNode(text);
    element.appendChild(content);
    if (classArray != null) {
      for (let i = 0; i < classArray.length; i += 1) {
        element.classList.add(classArray[i]);
      }
    }
    return element;
  };

  const addHtmlSpan = (text) => {
    const element = document.createElement('span');
    const content = document.createTextNode(text);
    element.appendChild(content);
    return element;
  };
  return {
    addHtmlDiv,
    addHtmlNav,
    addHtmlAnchor,
    addHtmlInput,
    addHtmlButton,
    addHtmlImg,
    addHtmlH2,
    addHtmlSpan,
    addHtmlH1,
    addHtmlp,
    addHtmlUl,
    addHtmlLi,
    addHtmlH6,
  };
})();

export default DomModule;