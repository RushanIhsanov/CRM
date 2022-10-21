import * as model from './../model.js';
import * as View from './table.view.js';

function init() {
    const requests = model.getRequests();
    View.renderRequest(requests);
    addEventListeners();
    const newRequestsCount = model.countViewRequests();
    View.renderBadgeNew(newRequestsCount);
    const filter = model.getFilter();

    View.updateFilter(filter);
}

function addEventListeners() {
    View.elements.product.addEventListener('change', filterProducts);
    View.elements.topStatusBar.addEventListener('click', filterByStatus);
    View.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus);
    });
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequests(filter);
    View.renderRequest(filteredRequests);
}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value);
    const filteredRequests = model.filterRequests(filter);
    View.renderRequest(filteredRequests);
    View.updateStatusLinks(e.target.dataset.value);
}

init();
