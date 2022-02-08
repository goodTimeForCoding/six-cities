import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../redux/action';

const Sort = (props) => {
  const {selectedSort, sortItems, onClick} = props;
  return (
    <>
      <form className="places__sorting" action={`#`} method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          {
              sortItems.map((item) => {
                const active = item === selectedSort ? `places__option--active` : ``;
                return (
                  <li key={item} className={`places__option ${active}`} tabIndex="0"   onClick={() => onClick(item)}>{item}</li>
                )
              })
          }
        </ul>
      </form>
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    selectedSort: state.selectedSort,
    sortItems: state.sortItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (it) => {
      dispatch(ActionCreator.selectSort(it));
    },
  };
};

Sort.propTypes = {
  selectedSort: PropTypes.string.isRequired,
  sortItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};



export { Sort };
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
