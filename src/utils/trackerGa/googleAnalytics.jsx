import ReactGA from 'react-ga';
import { configEnv } from '../environmet/configEnv';
configEnv();

/**
 * Event - Initialize tracking.
 * @param {string} trackingID
 */
export const initializeGA = (trackingID) => {
  ReactGA.initialize(trackingID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

/**
 * Event - Tracking Page Visit.
 * @param {string} location
 */

export const sendPageView = (location, options) => {
  ReactGA.set({
    location,
    ...options,
  });
  ReactGA.pageview(location);
}

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const eventGA = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  })
}
