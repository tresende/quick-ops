import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RequestInfo from '../../components/RequestInfo';
import TimelineService from '../../services/TimelineService';
import LoadingService from '../../services/LoadingSerivce';

const Timeline = ({ getTimelineData, addLoadingItem, removeLoadingItem, timeline }) => {
    useEffect(() => {
        const getInitialData = async () => {
            const id = addLoadingItem();
            await getTimelineData();
            removeLoadingItem(id);
        };
        getInitialData();
    }, []);

    return (
        <>
            {
                timeline.map((item) => <RequestInfo key={item.id} request={item} />)
            }
        </>
    );
};

Timeline.propTypes = {
    timeline: PropTypes.array.isRequired,
    getTimelineData: PropTypes.func.isRequired,
    addLoadingItem: PropTypes.func.isRequired,
    removeLoadingItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    getTimelineData: () => dispatch(TimelineService.getTimelineData()),
    addLoadingItem: () => dispatch(LoadingService.addLoadingItem()),
    removeLoadingItem: (id) => dispatch(LoadingService.removeLoadingItem(id)),
});

const mapStateToProps = (state) => ({
    timeline: state.timelineReducer.timeline,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
