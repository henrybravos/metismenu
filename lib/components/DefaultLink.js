

Object.defineProperty(exports, '__esModule', {
  value: true,
});

let _react = require('react');

let _react2 = _interopRequireDefault(_react);

let _propTypes = require('prop-types');

let _propTypes2 = _interopRequireDefault(_propTypes);

let _classnames = require('classnames');

let _classnames2 = _interopRequireDefault(_classnames);

let _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/components/DefaultLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 17.09.2016
 */

let DefaultLink = function DefaultLink(_ref) {
  let className = _ref.className,
    classNameActive = _ref.classNameActive,
    classNameHasActiveChild = _ref.classNameHasActiveChild,
    active = _ref.active,
    hasActiveChild = _ref.hasActiveChild,
    to = _ref.to,
    externalLink = _ref.externalLink,
    hasSubMenu = _ref.hasSubMenu,
    toggleSubMenu = _ref.toggleSubMenu,
    activateMe = _ref.activateMe,
    children = _ref.children;
  return _react2.default.createElement(
    _reactRouterDom.NavLink,
    {
      className: (0, _classnames2.default)(className, active && classNameActive, hasActiveChild && classNameHasActiveChild),
      to,
      onClick: hasSubMenu ? toggleSubMenu : activateMe,
      target: externalLink ? '_blank' : undefined,
    },
    children,
  );
};

DefaultLink.defaultProps = {
  externalLink: false,
  toggleSubMenu: null,
};

DefaultLink.propTypes = {
  className: _propTypes2.default.string.isRequired,
  classNameActive: _propTypes2.default.string.isRequired,
  classNameHasActiveChild: _propTypes2.default.string.isRequired,
  active: _propTypes2.default.bool.isRequired,
  hasActiveChild: _propTypes2.default.bool.isRequired,
  to: _propTypes2.default.string.isRequired,
  externalLink: _propTypes2.default.bool,
  hasSubMenu: _propTypes2.default.bool.isRequired,
  toggleSubMenu: _propTypes2.default.func,
  activateMe: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]).isRequired,
};

exports.default = DefaultLink;
