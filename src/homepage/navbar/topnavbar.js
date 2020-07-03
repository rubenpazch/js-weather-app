import { DomModule } from '../../helpers/CreateDomElements';

export const createNavBar = (() => {
  const drawNavBar = () => {
    const navContainer = DomModule.addHtmlNav(['navbar', 'navbar-light', 'bg-light', 'd-flex', 'justify-content-center']);
    const linkTitleApp = DomModule.addHtmlAnchor(['navbar-brand'], '#', 'Weather App', 'idlinkTitle');
    const divForm = DomModule.addHtmlDiv(['form-inline']);
    const inputSerachCity = DomModule.addHtmlInput(['form-control', 'mr-sm-2'], 'search', 'Search', 'idInputSerach');
    const buttonSearch = DomModule.addHtmlButton(['btn', 'btn-outline-success', 'my-2', 'my-sm-0'], 'submit', 'idButtonSearch', 'Search');

    navContainer.appendChild(linkTitleApp);
    divForm.appendChild(inputSerachCity);
    divForm.appendChild(buttonSearch);
    navContainer.appendChild(divForm);

    return navContainer;
  };

  return {
    drawNavBar,
  };
})();

export default createNavBar;