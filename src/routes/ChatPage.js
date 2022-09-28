import TabTypeA from 'components/base/tabs/TabTypeA';
import SearchTextBox from 'components/base/textboxes/SearchTextBox';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import { useTitle } from 'hooks/page-hooks';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { TabList, TabPanel, Tabs } from 'react-tabs';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ChatPage = (props) => {
  useTitle('Chat Page');

  const [searchParams, setSearchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(searchParams.get('tab') ?? 0);

  useEffect(() => {
    setSearchParams({ ['tab']: 0 });
    setTabIndex(searchParams.get('tab') ?? 0);
  }, []);

  const tabSelect = (index) => {
    setTabIndex(index);
    setSearchParams({ ['tab']: index });
  };

  const tabList = ['Chat', 'Friends'];

  return (
    <DashboardPagesLayout>
      <div className="chat-page flex-row">
        <div className="chat-page-left flex-column">
          <Tabs className="scroll-overflow-y" selectedIndex={tabIndex} onSelect={tabSelect}>
            <div className="chat-page-menu flex-row">
              <TabList className="tab-list flex-row">
                {tabList.map((tab, key) => (
                  <TabTypeA
                    key={key}
                    className={`chat-page-tab flex-row ${
                      tabIndex == key ? 'bg-col-1-hover-1' : ''
                    }`}
                  >
                    {tab}
                  </TabTypeA>
                ))}
              </TabList>
              <SearchTextBox
                className="chat-page-text-box"
                isWithParams={false}
                placeHolder="Find"
                textChange={() => {
                  'will add';
                }}
              />
            </div>
            <div className="chat-page-members flex-column">
              <TabPanel>
                chat-page-members <br /> chat-page-members
                <br />
                chat-page-members
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                chat-page-members
                <br />
                chat-page-members
                <br />
                <br />
                chat-page-members
                <br />
                chat-page-members
                <br />
                chat-page-members
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                <br />
              </TabPanel>
              <TabPanel>
                friends <br /> friends
                <br />
                friends
                <br />
                friends
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                friends
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                friends
                <br />
                friends
                <br />
                <br />
                friends
                <br />
                friends
                <br />
                friends
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                chat-page-members
                <br />
                <br />
                <br />
                <br />
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <div className="chat-page-right flex-column">
          <div className="chat-page-member-options">chat-page-member-options</div>
          <div className="chat-page-messages flex-row">
            chat-page-messages <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />a
          </div>
          <div className="chat-page-send-message flex-column">chat-page-send-message</div>
        </div>
      </div>
    </DashboardPagesLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
