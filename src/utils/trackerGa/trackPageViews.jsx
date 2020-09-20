import React from 'react';
import { sendPageView } from '../../utils/trackerGa/googleAnalytics';

const initialTrackerPage = (WrappedComponent, options = {}) => {
  return class extends React.Component {
    state = {
			page: null,
    }

    static getDerivedStateFromProps(props, state) {
      const page = props.location.pathname + props.location.search;
      if (page !== state.page) {
        return {
          page,
        };
      }
      return null;
    }

    componentDidMount() {
      const page = this.props.location.pathname + this.props.location.search;
      sendPageView(page, options);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      const nextPage = this.state.page;

      if (currentPage !== nextPage) {
        sendPageView(nextPage, options);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  };
};

export default initialTrackerPage;
