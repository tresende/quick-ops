import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RequestInfo from '../../components/RequestInfo';
import TimelineService from '../../services/TimelineService';

const Timeline = ({ getTimelineData, timeline }) => {
    useEffect(() => {
        const getInitialData = async () => {
            await getTimelineData();
        };
        getInitialData();
    }, []);

    return (
        <>
            {
                timeline.map((item) => <RequestInfo key={item.id} />)
            }
        </>
    );
};

Timeline.propTypes = {
    timeline: PropTypes.array.isRequired,
    getTimelineData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    getTimelineData: () => dispatch(TimelineService.getTimelineData()),
});

const mapStateToProps = (state) => ({
    timeline: state.timelineReducer.timeline,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
