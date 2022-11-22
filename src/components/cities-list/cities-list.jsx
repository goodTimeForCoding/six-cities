import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; // функция высшего порядка, чтобы соединить компонент со store
import {ActionCreator} from '../../redux/action';
import {cardsPropsType} from '../prop-types/prop-types-card';

const CitiesList = (props) => {
  const {citiesData, selectedCityId, onClick} = props;
  return (
    <>
      {
        citiesData.map((item) => {
          const active = item.id === selectedCityId ? `tabs__item--active` : ``;
          return (
            <li key={item.id} className="locations__item" >
              <a className={`locations__item-link tabs__item ${active}`} href={`#`}
                onClick={() => onClick(item)}> {/* компонента вызывает функцию-колбэк с параметром при клике, параметр передаём как payload(элемент объекта action), и обрабатываем его в reducer*/}
                <span>{item.city}</span>
              </a>
            </li>
          );
        })
      }
    </>
  );
};

CitiesList.propTypes = {
  citiesData: cardsPropsType,
  selectedCityId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

/*
--------
Событие клика на компоненте вызывает диспетчер с созданным объектом действия (ActionCreator), диспетчер вызывает функцию редьюсер, которая изменяет store, и так как компонента законнекчена к store, то она реагирует на изменение store и перерисовывается:
Action --> Dispatcher --> Store --> View(действие во View превращается в Action и View обновляется автоматически при изменении Store)
--------
mapStateToProps - это возможность воспользоваться данными глобального стейта в пропсах компонента, то есть в компоненте будут созданы пропсы, значениями которых станут данные из глобального хранилища, mapDispatchToProps - тоже самое только для действий
-------
*/

const mapStateToProps = (state) => { /* функция преобразующая часть состояния в пропсы, она принимает состояние хранилища initialState, и в объекте вытаскивает нужные данные из сотояния и они станут пропсами*/
  // console.log(state); /* для просмотра структуры объекта состояния*/
  return {
    citiesData: state.cities, /* выбираем нужные данные для пропса из объекта состояния*/
    selectedCityId: state.selectedCity,
  };
};

const mapDispatchToProps = (dispatch) => { // преобразователь вызовов диспетчера в пропсы, ключи объекта, который вернёт mapDispatchToProps станут пропсами, но в виде функций, то есть onClick это колбэк который передаётся компоненту в виде пропса, и будет вызываться при наступлении события
  return {
    onClick: (it) => {
      dispatch(ActionCreator.selectCity(it));
    }, // в скобках получаем объект и диспатчим(передаём его в reducer) его, функция dispatch(action) вызывает функцию reducer(this._state, action) и меняет состояние
  };
};

export {CitiesList};// экспортируем незаконнекченный компонент для тестов
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);// connect(mapStateToProps, mapDispatchToProps) это HOC который подружит компонент с Provider из index.js, то есть оборачиваем наш компонент HOC-ом, компонент становится подключенным к хранилищу и будет реагировать на каждое изменение store
