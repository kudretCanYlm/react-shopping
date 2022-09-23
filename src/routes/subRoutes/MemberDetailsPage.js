import React, { useEffect, useState } from 'react';
import MemberDetailsCard from 'components/main/cards/detailsCards/MemberDetailsCard';
import { StyleRoot } from 'radium';
import { useParams, useSearchParams } from 'react-router-dom';
import { fades } from 'components/base/animations/Animations';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ArticleCard from 'components/main/cards/ArticleCard';
import PostCard from 'components/main/cards/PostCard';
import { IMG_3 } from 'components/base/img/common/stock-images';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import TabTypeA from 'components/base/tabs/TabTypeA';
import { useTitle } from 'hooks/page-hooks';

const MemberDetailsPage = () => {
  const { memberId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(searchParams.get('tab') ?? 0);

  useEffect(() => {
    setSearchParams({ ['tab']: 0 });
  }, []);

  const tabSelect = (index) => {
    setTabIndex(index);
    setSearchParams({ ['tab']: index });
  };


  //will add animation router between articles,posts,shared

  const member = {
    memberId,
    name: 'Test Name',
    role: 'Test Role',
    about: 'I am a software engineer in a company.I have 4 years experience',
    profileImg:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
    BackImg:
      'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'
  };

  const memberArticles = [
    {
      articleId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      title: 'How to work from home',
      BackImg:
        'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg',
      summary: 'I talked about working from home. I hope which will be userful'
    },
    {
      articleId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      title: 'How to work from home',
      BackImg:
        'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg',
      summary: 'I talked about working from home. I hope which will be userful'
    },
    {
      articleId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      title: 'How to work from home',
      BackImg:
        'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg',
      summary: 'I talked about working from home. I hope which will be userful'
    },
    {
      articleId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      title: 'How to work from home',
      BackImg:
        'https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg',
      summary: 'I talked about working from home. I hope which will be userful'
    },
    {
      articleId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      title: 'How to work from home',
      BackImg:
        'https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg',
      summary: 'I talked about working from home. I hope which will be userful'
    }
  ];

  const posts = [
    {
      postId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      postOwner: {
        name: 'Test Name',
        profileImg: IMG_3
      },
      postTimeSpan: '2 day',
      postText: 'I talked about working from home. I hope which will be userful,'.repeat(5),
      postImages: [
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png'
      ],
      PostLikeAmount: 120,
      PostCommentAmount: 20,
      isLiked: false
    },
    {
      postId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      postOwner: {
        name: 'Test Name',
        profileImg: IMG_3
      },
      postTimeSpan: '2 day',
      postText: 'I talked about working from home. I hope which will be userful,'.repeat(5),
      postImages: [
        'https://nasakurumsal.com/wp-content/uploads/2020/12/types-of-software.png',
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png'
      ],
      PostLikeAmount: 120,
      PostCommentAmount: 20,
      isLiked: true
    },
    {
      postId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      postOwner: {
        name: 'Test Name',
        profileImg: IMG_3
      },
      postTimeSpan: '2 day',
      postText: 'I talked about working from home. I hope which will be userful,'.repeat(5),
      postImages: [
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png'
      ],
      PostLikeAmount: 120,
      PostCommentAmount: 20,
      isLiked: false
    },
    {
      postId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      postOwner: {
        name: 'Test Name',
        profileImg: IMG_3
      },
      postTimeSpan: '2 day',
      postText: 'I talked about working from home. I hope which will be userful,'.repeat(5),
      postImages: [
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png'
      ],
      PostLikeAmount: 120,
      PostCommentAmount: 20,
      isLiked: true
    },
    {
      postId: 'asdasd47879-sdaf4456asdf-sdafsdaf67',
      postOwner: {
        name: 'Test Name',
        profileImg: IMG_3
      },
      postTimeSpan: '2 day',
      postText: 'I talked about working from home. I hope which will be userful,'.repeat(5),
      postImages: [
        'https://i.pcmag.com/imagery/roundups/02HDufdqeRUDu3tl0NnY2qZ-2.fit_lim.size_760x427.v1649351854.jpg',
        'https://www.veridyen.com/blog/wp-content/uploads/2021/08/veridyen-blog-react-native-large.jpeg',
        'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png'
      ],
      PostLikeAmount: 120,
      PostCommentAmount: 20,
      isLiked: false
    }
  ];

  useTitle(`Member ${member.name}`);

  return (
    <StyleRoot>
      <div style={fades.fadeIn} className="member-details-page flex-row">
        <div className="left flex-column">
          <MemberDetailsCard styl member={member} className="left-member-card" />
          <Tabs className={'full-width'} selectedIndex={tabIndex} onSelect={tabSelect}>
            <TabList className="tab-list flex-row">
              <TabTypeA className={tabIndex == 0 ? 'bg-col-1-hover-1' : ''}>Articles</TabTypeA>
              <TabTypeA className={tabIndex == 1 ? 'bg-col-1-hover-1' : ''}>Posts</TabTypeA>
              <TabTypeA className={tabIndex == 2 ? 'bg-col-1-hover-1' : ''}>Resume</TabTypeA>
            </TabList>
            <TabPanel>
              <ThinMidTitle className="title-color-5 icon-margin-4 center-text">{`${member.name}' Articles`}</ThinMidTitle>
              <StyleRoot>
                <div style={fades.fadeInUpBig} className="articles flex-row">
                  {memberArticles.length > 0 ? (
                    memberArticles.map((article, key) => (
                      <ArticleCard key={key} article={article} className="icon-margin-2" />
                    ))
                  ) : (
                    <ThinMidTitle className="title-color-5 icon-margin-4 center-text">{`there isn't any article`}</ThinMidTitle>
                  )}
                </div>
              </StyleRoot>
            </TabPanel>
            <TabPanel>
              <ThinMidTitle className="title-color-5 icon-margin-4 center-text">{`${member.name}' Posts`}</ThinMidTitle>
              <StyleRoot>
                <div style={fades.fadeInUpBig} className="posts flex-column">
                  {posts.length > 0 ? (
                    posts.map((post, key) => <PostCard key={key} post={post} className="" />)
                  ) : (
                    <ThinMidTitle className="title-color-5 icon-margin-4 center-text">{`there isn't any post`}</ThinMidTitle>
                  )}
                </div>
              </StyleRoot>
            </TabPanel>
            <TabPanel>
              <ThinMidTitle className="title-color-5 icon-margin-4 center-text">{`${member.name}' Resume`}</ThinMidTitle>
              <div className="resume flex-column"></div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="right flex-column">right right right right right right right right</div>
      </div>
    </StyleRoot>
  );
};

export default MemberDetailsPage;
