import { DomModule } from '../../helpers/CreateDomElements';

export const cardContainer = (() => {

  const drawLocationText = () => {
    const html = DomModule.addHtmlH2('Estados Unidos, PE');
    return html;
  };
  const drawCardImage = () => {
    const imgPath = 'https://media3.giphy.com/media/l2JIhq7AR3J7Qq9Hy/giphy.gif?cid=ecf05e474ebbdba1ec6f2e9f54f8291b7a52073300ca456e&rid=giphy.gif';
    const imgClass = ['card-img-top'];
    const html = DomModule.addHtmlImg(imgClass, imgPath);
    return html;
  };

  const drawCard = () => {
    const divForm = DomModule.addHtmlDiv(['photo']);
    divForm.appendChild(drawCardImage());
    divForm.appendChild(drawLocationText());
    return divForm;
  };

  const drawCardContainer = () => {
    const cardWrapper = DomModule.addHtmlDiv(['card-wrapper']);
    cardWrapper.append(drawCard());
    return cardWrapper;
  };


  return {
    drawCardContainer,
    drawCard,
    drawCardImage,
    drawLocationText,
  };
})();

export default cardContainer;