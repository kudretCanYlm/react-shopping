import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import ListBoxTypeA from 'components/base/listboxes/ListBoxTypeA';
import React, { memo, useEffect } from 'react';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import { connect } from 'react-redux';
import { CLOSE_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import ButtonTextBox from 'components/base/textboxes/ButtonTextBox';
import MemberCard from 'components/main/cards/MemberCard';
import { useTitle } from 'hooks/page-hooks';
import { GET_MEMBERS_BY_RANGE } from 'redux/actions/member/MemberAction';

const mapStateToProps = (state) => ({
  textBoxReducer: state.TextBoxReducer,
  memberReducer: state.MemberReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    closNavBarTextBox: () => dispatch({ type: CLOSE_NAV_BAR_TEXT_BOX }),
    getMembersByRange: (pageNumber, pageSize) => dispatch(GET_MEMBERS_BY_RANGE(pageNumber, pageSize))
  };
};

const MemberPage = (props) => {
  useTitle(`Member Page`);
  const { closNavBarTextBox, getMembersByRange, memberReducer } = props;
  const pageSize = 3;

  const handleUserScroll = () => {
    // get scroll top value
    const scrollTop = document.documentElement.scrollTop;

    // get the entire height, including padding
    const scrollHeight = document.documentElement.scrollHeight;

    // check if user is near to the bottom of the body
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      if (
        memberReducer.isLoading != true &&
        memberReducer.isEnd != true &&
        memberReducer.isError != true
      ) {
        getMembersByRange(memberReducer.pageCount, pageSize)
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleUserScroll);

    return () => {
      window.removeEventListener('scroll', handleUserScroll);
    };
  });


  useEffect(() => {

    getMembersByRange(memberReducer.pageCount, pageSize)
    closNavBarTextBox();
  }, []);



  const getListBoxValues = (value) => {
    //will use serach function on here
    console.log(value);
  };

  const list = [
    {
      name: 'most papuler',
      value: 'most-popular-val'
    },
    {
      name: 'A-Z',
      value: 'a-z-val'
    },
    {
      name: 'Z-A',
      value: 'z-a-val'
    },
    {
      name: 'most costly',
      value: 'most costly-val'
    }
  ];

  const members = [
    {
      id: '0b382dfd-9660-444f-9f2c-0bf9b65cb3d4',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as,I develop myself as well as sdsad'
    },
  ];

  const onClickTextBox = (text) => {
    console.log(text);
  };

  return (
    <DashboardPagesLayout>
      <div className="member-page flex-column">
        <div className="top title-margin-2">
          <ButtonTextBox className="title-margin-1" onClickBtn={onClickTextBox} />
          <ListBoxTypeA className="list-box" onChangeSelect={getListBoxValues} list={list} />
        </div>
        <StyleRoot>
          <div style={fades.fadeInUp} className="center flex-row">

          {memberReducer.payload.length > 0
              ? memberReducer.payload.map((member, key) => (
                <MemberCard
                to={`${member.id}`}
                className="icon-margin-2 member-card "
                member={{
                  id:member.Id,
                  name:member.Name,
                  job:member.Job,
                  description:member.Description,
                  //imgUrl:member.ImgUrl
                }}
              />
              ))
              : ''}
            {memberReducer.isLoading == true && memberReducer.isError != true ?

              <SkeletonCreate pageSize={pageSize} />
              : ''}
            {memberReducer.isError ? memberReducer.errMessage : ''}

          </div>
        </StyleRoot>
      </div>
    </DashboardPagesLayout>
  );
};

const SkeletonCreate = memo(({ pageSize = 3 }) => {

  return (
    <>
      {[...Array(pageSize)].map(() => {
        console.log("test");
        return (
          <Skeleton containerClassName='member-card' style={{ height: "100%" }} className=" main-card flex-column member-card" />
        )
      })}
    </>
  )

})

export default connect(mapStateToProps, mapDispatchToProps)(MemberPage);
