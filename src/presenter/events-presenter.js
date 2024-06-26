import {render} from '../render.js';
import TripSortView from '../view/trip-sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventsItemCreateView from '../view/trip-events-item-create-view.js';
import TripEventsItemEditView from '../view/trip-events-item-edit-view.js';
import TripEventsItemView from '../view/trip-events-item-view.js';

export default class EventsPresenter {

  init() {
    const tripEventsContainerElement = document.querySelector('.trip-events');
    render(new TripSortView(), tripEventsContainerElement);
    render(new TripEventsListView(), tripEventsContainerElement);

    const tripEventsListContainerElement = document.querySelector('.trip-events__list');
    render(new TripEventsItemCreateView(), tripEventsListContainerElement);
    render(new TripEventsItemEditView(), tripEventsListContainerElement);

    for (let i = 0; i < 3; i++) {
      render(new TripEventsItemView(), tripEventsListContainerElement);
    }
  }
}

