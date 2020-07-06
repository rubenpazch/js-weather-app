import { DomModule } from '../../helpers/CreateDomElements';

export const createNavBar = (() => {
  const drawNavBar = () => {
    const navContainer = DomModule.addHtmlNav(['navbar', 'navbar-light', 'bg-light', 'd-flex', 'justify-content-center']);
    const linkTitleApp = DomModule.addHtmlAnchor(['navbar-brand'], '#', 'Weather App', 'idlinkTitle');
    const divForm = DomModule.addHtmlDiv(['form-inline']);
    const inputSerachCity = DomModule.addHtmlInput(['form-control', 'mr-sm-2'], 'search', 'Search', 'idInputSerach');
    const buttonSearch = DomModule.addHtmlButton(['btn', 'btn-outline-success', 'my-2', 'my-sm-0'], 'submit', 'idButtonSearch', 'Search');

    const divSwitch1 = DomModule.addHtmlDiv(['custom-control', 'custom-radio', 'custom-control-inline', 'ml-5']);
    const divSwitch2 = DomModule.addHtmlDiv(['custom-control', 'custom-radio', 'custom-control-inline']);
    const inputFarent = DomModule.addHtmlInputRadio(['custom-control-input'], 'radio', 'customRadioInline1', 'customRadioInline1', true);
    const inputCelsius = DomModule.addHtmlInputRadio(['custom-control-input'], 'radio', 'customRadioInline2', 'customRadioInline1', false);
    const labelFarent = DomModule.addHtmlLabel(['custom-control-label'], 'idLabelFarent', 'customRadioInline1', 'Fº');
    const labelCelsius = DomModule.addHtmlLabel(['custom-control-label'], 'idLabelFarent', 'customRadioInline2', 'Cº');

    divSwitch1.appendChild(inputFarent);
    divSwitch1.appendChild(labelFarent);

    divSwitch2.appendChild(inputCelsius);
    divSwitch2.appendChild(labelCelsius);

    navContainer.appendChild(linkTitleApp);
    divForm.appendChild(inputSerachCity);
    divForm.appendChild(buttonSearch);
    navContainer.appendChild(divForm);
    navContainer.appendChild(divSwitch1);
    navContainer.appendChild(divSwitch2);

    return navContainer;
  };

  return {
    drawNavBar,
  };
})();

export default createNavBar;