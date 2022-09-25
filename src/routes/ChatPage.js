import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import { useTitle } from 'hooks/page-hooks';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const ChatPage = (props) => {

    useTitle('Chat Page');

    return (
        <DashboardPagesLayout>
            <div className='chat-page'>
                Chat Page
            </div>
        </DashboardPagesLayout>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);