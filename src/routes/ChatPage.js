import TabTypeA from 'components/base/tabs/TabTypeA';
import SearchTextBox from 'components/base/textboxes/SearchTextBox';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import UserChatCard from 'components/main/cards/UserChatCard';
import { useTitle } from 'hooks/page-hooks';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import SendMessageCard from 'components/main/cards/SendMessageCard';

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

  const UsersWithChat = [
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 4
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 15
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfgfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfssdff-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg',
      lastMessageTime: '2 days ago',
      lastMessage: 'Hi Test Name',
      unreadCount: 0
    }
  ];

  const friends = [
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghasdgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsasd-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdfgas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdfghksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlccvbksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasfghasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlsdfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdxcvfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasfghs',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasddfgdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddadfgasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    },
    {
      id: 'sdlfksflşk-sdfdsfsdfsdf-hfghfghfgh-ddasdasdas',
      name: 'Test Name',
      img: 'https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg'
    }
  ];

  const UserOnClick = (id) => {
    //will addd
    console.log(id + 'clicked');
  };

  const MessageOnClick = (text) => {
    console.log(text);
  };

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

            <TabPanel>
              <StyleRoot>
                <div style={fades.fadeInUpBig} className="chat-page-members flex-column">
                  {UsersWithChat.map((user, key) => (
                    <UserChatCard
                      key={key}
                      onClickUser={UserOnClick}
                      isWithMessage={true}
                      userChat={user}
                      className="title-margin-2"
                    />
                  ))}
                </div>
              </StyleRoot>
            </TabPanel>
            <TabPanel>
              <StyleRoot>
                <div style={fades.fadeInUpBig} className="chat-page-members flex-column">
                  {friends.map((friend, key) => (
                    <UserChatCard
                      key={key}
                      onClickUser={UserOnClick}
                      isWithMessage={false}
                      userChat={friend}
                      className="title-margin-2"
                    />
                  ))}
                </div>
              </StyleRoot>
            </TabPanel>
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
          <div className="chat-page-send-message flex-column">
            <SendMessageCard className="icon-margin-right-4" onClick={MessageOnClick} />
          </div>
        </div>
      </div>
    </DashboardPagesLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);