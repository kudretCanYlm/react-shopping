import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import ListBoxTypeA from 'components/base/listboxes/ListBoxTypeA';
import React, { useEffect } from 'react';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import { connect } from 'react-redux';
import { CLOSE_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import ButtonTextBox from 'components/base/textboxes/ButtonTextBox';
import MemberCard from 'components/main/cards/MemberCard';

const mapStateToProps = (state) => ({
  textBoxReducer: state.TextBoxReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    closNavBarTextBox: () => dispatch({ type: CLOSE_NAV_BAR_TEXT_BOX })
  };
};

const MemberPage = (props) => {
  const { closNavBarTextBox } = props;

  useEffect(() => {
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
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as,I develop myself as well as sdsad'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    },
    {
      id: 'ytg-sfdg-adfds',
      name: 'Kudret Can',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
      job: 'Programer',
      description: 'I develop myself as well as'
    }
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
            {members.map((member) => (
              <MemberCard
                to={`${member.id}`}
                className="icon-margin-2 member-card "
                member={member}
              />
            ))}
          </div>
        </StyleRoot>
      </div>
    </DashboardPagesLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPage);
