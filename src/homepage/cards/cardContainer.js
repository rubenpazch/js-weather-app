import { DomModule } from '../../helpers/CreateDomElements';

export const cardContainer = (() => {
  const drawCardContainer = () => {
    const cardWrapper = DomModule.addHtmlDiv(['card-wrapper']);
    const divForm = DomModule.addHtmlDiv(['photo']);
    cardWrapper.appendChild(divForm);
    return cardWrapper;
  };

  return {
    drawCardContainer,
  };
})();

export default cardContainer;