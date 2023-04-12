import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import ListBoxTypeA from 'components/base/listboxes/ListBoxTypeA';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import { connect } from 'react-redux';
import { CLOSE_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import ButtonTextBox from 'components/base/textboxes/ButtonTextBox';
import MemberCard from 'components/main/cards/MemberCard';
import { useTitle } from 'hooks/page-hooks';
import { GET_MEMBERS_BY_RANGE, SET_MEMBER_CLEAR } from 'redux/actions/member/MemberAction';
import Skeleton from 'react-loading-skeleton';
import { toMemberDetailsPage } from 'utils/Redirects';
import { createFilterObject, createOrderByObject } from 'api/utils/paged-list';

const mapStateToProps = (state) => ({
  textBoxReducer: state.TextBoxReducer,
  memberReducer: state.MemberReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    closNavBarTextBox: () => dispatch({ type: CLOSE_NAV_BAR_TEXT_BOX }),
    getMembersByRange: (pageNumber, pageSize, orderBys = [], filters = []) =>
      dispatch(GET_MEMBERS_BY_RANGE(pageNumber, pageSize, orderBys, filters)),
    setMemberClear: () => dispatch(SET_MEMBER_CLEAR())
  };
};

const MemberPage = (props) => {
  useTitle(`Member Page`);
  const { closNavBarTextBox, getMembersByRange, memberReducer, setMemberClear } = props;
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
        getMembersByRange(memberReducer.pageCount, pageSize, orderBys, filters);
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
    closNavBarTextBox();
  }, []);

  const [filters, setFilters] = useState(null);
  const [orderBys, setOrderBys] = useState([]);

  const getListBoxValues = useCallback((value = '') => {
    if (value == '-1') {
      setOrderBys([]);
      return;
    }

    var [name, direction] = value.split('.');
    var orderBy = createOrderByObject(name, direction);
    setOrderBys([orderBy]);
  });

  const list = [
    {
      name: 'No Sort',
      value: '-1'
    },
    {
      name: 'Name A-Z',
      value: 'name.0'
    },
    {
      name: 'Name Z-A',
      value: 'name.1'
    },
    {
      name: 'Time Ascending',
      value: 'createdAt.0'
    },
    {
      name: 'Time Descending',
      value: 'createdAt.1'
    }
  ];

  const onClickTextBoxAndInit = (text) => {
    setMemberClear();

    text == '' ? setFilters([]) : setFilters([createFilterObject('search', 0, text)]);
  };

  useEffect(() => {
    if (filters != null) getMembersByRange(memberReducer.pageCount, pageSize, orderBys, filters);
  }, [filters]);

  return (
    <DashboardPagesLayout>
      <div className="member-page flex-column">
        <div className="top title-margin-2">
          <ButtonTextBox
            className="title-margin-1"
            initAction={onClickTextBoxAndInit}
            isWithParams={true}
            onClickBtn={onClickTextBoxAndInit}
          />
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
                      to: toMemberDetailsPage(member.Id),
                      name: member.Name,
                      job: member.Job,
                      description: member.Description,
                      imgUrl:
                        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg'
                    }}
                  />
                ))
              : ''}
            {memberReducer.isLoading == true &&
            memberReducer.isEnd == false &&
            memberReducer.isError != true ? (
              <SkeletonCreate pageSize={pageSize} />
            ) : (
              ''
            )}
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
        return (
          <Skeleton
            containerClassName="project-card"
            style={{ height: '100%' }}
            className="main-card flex-column project-card icon-margin-2"
          />
        );
      })}
    </>
  );
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberPage);
